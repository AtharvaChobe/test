import { SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <SignInButton/>
      <Link href={"/pro"}>Protected</Link>
    </div>
  )
}

export default page