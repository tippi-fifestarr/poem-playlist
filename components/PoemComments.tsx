"use client"

import { useState, useEffect } from 'react'

interface Comment {
  id: string
  author: string
  content: string
  timestamp: string
}

export default function PoemComments() {
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Placeholder for future comment loading
    // This can be replaced with actual API calls when needed
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Comments</h3>
        <p className="text-gray-600 dark:text-gray-400">Loading comments...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-8 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
        <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-4">Comments</h3>
        <p className="text-red-600 dark:text-red-400">Error loading comments: {error}</p>
      </div>
    )
  }

  return (
    <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Comments</h3>
      {comments.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No comments yet. Be the first to share your thoughts!</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900 dark:text-gray-100">{comment.author}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{comment.timestamp}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{comment.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 