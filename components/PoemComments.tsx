"use client";

import { useQuery, gql } from "@apollo/client";
import { useState } from "react";

// GraphQL query for poem history
const GET_POEM_HISTORY = gql`
  query GetPoemHistory($limit: Int, $offset: Int) {
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

interface PoemComment {
  author: string;
  content: string;
  when: string;
}

interface QueryResponse {
  comment: PoemComment[];
}

export default function PoemHistory() {
  const [limit] = useState(20);
  const [offset] = useState(0);

  const { data, loading, error, refetch } = useQuery<QueryResponse>(
    GET_POEM_HISTORY,
    {
      variables: { limit, offset },
      pollInterval: 10000, // Poll every 10 seconds for new poems
      errorPolicy: "all",
    }
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-pulse text-gray-500">Loading poem history...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Error loading poems: {error.message}</p>
        <button 
          onClick={() => refetch()}
          className="mt-2 px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200"
        >
          Retry
        </button>
      </div>
    );
  }

  const poems = data?.comment || [];

  if (poems.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        <p>No poems have been shared yet.</p>
        <p className="text-sm mt-2">Be the first to post a playlist poem!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Community Poems</h2>
      
      <div className="space-y-4">
        {poems.map((poem, index) => (
          <div 
            key={`${poem.author}-${poem.when}-${index}`}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Author & Timestamp */}
            <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">
                  {poem.author.slice(0, 6)}...{poem.author.slice(-4)}
                </span>
              </div>
              <time>
                {new Date(parseInt(poem.when) / 1000).toLocaleString()}
              </time>
            </div>

            {/* Poem Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                <div className="whitespace-pre-wrap text-gray-800 leading-relaxed">
                  {poem.content}
                </div>
              </div>
            </div>

            {/* View on Explorer Link */}
            <div className="mt-4 text-right">
              <a
                href={`https://explorer.aptoslabs.com/account/${poem.author}?network=testnet`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm hover:underline"
              >
                View Author on Explorer →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}