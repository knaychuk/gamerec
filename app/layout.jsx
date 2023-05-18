import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Head from 'next/head';

export const metadata = {
  title: 'GameRec',
  description: 'Share Game Recommondations With Others',
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">

<link rel="icon" href="/icon.png" />

    
      <body className='font-inter font-bold text-primary-t'>
        <Provider>
        <div className='main'>
          <div/>
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
