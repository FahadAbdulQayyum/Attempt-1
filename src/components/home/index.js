import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Navbar from "../navbar"

const Index = () => {
    // const Index = ({ products }) => {
    // export default const Index = (products) => {
    // export default function Index({ products }) {
    // export default function Index() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchImg = async () => {
            const { data } = await axios.get('/api/products')
            console.log('productsa', data.products)
            setProducts(data.products)
        }
        fetchImg()
    }, [])

    return (
        <div
            className='bg-gray-400 w-full h-64 flex space-x-2'
        >
            {products?.map(v =>
                <div
                    className='bg-slate-100'
                >
                    <img src={v.imgUrl}
                        className='bg-slate-100 w-56 h-40'
                    />
                    <p>{v.productName}</p>
                    <p>{'Rs' + v.productPrice + '/='}</p>
                </div>
            )}
        </div>
    )
}

export default Index;

// export async function getStaticProps() {
//     // const dataa = await axios.get('/api/products')
//     // const dataa = await axios.get('http://localhost:3000/api/products')
//     const dataa = await axios.get('http://localhost:3000/api/products')
//     console.log('dataa', dataa)
//     const { products } = dataa
//     return {
//         props: {
//             products
//         }
//     }
// }












// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// // import Navbar from "../navbar"

// const Index = () => {
//     // const Index = ({ products }) => {
//     // export default const Index = (products) => {
//     // export default function Index({ products }) {
//     // export default function Index() {

//     const [products, setProducts] = useState([])

//     useEffect(() => {
//         const fetchImg = async () => {
//             const { data } = await axios.get('/api/products')
//             console.log('productsa', data.products)
//             setProducts(data.products)
//         }
//         fetchImg()
//     }, [])

//     return (
//         <div>
//             <p>{products?.map(v =>
//                 <div
//                     className='bg-slate-300 w-64 flex flex-col'
//                 >
//                     <img src={v.imgUrl} />
//                     <p>{v.productName}</p>
//                     <p>{'Rs' + v.productPrice + '/='}</p>
//                 </div>
//             )}</p>
//         </div >
//     )
// }

// export default Index;

// // export async function getStaticProps() {
// //     // const dataa = await axios.get('/api/products')
// //     // const dataa = await axios.get('http://localhost:3000/api/products')
// //     const dataa = await axios.get('http://localhost:3000/api/products')
// //     console.log('dataa', dataa)
// //     const { products } = dataa
// //     return {
// //         props: {
// //             products
// //         }
// //     }
// // }