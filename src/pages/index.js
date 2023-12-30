import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import Home from '@/components/home'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {

  const router = useRouter()

  useEffect(() => {
    // axios.get('api/auth/tokenAuth', {
    //   // axios.post('api/auth/tokenAuth', {
    //   headers: {
    //     // 'x-auth-token': JSON.stringify(localStorage.getItem('token'))
    //     'x-auth-token': localStorage.getItem('token')
    //   }
    // })
    const authVerify = async () => {
      try {
        const data = await axios.get('/api/auth/tokenAuth', {
          // axios.post('api/auth/tokenAuth', {
          headers: {
            // 'x-auth-token': JSON.stringify(localStorage.getItem('token'))
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
      <Home />
    </div>
  )
}
