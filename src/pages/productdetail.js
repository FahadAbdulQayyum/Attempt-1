import { useRouter } from 'next/router';
import React, { useContext } from 'react'
// import Cntx from '../components/global/globalContext'

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';

const ProductDetail = () => {
    const router = useRouter();
    // const { products, addProduct } = useContext(Cntx)

    const { product } = router.query;

    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);


    // Check if product is defined before parsing
    const parsedProduct = product ? JSON.parse(product) : null;

    return (
        <div>
            <button className='bg-slate-900 text-white px-5 py-2' onClick={() => router.replace('/')}>Back</button>
            {console.log('productdetail', parsedProduct)}
            {parsedProduct && (
                <>
                    <img src={parsedProduct.imgUrl} alt={parsedProduct.productName} />
                    <p>{parsedProduct.productName}</p>
                    <p>{'$' + parsedProduct.productPrice}</p>
                    <p>{parsedProduct.productCategory}</p>
                    {/* <button onClick={() => addProduct(parsedProduct)} className='bg-blue-500 text-white p-1 px-3 hover:scale-105 transition-transform'>Add to Cart</button> */}
                    <button onClick={() => dispatch(increment(parsedProduct))} className='bg-blue-500 text-white p-1 px-3 hover:scale-105 transition-transform'>Add to Cart</button>
                    {console.log('counter|', counter)}
                </>
            )}
            {/* <p>{console.log('|products|', products)}</p> */}
        </div>
    )
}

export default ProductDetail















// import { useRouter } from 'next/router';
// import React, { useContext } from 'react'
// import Cntx from '../components/global/globalContext'

// const ProductDetail = () => {
//     const router = useRouter();

//     const { products, addProduct } = useContext(Cntx)

//     const { product } = router.query;
//     const parsedProduct = JSON.parse(product)
//     return (
//         <div>
//             <button className='bg-slate-900 text-white px-5 py-2' onClick={() => router.replace('/')}>Back</button>
//             {console.log('productdetail', parsedProduct)}
//             <img src={parsedProduct.imgUrl} />
//             <p>{parsedProduct.productName}</p>
//             <p>{'$' + parsedProduct.productPrice}</p>
//             <p>{parsedProduct.productCategory}</p>
//             <button onClick={() => addProduct(parsedProduct)} className='bg-blue-500 text-white p-1 px-3 hover:scale-105 transition-transform'>Add to Cart</button>
//             <p>{console.log('|products|', products)}</p>
//         </div>
//     )
// }

// export default ProductDetail
