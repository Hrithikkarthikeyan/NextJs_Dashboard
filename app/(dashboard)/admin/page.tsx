import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react'
import CardElement from '../CardElement';
import PageNavbar from '../PageNavbar';
import Navbar from '@/app/components/Navbar';
import RightSidebar from '@/app/components/RightSidebar';
import { redirect } from 'next/navigation'


const page = async () => {
  const session = await getServerSession(authOptions);
  
  if(session?.user){
    return (
      
      <div className="flex flex-row">
        <div id="main-dashboard" className="basis-3/4 max-[900px]:basis-full" >
          <Navbar />
          <div className="ml-10 mt-10">
            {/* <h2 className='text-2xl'>Next Dashboard - welcome back {session?.user.username}</h2> */}
            <PageNavbar />
            <CardElement />
          </div>
        </div>
        <div id="right-side-bar" className="max-[900px]:hidden basis-1/4 max-[900px]:basis-full bg-teal-900 text-white">
          <RightSidebar />
        </div>
      </div>
    )
  }

    redirect('/sign-in');
  
}

export default page;