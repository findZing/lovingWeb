import Head from 'next/head'
import Image from 'next/image'
// import  from './login'
import { useSelector } from 'react-redux'
import LoginPage from '@/components/LoginPage'
import MainPage from '@/components/MainPage'


export default function Home() {
  const {login} = useSelector(state => state.auth)
  return (
    <div>
      <Head>
        <title>Món quà bất ngờ</title>
      </Head>
      {!login ? <LoginPage /> : <MainPage />}
    </div>
  )
}
