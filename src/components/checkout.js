import React, { useContext } from 'react';
import Cntxt from '@/components/global/globalContext';

const Checkout = () => {

    const { products } = useContext(Cntxt);

    // let quantityProducts = products.map(v => v.productName === v.productName)
    let quantityProducts = products.map(v => v.imgUrl)

    let quantifyProducts = products.forEach((v, i) => {
        for (let a = 0; a <= quantityProducts.length; a++) {
            if (v.imgUrl === quantityProducts[a]) {
                // console.log('v.imgUrl|||', v.imgUrl, quantityProducts[a])
                return { ...v, quantity: v.quantity ? v.quantity += 1 : 1 }
                // return console.log('v.imgUrl|||', v.imgUrl, quantityProducts[a])
            }
            return { ...v, quantity: 1 }
        }
    })
    // let quantifyProducts = products.forEach((v, i) => console.log('v.imgUrl === quantityProducts[i]', v.imgUrl === quantityProducts[i]))
    console.log('quantifyProducts', quantifyProducts)

    return (
        <div>
            {products.map(v => <>{v.productName}</>)}
        </div>
    )
}

export default Checkout
