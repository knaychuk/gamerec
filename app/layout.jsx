import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'GameRec',
  description: 'Share Game Recommondations With Others',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
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
