import React, { useContext } from 'react';
// import Cntxt from '@/components/global/globalContext';

import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '@/features/counterSlice';

const Checkout = () => {

    // const counter = useSelector((state) => state.counter);
    const { products } = useSelector((state) => state.counter);
    const dispatch = useDispatch()

    // const { products } = useContext(Cntxt);

    // let quantityProducts = products.map(v => v.imgUrl)
    // let quantityProducts = products.map(v => v._id)

    // let quantifyProducts = products.map((v, i) => {
    //     for (let a = 0; a <= quantityProducts.length; a++) {
    //         // if (v.imgUrl === quantityProducts[a]) {
    //         if (v._id === quantityProducts[a]) {
    //             console.log('v._id === quantityProducts[a]', v._id, quantityProducts[a])
    //             return { ...v, quantity: v.quantity += 1 }
    //             // return { ...v, quantity: v.quantity++ }
    //         }
    //         return { ...v }
    //     }
    // })

    // const unique = quantifyProducts.filter(
    //     (obj, index) =>
    //         quantifyProducts.findIndex((item) => item._id === obj._id) === index
    // );

    return (
        <div>
            {/* {unique.map(v => <>{v.productName}</>)} */}
            {products.map(v => <div className='flex'>{v.productName + ' - ' + v.quantity + ' - ' + v.productPrice}<p className='ml-2' onClick={() => dispatch(removeProduct(v))}>❌</p></div>)
            }
            <p className='font-bold'>Total: {products.reduce((a, b) => b.productPrice + a, 0)}</p>
        </div >
    )
}

export default Checkout
