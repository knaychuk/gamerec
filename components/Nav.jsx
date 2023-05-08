"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';


const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setUpProviders();
  }, [])

  return (
    <nav>
      <Link href="/">
        
      </Link>

      <div>
        {session?.user &&
          <div>
            <Link href="/create-prompt" className='p-2 bg-primary'>Create Post</Link>
            <button onClick={() => {signOut();}}>Sign Out</button>
            <Link href="/profile">Profile</Link>
          </div> 
          
        }
        {!session?.user &&
          <div>
            {providers && 
              Object.values(providers).map((provider) => (
                <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className='bg-cyan-400'>
                  Sign In
                </button>
              )
            )}
           
          </div>
          
        }
      </div>
    </nav>
  )
}
export default Nav