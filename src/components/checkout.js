import React, { useContext } from 'react';
import Cntxt from '@/components/global/globalContext';

const Checkout = () => {

    const { products } = useContext(Cntxt);

    // let quantityProducts = products.map(v => v.imgUrl)
    let quantityProducts = products.map(v => v._id)

    let quantifyProducts = products.map((v, i) => {
        for (let a = 0; a <= quantityProducts.length; a++) {
            // if (v.imgUrl === quantityProducts[a]) {
            if (v._id === quantityProducts[a]) {
                console.log('v._id === quantityProducts[a]', v._id, quantityProducts[a])
                return { ...v, quantity: v.quantity += 1 }
                // return { ...v, quantity: v.quantity++ }
            }
            return { ...v }
        }
    })

    const unique = quantifyProducts.filter(
        (obj, index) =>
            quantifyProducts.findIndex((item) => item._id === obj._id) === index
    );

    return (
        <div>
            {/* {unique.map(v => <>{v.productName}</>)} */}
            {unique.map(v => <div>{v.productName + ' - ' + v.quantity}</div>)}
        </div>
    )
}

export default Checkout
