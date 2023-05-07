"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const isUserLoggedIn = true;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }

    setProviders();
  }, [])

  return (
    <nav>
      <Link href="/">
        
      </Link>

      {/* mobile nav */}
      <div>
        {isUserLoggedIn &&
          <div>
            <Link href="/create-prompt" className='p-2 bg-primary'>Create Post</Link>
            <button >Sign Out</button>
            <Link href="/profile">Profile</Link>
          </div> 
          
        }
        {!isUserLoggedIn &&
          <div>
            {providers && 
              Object.values(providers).map((provider) => (
                <button type="button" key={provider.name} onClick={() => signIn(provider.id)}>

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