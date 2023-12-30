import Form from "@/components/form"

export default function SignUp() {

    const onSubmit = (obj) => {
        console.log('objj', obj)
    }

    return <Form signin={false} formSubmit={onSubmit} />
};