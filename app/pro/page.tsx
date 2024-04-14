"use client"
import { Protect } from '@clerk/clerk-react';
import { currentUser, SignedIn, useClerk,UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
  const router = useRouter()
  const { signOut } = useClerk();

  const signout = () => {
    signOut(() => {
      router.push("/")
    })
  }

  // const user = await currentUser();
  return (
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl='/'/>
      </SignedIn>
      
      <button onClick={signout}>
        Sign out
      </button>
    </div>
  )
}

export default page