import React from 'react'
import RightNavbar from './RightNavbar'
import CollapsibleCard from './CollapsibleCard'
import UserStats from './UserStats'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

async function RightSidebar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-screen">
      <RightNavbar session={session}/>
      <div className="text-black p-4">
        <UserStats />
        <h2 className="text-white mt-10">Case Overview</h2>
        <div className="mt-5">
          <CollapsibleCard />
        </div>
      </div>
    </div>
  )
}

export default RightSidebar