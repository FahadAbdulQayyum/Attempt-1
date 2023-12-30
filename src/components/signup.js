import Form from "@/components/form"
import axios from "axios"
import { useRouter } from "next/router"

export default function SignUp() {

    const router = useRouter()

    const onSubmit = async ({ username, email, password }) => {
        console.log('objj username, email, password', username, email, password)
        try {
            const res = await axios.post('/api/auth/signup', { username, email, password })
            console.log('response of data', res)
            if (res.data.success) {
                return router.push('/auth/login')
            }
        } catch (err) {
            console.error(err)
        }
    }

    return <Form signin={false} formSubmit={onSubmit} />
};