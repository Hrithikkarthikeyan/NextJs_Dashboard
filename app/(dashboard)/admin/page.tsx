import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react'
import CardElement from '../CardElement';

const page = async () => {
  const session = await getServerSession(authOptions);
  
  if(session?.user){
    return (
      <div className="ml-10 mt-20">
        <h2 className='text-2xl'>Next Dashboard - welcome back {session?.user.username}</h2>
        <CardElement />
      </div>
    )
  }

  return <h2 className='text-2xl'>Please login to see the dashbaord</h2>;
}

export default page;