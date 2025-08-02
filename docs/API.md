# API Reference

## 📡 Smart Contract API

### Contract Address
**Testnet**: `0xa805a1889e99d39545da3011c2a2d5836172d0409d61b533226150a57eeaccc0`

### Entry Functions

#### `post_message`
Submit a comment to the poem message board.

**Function Signature**:
```move
public entry fun post_message(sender: &signer, new_string_content: String)
```

**Parameters**:
- `sender: &signer` - The account submitting the comment
- `new_string_content: String` - The comment content (max 500 characters)

**Frontend Usage**:
```typescript
import { postComment } from "./lib/entry-functions/postComment";

const transaction = postComment({ content: "Beautiful poem!" });
const response = await signAndSubmitTransaction(transaction);
```

**Transaction Payload**:
```typescript
{
  data: {
    function: "0xa805a1889e99d39545da3011c2a2d5836172d0409d61b533226150a57eeaccc0::message_board::post_message",
    functionArguments: ["Your comment text here"]
  }
}
```

**Events Emitted**:
```move
MessagePostedEvent {
    author: address,      // Sender's wallet address
    content: String,      // Comment content
    timestamp: u64,       // Microseconds since epoch
}
```

### View Functions

#### `get_message_content`
Get the current (latest) message on the board.

**Function Signature**:
```move
#[view]
public fun get_message_content(): String
```

**Returns**: The most recent comment as a String

**Frontend Usage**:
```typescript
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const aptos = new Aptos(new AptosConfig({ network: Network.TESTNET }));

const result = await aptos.view({
  payload: {
    function: "0xa805a1889e99d39545da3011c2a2d5836172d0409d61b533226150a57eeaccc0::message_board::get_message_content",
    functionArguments: []
  }
});

console.log(result[0]); // Current message content
```

#### `exist_message`
Check if any message exists on the board.

**Function Signature**:
```move
#[view]
public fun exist_message(): bool
```

**Returns**: `true` if at least one message has been posted, `false` otherwise

**Frontend Usage**:
```typescript
const result = await aptos.view({
  payload: {
    function: "0xa805a1889e99d39545da3011c2a2d5836172d0409d61b533226150a57eeaccc0::message_board::exist_message",
    functionArguments: []
  }
});

const hasComments = result[0]; // boolean
```

## 🗄️ GraphQL API (Indexer)

### Endpoint
```
https://api.testnet.aptoslabs.com/nocode/v1/api/cmdjpnzrx000ks60117gp1aod/v1/graphql
```

### Authentication
```http
Authorization: Bearer aptoslabs_X48xA7mBcF2_3YWqiu3tyTrvb2nCxYG9oeJgcrRGChdKK
Content-Type: application/json
```

### Schema

#### `comment` Table

```graphql
type comment {
  author: String!        # Wallet address of commenter
  content: String!       # Comment text content
  when: String!          # Timestamp in microseconds
}
```

### Queries

#### Get All Comments
```graphql
query GetAllComments {
  comment(order_by: { when: desc }) {
    author
    content
    when
  }
}
```

**Response**:
```json
{
  "data": {
    "comment": [
      {
        "author": "0x724ddb926b76592c5d3cbe44ceef9a4b585d179cd3db685f506914a8a46c727b",
        "content": "Beautiful playlist poem! Love the connection between the tracks.",
        "when": "1732595623000000"
      }
    ]
  }
}
```

#### Get Comments with Pagination
```graphql
query GetCommentsPaginated($limit: Int!, $offset: Int!) {
  comment(
    limit: $limit
    offset: $offset
    order_by: { when: desc }
  ) {
    author
    content
    when
  }
}
```

**Variables**:
```json
{
  "limit": 10,
  "offset": 0
}
```

#### Get Comments by Author
```graphql
query GetCommentsByAuthor($authorAddress: String!) {
  comment(
    where: { author: { _eq: $authorAddress } }
    order_by: { when: desc }
  ) {
    author
    content
    when
  }
}
```

**Variables**:
```json
{
  "authorAddress": "0x724ddb926b76592c5d3cbe44ceef9a4b585d179cd3db685f506914a8a46c727b"
}
```

#### Get Recent Comments (Last N)
```graphql
query GetRecentComments($limit: Int!) {
  comment(
    limit: $limit
    order_by: { when: desc }
  ) {
    author
    content
    when
  }
}
```

#### Get Comments After Timestamp
```graphql
query GetCommentsAfter($timestamp: String!) {
  comment(
    where: { when: { _gt: $timestamp } }
    order_by: { when: asc }
  ) {
    author
    content
    when
  }
}
```

### Frontend Integration

#### Apollo Client Setup
```typescript
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_INDEXER_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.NEXT_PUBLIC_INDEXER_API_KEY}`,
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
```

#### React Hook Usage
```typescript
import { useQuery, gql } from "@apollo/client";

const GET_COMMENTS = gql`
  query GetComments($limit: Int, $offset: Int) {
    comment(
      limit: $limit
      offset: $offset
      order_by: { when: desc }
    ) {
      author
      content
      when
    }
  }
`;

export const useComments = (limit = 20, offset = 0) => {
  const { data, loading, error, refetch } = useQuery(GET_COMMENTS, {
    variables: { limit, offset },
    pollInterval: 10000, // Poll every 10 seconds
  });

  return {
    comments: data?.comment || [],
    loading,
    error,
    refetch,
  };
};
```

## 🔗 External APIs

### Aptos Blockchain API

#### Get Account Balance
```http
GET https://api.testnet.aptoslabs.com/v1/accounts/{address}
Authorization: Bearer AG-4THAS9ZNBFIMAONXEVVO6C2Z7IFKBUWB7
```

#### Get Transaction Status
```http
GET https://api.testnet.aptoslabs.com/v1/transactions/by_hash/{hash}
Authorization: Bearer AG-4THAS9ZNBFIMAONXEVVO6C2Z7IFKBUWB7
```

#### Get Account Events
```http
GET https://api.testnet.aptoslabs.com/v1/accounts/{address}/events/{event_type}
Authorization: Bearer AG-4THAS9ZNBFIMAONXEVVO6C2Z7IFKBUWB7
```

**Example - Get MessagePostedEvents**:
```http
GET https://api.testnet.aptoslabs.com/v1/accounts/0xa805a1889e99d39545da3011c2a2d5836172d0409d61b533226150a57eeaccc0/events/0xa805a1889e99d39545da3011c2a2d5836172d0409d61b533226150a57eeaccc0::message_board::MessagePostedEvent
```

### Streaming Platform APIs

#### Spotify Web API
```http
GET https://api.spotify.com/v1/search?q={query}&type=track
Authorization: Bearer {access_token}
```

#### Apple Music API
```http
GET https://api.music.apple.com/v1/catalog/{storefront}/search?term={query}&types=songs
Authorization: Bearer {developer_token}
```

## 📊 Rate Limits

### Aptos APIs
- **Full Node API**: 2,000,000 Compute Units per 5 minutes
- **Indexer GraphQL**: 1000 requests per minute
- **Gas Station**: Based on sponsorship budget

### Error Codes

#### Smart Contract Errors
```move
/// Message not found
const ENOT_FOUND: u64 = 1;
/// Not authorized to perform this action  
const ENOT_AUTHORIZED: u64 = 2;
/// Invalid input parameters
const EINVALID_INPUT: u64 = 3;
```

#### GraphQL Errors
```json
{
  "errors": [
    {
      "message": "permission denied",
      "extensions": {
        "path": "$.selectionSet.comment",
        "code": "permission-error"
      }
    }
  ]
}
```

#### Wallet Errors
```typescript
// Common wallet error types
type WalletError = 
  | "WALLET_NOT_CONNECTED"
  | "TRANSACTION_REJECTED" 
  | "INSUFFICIENT_FUNDS"
  | "NETWORK_MISMATCH"
  | "TIMEOUT";
```

## 🛠️ SDK Integration

### TypeScript SDK Usage
```typescript
import { 
  Aptos, 
  AptosConfig, 
  Network,
  Account,
  Ed25519PrivateKey 
} from "@aptos-labs/ts-sdk";

// Initialize client
const aptos = new Aptos(new AptosConfig({ 
  network: Network.TESTNET,
  fullnode: "https://api.testnet.aptoslabs.com/v1",
  faucet: "https://faucet.testnet.aptoslabs.com"
}));

// Create account
const privateKey = new Ed25519PrivateKey("0x...");
const account = Account.fromPrivateKey({ privateKey });

// Submit transaction
const transaction = await aptos.transaction.build.simple({
  sender: account.accountAddress,
  data: {
    function: "0xa805a1889e99d39545da3011c2a2d5836172d0409d61b533226150a57eeaccc0::message_board::post_message",
    functionArguments: ["Hello, blockchain!"]
  }
});

const response = await aptos.signAndSubmitTransaction({
  signer: account,
  transaction
});
```

## 📝 Response Examples

### Successful Comment Submission
```json
{
  "hash": "0x8b2c4a5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b",
  "sender": "0x724ddb926b76592c5d3cbe44ceef9a4b585d179cd3db685f506914a8a46c727b",
  "sequence_number": "15",
  "max_gas_amount": "2000",
  "gas_unit_price": "100",
  "expiration_timestamp_secs": "1732595923",
  "payload": {
    "function": "0xa805a1889e99d39545da3011c2a2d5836172d0409d61b533226150a57eeaccc0::message_board::post_message",
    "arguments": ["Beautiful playlist poem!"],
    "type": "entry_function_payload"
  },
  "signature": {
    "type": "ed25519_signature",
    "public_key": "0x...",
    "signature": "0x..."
  }
}
```

### GraphQL Comment History
```json
{
  "data": {
    "comment": [
      {
        "author": "0x724ddb926b76592c5d3cbe44ceef9a4b585d179cd3db685f506914a8a46c727b",
        "content": "This playlist perfectly captures the feeling of coming home after a long journey.",
        "when": "1732595623000000"
      },
      {
        "author": "0x892f1a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e",
        "content": "The transition from 'Money' to 'Family' is incredible. Really shows growth.",
        "when": "1732595523000000"
      }
    ]
  }
}
```

---

*This API reference provides complete documentation for integrating with the Playlist Poem dApp's blockchain and indexing infrastructure.*