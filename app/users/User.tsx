import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

async function User() {
  const session = await getServerSession(authOptions);

  return (
    session?.user.id
  )
}

export default User