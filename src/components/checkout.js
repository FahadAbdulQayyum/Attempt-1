import { useSelector, useDispatch } from 'react-redux';
import { removeProduct } from '@/features/counterSlice';

const Checkout = () => {

    const { products } = useSelector((state) => state.counter);
    const dispatch = useDispatch()

    return (
        <div
            className='flex flex-col justify-center items-center h-lvh'
        >
            {products.map(v => <div className='flex'>{v.productName + ' - ' + v.quantity + ' - ' + v.productPrice}<p className='ml-2 cursor-pointer border rounded-full p-1 px-[5px] bg-slate-100 hover:scale-105' onClick={() => dispatch(removeProduct(v))}>❌</p></div>)
            }
            <p className='font-bold'>Total: {products.reduce((a, b) => b.productPrice + a, 0)}</p>
            <button className='bg-blue-400 text-white p-2 rounded-sm font-bold hover:bg-blue-500'>Checkout</button>
        </div>
    )
}

export default Checkout
