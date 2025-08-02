"use client"

import { ReactNode } from 'react'

interface PropsWithChildren {
  children: ReactNode
}

export const WalletProvider = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {children}
    </div>
  )
} 