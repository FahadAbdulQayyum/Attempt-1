import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Index = ({ category, }) => {

    const [products, setProducts] = useState([])

    const router = useRouter()

    useEffect(() => {
        const fetchImg = async () => {
            const { data } = await axios.get('/api/products')
            const categorized = data.products.filter(v => v.productCategory === category)
            // console.log('productsa', data.products)
            console.log('categorizeda', categorized)
            // console.log('productsa', data.products)
            setProducts(categorized)
            // setProducts(data.products)
        }
        fetchImg()
    }, [])

    const handleClick = pd => {
        router.push({
            pathname: '/productdetail',
            // query: { pd: id },
            query: { product: JSON.stringify(pd) },
        })
    }

    return (
        <div>
            <div
                className='flex flex-row'
            >
                {products.map((v, index) => (
                    // <div key={index} className='w-80 mx-5 object-none' onClick={() => handleClick(v._id)}>
                    <div key={index} className='w-80 mx-5 object-none' onClick={() => handleClick(v)}>
                        <img src={v.imgUrl} className='h-64 w-full object-cover' alt={`Product ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Index
