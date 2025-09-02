"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Page = () => {


  const {data : session} = useSession()
if(session) {
  return (
    <>
    Signed in as {session.user?.email}
    <button onClick={() => signOut()}>SignOut</button>
    </>
  )
}
  return (
    <div>
      No signed In 
      <button onClick={() => signIn("google")}>SignIn</button>
    </div>
  )
}

export default Page
