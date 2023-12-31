import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Index = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchImg = async () => {
            const { data } = await axios.get('/api/products')
            const categorized = data.products.filter(v => v.productCategory === 'vegetable'
            )
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
            <div>
                {/* {products.map(v => <div><p>{v.productName}</p><img src={v.imgUrl} /></div >)} */}
                {products.map(v => <div><p>{v.productCategory}</p><img src={v.imgUrl} /></div >)}
            </div>
        </div>
    )
}

export default Index
