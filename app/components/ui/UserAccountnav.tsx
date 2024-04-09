'use client';

import React from 'react'
import { Button } from './button'
import { signOut } from 'next-auth/react'

const UserAccountnav = () => {
  return (
    <Button onClick={() => signOut({
      redirect: true,
      callbackUrl: `${window.location.origin}/sign-in`
    })} variant="destructive">
      Sign out
    </Button>
  )
}

export default UserAccountnav