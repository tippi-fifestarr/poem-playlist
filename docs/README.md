# Playlist Poem - On-Chain Comments dApp

A Next.js application showcasing playlist-generated poems with blockchain-powered commenting system built on Aptos.

## 🎵 What is This?

This project demonstrates how music playlists can be transformed into poetry, where users can:
- Read curated **playlist poems** (track titles become poem lines)
- **Comment on-chain** using Aptos smart contracts
- View **comment history** via real-time blockchain indexing
- Experience **gasless transactions** (future feature)

## 🏗 Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Next.js App   │    │  Aptos Contract  │    │ No-Code Indexer │
│                 │◄──►│                  │◄──►│                 │
│ • Playlist Poem │    │ • Message Board  │    │ • Event History │
│ • Comment Form  │    │ • Event Emitter  │    │ • GraphQL API   │
│ • Wallet UI     │    │ • Access Control │    │ • Real-time     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Blockchain**: Aptos Move smart contracts
- **Wallet**: Aptos Wallet Adapter
- **Indexing**: Aptos No-Code Indexer + GraphQL
- **Data**: Apollo Client for GraphQL queries

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Git
- Aptos wallet (Petra recommended)
- Testnet APT tokens

### Installation

```bash
# Clone and install
git clone [your-repo-url]
cd poem
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your values

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see your playlist poem!

## 📋 Environment Setup

Create `.env.local`:

```bash
# Contract & Network
NEXT_PUBLIC_CONTRACT_ADDRESS=0xa805a1889e99d39545da3011c2a2d5836172d0409d61b533226150a57eeaccc0
NEXT_PUBLIC_NETWORK=testnet

# No-Code Indexer (for comment history)
NEXT_PUBLIC_INDEXER_ENDPOINT=https://api.testnet.aptoslabs.com/nocode/v1/api/cmdjpnzrx000ks60117gp1aod/v1/graphql
NEXT_PUBLIC_INDEXER_API_KEY=aptoslabs_X48xA7mBcF2_3YWqiu3tyTrvb2nCxYG9oeJgcrRGChdKK

# Optional: Full Node API Key
NEXT_PUBLIC_APTOS_API_KEY=AG-4THAS9ZNBFIMAONXEVVO6C2Z7IFKBUWB7
```

## 🔧 Development

### Project Structure

```
poem/
├── app/                    # Next.js app router
├── components/            
│   ├── PlaylistPoem.tsx   # Main poem display
│   ├── CommentForm.tsx    # On-chain comment submission
│   └── PoemComments.tsx   # Comment history display
├── lib/
│   ├── entry-functions/   # Contract interaction functions
│   │   └── postComment.ts
│   └── graphql.ts         # Apollo Client setup
├── apt/playlist-poems/    # Smart contract directory
│   ├── contract/
│   │   ├── sources/
│   │   │   └── message_board.move
│   │   └── Move.toml
│   └── .env               # Contract deployment config
└── docs/                  # Documentation
```

### Smart Contract

**Location**: `apt/playlist-poems/contract/sources/message_board.move`

**Key Functions**:
- `post_message(sender: &signer, content: String)` - Submit comment
- `get_message_content(): String` - Get latest comment
- `exist_message(): bool` - Check if any comments exist

**Events**:
- `MessagePostedEvent` - Emitted on every comment (author, content, timestamp)

### Frontend Components

**PlaylistPoem.tsx**
- Displays the curated "Family" playlist poem
- Shows track table with streaming links
- Contains comment section

**CommentForm.tsx**
- Wallet connection interface
- Comment submission form
- Transaction handling and error states

**PoemComments.tsx**
- Displays comment history from indexer
- Real-time polling for new comments
- User-friendly formatting

## 🔗 Blockchain Integration

### Smart Contract Deployment

```bash
# Navigate to contract directory
cd apt/playlist-poems

# Compile and test
aptos move test --dev

# Deploy to testnet
aptos move deploy-object --address-name message_board_addr --assume-yes
```

### Indexer Setup

1. **Create Processor**: 
   - Go to [Aptos Build](https://build.aptoslabs.com)
   - Create "Processor" type project
   - Configure for your contract address

2. **Schema Configuration**:
   ```yaml
   Table: comment
   Columns:
   - author (address) → event.author
   - content (string) → event.content  
   - when (u64) → event.timestamp
   ```

3. **Hasura Permissions**:
   - Track `comment` table
   - Enable `select` for `anonymous` role

## 🎯 Usage

### For Users

1. **Read the Poem**: Enjoy the "Family" playlist poem
2. **Connect Wallet**: Use Petra or compatible Aptos wallet
3. **Post Comment**: Share thoughts about the playlist poem
4. **View History**: See all previous comments from the community

### For Developers

**Submit Comment**:
```typescript
import { postComment } from "./lib/entry-functions/postComment";

const transaction = postComment({ content: "Beautiful poem!" });
const response = await signAndSubmitTransaction(transaction);
```

**Query Comments**:
```graphql
query GetComments {
  comment(order_by: { when: desc }) {
    author
    content
    when
  }
}
```

## 🎨 Customization

### Adding New Poems

1. **Create new playlist data** in `components/PlaylistPoem.tsx`
2. **Generate poem from track names**
3. **Deploy separate contract** or extend existing one
4. **Update indexer configuration** for new events

### Styling

- **Design System**: Tailwind CSS with custom gradients
- **Typography**: `@tailwindcss/typography` for poem content  
- **Icons**: Custom SVG icons for streaming platforms
- **Responsive**: Mobile-first design approach

## 🔍 Testing

```bash
# Run contract tests
cd apt/playlist-poems
aptos move test --dev

# Test GraphQL connection
curl -X POST [INDEXER_ENDPOINT] \
  -H "Authorization: Bearer [API_KEY]" \
  -d '{"query": "{ comment { author content when } }"}'

# Frontend development
npm run dev
```

## 🚀 Deployment

### Frontend (Vercel)

```bash
npm run build
# Deploy to Vercel, Netlify, or your preferred platform
```

### Smart Contract (Mainnet)

```bash
# Switch to mainnet
aptos init --network mainnet

# Fund account with real APT
# Deploy contract
aptos move deploy-object --address-name message_board_addr --assume-yes

# Update environment variables for mainnet
```

## 🛠 Troubleshooting

### Common Issues

**"Failed to connect wallet"**
- Ensure Petra wallet is installed and on Testnet
- Check wallet permissions for the site

**"No comments showing"**
- Verify indexer is running in Aptos Build dashboard
- Check Hasura permissions are set correctly
- Confirm GraphQL endpoint is accessible

**"Transaction failed"**
- Ensure wallet has sufficient APT for gas
- Verify contract address is correct
- Check network selection (testnet vs mainnet)

### Debug GraphQL

```bash
# Test indexer directly
curl -X POST https://api.testnet.aptoslabs.com/nocode/v1/api/cmdjpnzrx000ks60117gp1aod/v1/graphql \
  -H "Authorization: Bearer aptoslabs_X48xA7mBcF2_3YWqiu3tyTrvb2nCxYG9oeJgcrRGChdKK" \
  -H "Content-Type: application/json" \
  -d '{"query": "query { comment { author content when } }"}'
```

## 🎯 Future Features

- **Multiple Poems**: Support for poem collections
- **NFT Integration**: Collectible playlist poems
- **Gas Station**: Sponsored transactions for users
- **Social Features**: Like/react to comments
- **Playlist Generation**: AI-powered playlist → poem creation
- **Creator Economy**: Tip poem creators

## 📚 Learn More

- [Aptos Developer Docs](https://aptos.dev)
- [Move Language Guide](https://move-language.github.io/move/)
- [No-Code Indexer Guide](https://aptos.dev/indexer/txn-stream/)
- [Wallet Adapter Docs](https://github.com/aptos-labs/aptos-wallet-adapter)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with 🎵 and ⛓️ by [Your Name]**