"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const App = ({children}: {children : React.ReactNode}) => {
  return (
    <SessionProvider>
    {children}
    </SessionProvider>
  )
}

export default App
