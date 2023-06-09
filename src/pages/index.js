import Head from 'next/head'
import Nav from '@/components/Nav'
import styles from '@/styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <title>🚀Robbie's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <h1 className="text-xl bg-almost-black">Welcome to the home page</h1>
    </>
  )
}
