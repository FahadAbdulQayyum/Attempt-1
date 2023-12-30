import Form from "@/components/form";
import axios from "axios";
// import { signIn } from "next-auth/react"
import { useRouter } from 'next/router'
// import { useRouter } from 'next/navigation'

export default function Login() {

    const router = useRouter();

    // const onSubmit = async (obj) => {
    //     const { email, password } = obj
    // const onSubmit = async (email, password) => {
    const onSubmit = async ({ email, password }) => {
        // signIn('credentials', { redirect: false, email, password });
        // const data = await signIn('credentials', { redirect: false, email, password });
        // const data = await axios.post('/auth/login', { email, password })
        console.log('email,,', email, 'password,,', password)
        try {
            const res = await axios.post('/api/auth/login', { email, password })
            // const data = await axios.post('../pages/api/auth/login', { email, password })
            // const res = await data.json()
            // console.log('data', data)
            console.log('res.data', res.data)
            console.log('res.data.token', res.data.token)
            if (res.data.success) {
                return router.push('/')
            }
            localStorage.setItem('token', res.data.token)
            // res.data
        } catch (err) {
            console.error(err)
        }
        // if (data.ok) {
        //     router.push('/')
        // }
    }

    return <Form signin={true} formSubmit={onSubmit} />
};