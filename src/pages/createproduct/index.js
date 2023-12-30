import axios from 'axios';
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Index = () => {

    const router = useRouter()

    useEffect(() => {
        const verify = async () => {
            const tokenExist = localStorage.getItem('token');
            const res = await axios.get('/api/auth/middleware', {
                headers: {
                    'x-auth-token': tokenExist
                }
            })
            const admin = res.data.isAdmin
            // email = res.data.email
            // console.log('adminn', admin, email)
            console.log('adminn', admin)
            if (!admin) {
                router.replace('/')
                // router.replace('/auth/login')
            }
            // setIsAdmin(!!admin)
            // setIsEmail(email)
        }
        verify()
    }, []);

    return (
        <div>
            CreateProduct
        </div>
    )
}

export default Index
