# Deployment Guide

## 🚀 Overview

This guide covers deploying the Playlist Poem dApp to production, including smart contract deployment, indexer setup, and frontend hosting.

## 📋 Prerequisites

- **Aptos CLI** installed and configured
- **Node.js 18+** for frontend builds
- **Git** for version control
- **Aptos wallet** with APT for gas fees
- **Domain name** (optional) for custom URL

## 🔧 Environment Setup

### 1. Production Environment Variables

Create production `.env` files:

**Frontend (`.env.production`)**:
```bash
# Contract & Network (update for mainnet)
NEXT_PUBLIC_CONTRACT_ADDRESS=0x[PRODUCTION_CONTRACT_ADDRESS]
NEXT_PUBLIC_NETWORK=mainnet

# Indexer Configuration
NEXT_PUBLIC_INDEXER_ENDPOINT=https://api.mainnet.aptoslabs.com/nocode/v1/api/[PROCESSOR_ID]/v1/graphql
NEXT_PUBLIC_INDEXER_API_KEY=aptoslabs_[PRODUCTION_API_KEY]

# Full Node API (optional)
NEXT_PUBLIC_APTOS_API_KEY=AG-[PRODUCTION_FULL_NODE_KEY]
```

**Smart Contract (`.env`)**:
```bash
PROJECT_NAME=playlist-poems
APP_NETWORK=mainnet
MODULE_PUBLISHER_ACCOUNT_ADDRESS=0x[YOUR_MAINNET_ADDRESS]
MODULE_PUBLISHER_ACCOUNT_PRIVATE_KEY=[KEEP_SECRET]
CONTRACT_OBJECT_ADDRESS=0x[PRODUCTION_CONTRACT_ADDRESS]

# Production API Keys
APTOS_API_KEY=AG-[PRODUCTION_API_KEY]
```

## 🏗️ Smart Contract Deployment

### 1. Prepare Mainnet Account

```bash
# Initialize mainnet profile
aptos init --network mainnet --profile mainnet

# Fund account with real APT (use DEX/CEX)
# Verify balance
aptos account list --profile mainnet
```

### 2. Test on Devnet First

```bash
# Switch to devnet for final testing
cd apt/playlist-poems/contract

# Compile and test
aptos move compile --named-addresses message_board_addr=0x[YOUR_DEVNET_ADDRESS]
aptos move test --named-addresses message_board_addr=0x[YOUR_DEVNET_ADDRESS]

# Deploy to devnet
aptos move deploy-object --address-name message_board_addr --assume-yes --profile devnet
```

### 3. Deploy to Mainnet

```bash
# Compile for mainnet
aptos move compile --named-addresses message_board_addr=0x[YOUR_MAINNET_ADDRESS] --profile mainnet

# Final test before deployment
aptos move test --profile mainnet

# Deploy to mainnet (IRREVERSIBLE)
aptos move deploy-object --address-name message_board_addr --assume-yes --profile mainnet
```

**⚠️ Important**: Save the contract object address from deployment output.

### 4. Verify Deployment

```bash
# Check contract exists
aptos account list --query resources --profile mainnet --account 0x[CONTRACT_ADDRESS]

# Test view function
aptos move run-function \
  --function-id 0x[CONTRACT_ADDRESS]::message_board::exist_message \
  --profile mainnet
```

## 🗄️ Indexer Setup (Production)

### 1. Create Production Processor

1. **Go to [Aptos Build](https://build.aptoslabs.com)**
2. **Create new organization**: `{your-name}-prod`
3. **Create project**: `playlist-poems-mainnet`
4. **Create processor application**:
   - Name: `poem-comments-mainnet`
   - Network: **Mainnet**
   - Starting version: Use deployment transaction version

### 2. Configure Processor

```yaml
# Processor Configuration
spec_identifier:
  spec_creator: shepherd@aptoslabs.com
  spec_name: remapping-processor
  spec_version: 0.0.10

common_config:
  network: mainnet
  starting_version: [DEPLOYMENT_VERSION]

custom_config:
  events:
    0x[PRODUCTION_CONTRACT_ADDRESS]::message_board::MessagePostedEvent:
      event_fields:
        $.author:
          - table: comment
            column: author
        $.content:
          - table: comment
            column: content
        $.timestamp:
          - table: comment
            column: when

  db_schema:
    comment:
      author:
        column_type:
          type: move_type
          column_type: address
      content:
        column_type:
          type: move_type
          column_type: string
      when:
        column_type:
          type: move_type
          column_type: u64
```

### 3. Set Up Hasura Permissions

1. **Access Hasura Console** (wait for processor to be "Running")
2. **Track `comment` table**
3. **Configure permissions**:
   ```sql
   -- Anonymous role permissions
   GRANT SELECT ON comment TO anonymous;
   
   -- Enable all columns for select
   author: ✓
   content: ✓  
   when: ✓
   ```

### 4. Test Production Indexer

```bash
# Test GraphQL endpoint
curl -X POST https://api.mainnet.aptoslabs.com/nocode/v1/api/[PROCESSOR_ID]/v1/graphql \
  -H "Authorization: Bearer aptoslabs_[PRODUCTION_API_KEY]" \
  -H "Content-Type: application/json" \
  -d '{"query": "query { comment { author content when } }"}'
```

## 🌐 Frontend Deployment

### 1. Choose Hosting Platform

**Recommended Options**:
- **Vercel** (easiest for Next.js)
- **Netlify** (good for static sites)  
- **AWS Amplify** (enterprise)
- **Railway** (full-stack)

### 2. Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Set environment variables in Vercel dashboard
# Or via CLI:
vercel env add NEXT_PUBLIC_CONTRACT_ADDRESS production
vercel env add NEXT_PUBLIC_NETWORK production
vercel env add NEXT_PUBLIC_INDEXER_ENDPOINT production
vercel env add NEXT_PUBLIC_INDEXER_API_KEY production
```

### 3. Configure Custom Domain

**In Vercel Dashboard**:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records:
   ```
   Type: CNAME
   Name: @ (or subdomain)
   Value: cname.vercel-dns.com
   ```

### 4. Verify Production Build

```bash
# Test build locally first
npm run build
npm run start

# Check all features work:
# ✓ Poem displays correctly
# ✓ Wallet connects
# ✓ Comments load from indexer
# ✓ Comment submission works
# ✓ Transaction links work
```

## 🔄 CI/CD Pipeline

### 1. GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run build
      - run: npm run lint

  deploy-contract:
    needs: test
    runs-on: ubuntu-latest
    if: contains(github.event.head_commit.message, '[deploy-contract]')
    
    steps:
      - uses: actions/checkout@v4
      - name: Install Aptos CLI
        run: |
          curl -fsSL "https://aptos.dev/scripts/install_cli.py" | python3
          
      - name: Deploy Contract
        env:
          APTOS_PROFILE: ${{ secrets.APTOS_MAINNET_PROFILE }}
        run: |
          cd apt/playlist-poems/contract
          aptos move deploy-object --address-name message_board_addr --assume-yes --profile mainnet

  deploy-frontend:
    needs: test
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### 2. Environment Secrets

**In GitHub Settings → Secrets**:
```
VERCEL_TOKEN=[your_vercel_token]
VERCEL_ORG_ID=[your_org_id]  
VERCEL_PROJECT_ID=[your_project_id]
APTOS_MAINNET_PROFILE=[base64_encoded_profile]
```

## 📊 Production Monitoring

### 1. Application Monitoring

**Frontend Monitoring**:
```javascript
// Add to _app.tsx or layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**Error Tracking**:
```bash
# Install Sentry
npm install @sentry/nextjs

# Configure in next.config.js
const { withSentryConfig } = require('@sentry/nextjs');

module.exports = withSentryConfig({
  // Your Next.js config
}, {
  // Sentry configuration
});
```

### 2. Blockchain Monitoring

**Smart Contract Health**:
```bash
# Create monitoring script
#!/bin/bash
CONTRACT_ADDRESS="0x[PRODUCTION_ADDRESS]"

# Check contract is accessible
curl -s "https://api.mainnet.aptoslabs.com/v1/accounts/$CONTRACT_ADDRESS" | jq '.sequence_number'

# Check recent events
curl -s "https://api.mainnet.aptoslabs.com/v1/accounts/$CONTRACT_ADDRESS/events/$CONTRACT_ADDRESS::message_board::MessagePostedEvent?limit=1" | jq '.[] | .sequence_number'
```

**Indexer Health**:
```graphql
# Health check query
query HealthCheck {
  comment(limit: 1) {
    when
  }
}
```

### 3. Alerts & Uptime

**Uptime Monitoring**:
- **UptimeRobot**: Monitor frontend URL
- **Pingdom**: Advanced monitoring with alerts
- **StatusPage**: Public status page

**Blockchain Alerts**:
```javascript
// Monitor failed transactions
const monitorTransactions = async () => {
  const recentEvents = await aptos.getAccountEvents({
    accountAddress: CONTRACT_ADDRESS,
    eventType: "MessagePostedEvent"
  });
  
  // Alert if no events in last hour
  const oneHourAgo = Date.now() - (60 * 60 * 1000);
  const recentEvent = recentEvents.find(e => 
    parseInt(e.data.timestamp) / 1000 > oneHourAgo
  );
  
  if (!recentEvent) {
    // Send alert
    await sendSlackAlert("No comments in last hour");
  }
};
```

## 🔒 Security Checklist

### Pre-Deployment Security

- [ ] **Smart contract audited** by security firm
- [ ] **Private keys secured** in hardware wallet/HSM
- [ ] **API keys rotated** for production
- [ ] **Environment variables** not exposed in frontend
- [ ] **HTTPS enforced** on all endpoints
- [ ] **Content Security Policy** configured
- [ ] **Rate limiting** enabled on APIs

### Post-Deployment Security

- [ ] **Monitor contract events** for unusual activity
- [ ] **Set up alerts** for large transactions
- [ ] **Regular security updates** for dependencies
- [ ] **Backup recovery procedures** documented
- [ ] **Incident response plan** prepared

## 🚨 Rollback Procedures

### 1. Frontend Rollback

```bash
# Vercel rollback to previous deployment
vercel rollback [DEPLOYMENT_URL] --prod

# Or redeploy previous Git commit
git revert HEAD
git push origin main
```

### 2. Smart Contract Issues

```move
// If contract upgrade needed
public entry fun emergency_pause(admin: &signer) {
    // Implement pause functionality
}

// Contract migration (if required)
public entry fun migrate_to_new_contract(admin: &signer, new_address: address) {
    // Implement migration logic
}
```

### 3. Indexer Recovery

1. **Stop processor** in Aptos Build dashboard
2. **Reset to earlier version** if needed  
3. **Restart processor** once issue resolved
4. **Verify data integrity** in Hasura console

## 📈 Performance Optimization

### 1. Frontend Optimization

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['example.com'],
    formats: ['image/webp'],
  },
  
  experimental: {
    optimizeCss: true,
  },
  
  compress: true,
  
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
```

### 2. Database Optimization

```sql
-- Add database indexes for better query performance
CREATE INDEX idx_comment_when ON comment(when DESC);
CREATE INDEX idx_comment_author ON comment(author);
CREATE INDEX idx_comment_author_when ON comment(author, when DESC);
```

### 3. CDN Configuration

**Vercel Edge Network** (automatic)
**CloudFlare** (additional layer):
```javascript
// Add CloudFlare integration
const withCloudflare = require('next-cloudflare');

module.exports = withCloudflare({
  // Next.js config
});
```

---

**🎉 Congratulations!** Your Playlist Poem dApp is now live in production. Monitor the deployment and enjoy watching users discover the intersection of music and blockchain technology.