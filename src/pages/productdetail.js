import { useRouter } from 'next/router';
import React from 'react'

const ProductDetail = () => {
    const router = useRouter();
    const { product } = router.query;
    const parsedProduct = JSON.parse(product)
    return (
        <div>
            {console.log('productdetail', parsedProduct)}
            <img src={parsedProduct.imgUrl} />
            <p>{parsedProduct.productName}</p>
            <p>{'$' + parsedProduct.productPrice}</p>
            <p>{parsedProduct.productCategory}</p>
            <button className='bg-blue-500 text-white p-1 px-3 hover:scale-105 transition-transform'>Add to Cart</button>
        </div>
    )
}

export default ProductDetail
