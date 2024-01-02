import { useRouter } from 'next/router';
import React from 'react'

// const Productdetail = ({ productdetail }) => {
const ProductDetail = () => {
    const router = useRouter();
    // const { pd } = router.query;
    const { product } = router.query;
    const parsedProduct = JSON.parse(product)
    // const pd = router.query;
    return (
        <div>
            {/* {productdetail.product} */}
            {/* {console.log('productdetail', pd)} */}
            {console.log('productdetail', parsedProduct)}
        </div>
    )
}

export default ProductDetail
