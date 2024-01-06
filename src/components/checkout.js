import React, { useContext } from 'react';
import Cntxt from '@/components/global/globalContext';

const Checkout = () => {

    const { products } = useContext(Cntxt);


    
    return (
        <div>
            {products.map(v => <>{v.productName}</>)}
        </div>
    )
}

export default Checkout
