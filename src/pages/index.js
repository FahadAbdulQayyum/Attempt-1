import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import Home from '@/components/home'

import Carousel from "../components/carousel"

import Categorized from "../components/categorized"

const inter = Inter({ subsets: ['latin'] })

export default function Index() {

  const router = useRouter()

  useEffect(() => {
    const authVerify = async () => {
      try {
        console.log("localStorage.getItem('token')", localStorage.getItem('token'))
        // const data = await axios.get('/api/auth/tokenAuth', {
        const data = await axios.get('/api/auth/middleware', {
          headers: {
            'x-auth-token': localStorage.getItem('token')
          }
        })
        console.log('data', data);
        if (!data.data.success) {
          console.log('data.success', data.data.success)
          return router.replace('/auth/login')
        }
      } catch (err) {
        console.log('error', err);
        router.replace('/auth/login')
      }
    }
    authVerify()
  }, [])

  return (
    <div>
      <div
        className='flex justify-center py-5'
      >
        <div
          className='w-[70%]'
        >
          <Carousel />
        </div>
      </div>
      <div
        className='flex flex-col'
      >
        <Home />
      </div>
      <div
        className='flex flex-col'
      >
        <>
          <h1>Vegetable:</h1>
          <Categorized category={'vegetable'} />
        </>
        <>
          <h1>Fruit:</h1>
          <Categorized category={'fruit'} />
        </>
        <></>
        <h1>Sweet:</h1>
        <Categorized category={'sweet'} />
      </div>
    </div >
  )
}
