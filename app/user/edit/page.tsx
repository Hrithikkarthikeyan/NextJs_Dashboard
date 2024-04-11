// 'use client';
import UserEditForm from '@/app/components/form/UserEditForm'
import UsersNavbar from '@/app/users/UsersNavbar'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

async function page() {
const session = await getServerSession(authOptions)
  return (
    <div>
      <UsersNavbar />
      <div className="bg-slate-200 p-10 rounded-md m-auto w-[400px] mt-20"><UserEditForm session={session} /></div>
    </div>
  )
}

export default page