import DashboardPage from '@/Components/Dashboard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';


const DeashBoardPage = async () => {
    const session= await auth.api.getSession({
        headers: await headers()
    })
    console.log('session',session);
    const user = session?.user;
    if (!user) {
    redirect('/auth/signin');
  }

  return (
    <div>
      <DashboardPage user={user} > </DashboardPage>
    </div>
  );
};


export default DeashBoardPage;