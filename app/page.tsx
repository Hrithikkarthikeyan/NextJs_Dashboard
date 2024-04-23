import Link from 'next/link';
import { buttonVariants } from './components/ui/button';
import User from './components/User';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(authOptions);
  redirect('/sign-in');
  return (
    <div>
      <h1 className='text-4xl'>Home</h1>
      <Link className={buttonVariants()} href='/admin'>Open Dashboard</Link>

      <h2>Client Session</h2>
      <User />
      <h2>Server Session</h2>
      {JSON.stringify(session)}
    </div>
  );
}
