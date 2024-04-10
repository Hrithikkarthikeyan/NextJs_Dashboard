import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react'
import CardElement from '../CardElement';
import PageNavbar from '../PageNavbar';
import Navbar from '@/app/components/Navbar';
import RightSidebar from '@/app/components/RightSidebar';

const page = async () => {
  const session = await getServerSession(authOptions);
  
  if(session?.user){
    return (
      
      <div className="flex flex-row">
        <div className="basis-3/4">
          <Navbar />
          <div className="ml-10 mt-10">
            {/* <h2 className='text-2xl'>Next Dashboard - welcome back {session?.user.username}</h2> */}
            <PageNavbar />
            <CardElement />
          </div>
        </div>
        <div id="right-side-bar" className="hide basis-1/4 bg-teal-900 text-white">
          <RightSidebar />
        </div>
      </div>
    )
  }

  return <h2 className='text-2xl'>Please login to see the dashbaord</h2>;
}

export default page;