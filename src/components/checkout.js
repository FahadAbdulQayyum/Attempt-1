import React, { useContext } from 'react';
import Cntxt from '@/components/global/globalContext';

const Checkout = () => {

    const { products } = useContext(Cntxt);

    // let quantityProducts = products.map(v => v.productName === v.productName)
    let quantityProducts = products.map(v => v.imgUrl)

    let quantifyProducts = products.map((v, i) => {
        // let quantifyProducts = products.forEach((v, i) => {
        for (let a = 0; a <= quantityProducts.length; a++) {
            if (v.imgUrl === quantityProducts[a]) {
                // console.log('v.imgUrl|||', v.imgUrl, quantityProducts[a])
                return { ...v, quantity: v.quantity++ }
                // return console.log('v.imgUrl|||', v.imgUrl, quantityProducts[a])
            }
            return { ...v }
        }
    })
    // let quantifyProducts = products.forEach((v, i) => console.log('v.imgUrl === quantityProducts[i]', v.imgUrl === quantityProducts[i]))

    const unique = quantifyProducts.filter(
        (obj, index) =>
            quantifyProducts.findIndex((item) => item._id === obj._id) === index
    );

    // quantifyProducts = quantifyProducts.filter(v => v._id !== v._id)

    // console.log('quantifyProducts', quantifyProducts)
    console.log('unique', unique)

    return (
        <div>
            {unique.map(v => <>{v.productName}</>)}
        </div>
    )
}

export default Checkout
