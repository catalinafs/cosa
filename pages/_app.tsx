import { useState } from 'react'
import Navbar from '@/components/Navbar'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const [data, setData] = useState([])

  function infoHijo(data: any) {
    setData(data)
  }

  return (
    <>
      <Navbar infoHijo={infoHijo} />
      <Component {...pageProps} setData={setData} data={data} />
    </>
  )
}
