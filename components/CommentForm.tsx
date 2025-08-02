"use client";

import { useState } from "react";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { postComment } from "../lib/entry-functions/postComment";

interface CommentFormProps {
  onCommentSubmitted?: () => void;
}

export default function CommentForm({ onCommentSubmitted }: CommentFormProps) {
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { account, signAndSubmitTransaction, connected } = useWallet();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!connected || !account) {
      alert("Please connect your wallet first");
      return;
    }

    if (!comment.trim()) {
      alert("Please enter a comment");
      return;
    }

    setIsSubmitting(true);

    try {
      const transaction = postComment({ content: comment.trim() });
      const response = await signAndSubmitTransaction(transaction);
      
      // Reset form
      setComment("");
      
      // Notify parent component
      if (onCommentSubmitted) {
        onCommentSubmitted();
      }
      
      console.log("Comment submitted:", response);
      
    } catch (error) {
      console.error("Failed to submit comment:", error);
      alert("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!connected) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
        <p className="text-gray-600 mb-4">Connect your wallet to comment on this poem</p>
        {/* Wallet connection button would go here */}
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Share your thoughts
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="What do you think about this playlist poem? Share your interpretation, favorite lyric connections, or how it makes you feel..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            maxLength={500}
            disabled={isSubmitting}
          />
          <div className="mt-1 text-right text-sm text-gray-500">
            {comment.length}/500
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Posting as: {account?.address.toString().slice(0, 6)}...{account?.address.toString().slice(-4)}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || !comment.trim()}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Posting...
              </>
            ) : (
              "Post Comment"
            )}
          </button>
        </div>
      </form>
      
      <div className="mt-4 text-xs text-gray-500">
        💡 Your comment will be stored permanently on the Aptos blockchain and may take a few seconds to appear.
      </div>
    </div>
  );
}