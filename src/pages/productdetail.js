import { useRouter } from 'next/router';
import React from 'react'

// const Productdetail = ({ productdetail }) => {
const ProductDetail = () => {
    const router = useRouter();
    // const { pd } = router.query;
    const pd = router.query;
    return (
        <div>
            {/* {productdetail.product} */}
            {console.log('productdetail', pd)}
        </div>
    )
}

export default ProductDetail
