import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Index = ({ category, }) => {

    const [products, setProducts] = useState([])

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

    return (
        <div>
            <div
                className='flex flex-row'
            >
                {/* {products.map(v => <div><p>{v.productCategory}</p><img src={v.imgUrl} /></div >)} */}
                {/* {products.map(v => <div className='w-64 mx-5 object-none'><img src={v.imgUrl} className='' /></div >)} */}

                {products.map((v, index) => (
                    // <div key={index} className='w-64 mx-5 object-none'>
                    <div key={index} className='w-80 mx-5 object-none'>
                        <img src={v.imgUrl} className='h-64 w-full object-cover' alt={`Product ${index + 1}`} />
                    </div>
                ))}

                {/* {products.map(v => <div className='w-64 mx-5'><img src={v.imgUrl} className='float-left w-[100px] h-[100px] bg-cover' /></div >)} */}
                {/* {products.map(v => <div><img src={v.imgUrl} /></div >)} */}
            </div>
        </div>
    )
}

export default Index
