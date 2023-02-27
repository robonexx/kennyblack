import '@/styles/globals.scss'
import { Roboto } from 'next/font/google'
import Layout from '@/components/layout/layout'
import { useState, useEffect } from 'react'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin']
})


export default function App({ Component, pageProps }) {


/*   const { pathname } = useLocation();

  useEffect(() => {
    setActive(false); // Close the navigation panel
  }, [pathname]); */
  return (
    <Layout className={roboto.className}>
      <Component {...pageProps} />
    </Layout>
  
  )
}
