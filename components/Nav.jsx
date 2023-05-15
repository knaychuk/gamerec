"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

import { GiRetroController } from'react-icons/gi';


const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
     
      setProviders(response);
    }
    setUpProviders();
  }, [])

  return (
    <nav className='flex items-center justify-between p-3 font-light'>
      <Link href="/" onClick={() => setToggleDropdown(false)}>
        <GiRetroController color='#008977' fontSize='3em'/>
      </Link>

      <div>
        {session?.user &&
          <div className='flex items-center'>
         
            {toggleDropdown && 
              <div>
                <button 
                  onClick={() => {
                    signOut();
                    setToggleDropdown(false);
                  }} 
                  className='mr-2 hover:underline'
                >Sign Out</button>
                <Link 
                  href="/my-profile" 
                  className='button-primary mr-2'
                  onClick={() => {
                    setToggleDropdown(false);
                  }}
                >Profile</Link>
               </div>
            }

            <Image
              src={session.user.image}
              width={35}
              height={35}
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
              className='profile-image'
            />
          </div> 
          
        }
        {!session?.user &&
          <div>
            {providers && 
              Object.values(providers).map((provider) => (
                <button 
                  type="button" 
                  key={provider.name} 
                  onClick={() => signIn(provider.id)} 
                  className='button-primary'
                >Sign In</button>
              )
            )}
           
          </div>
          
        }
       
      </div>
    </nav>
  )
}
export default Nav