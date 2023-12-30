"use client";
import { useForm } from "react-hook-form";
import Style from "./index.module.css"

import "cors";

// import fetch from 'isomorphic-unfetch';

import crypto from "crypto";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function Upload({ resources }) {

    const router = useRouter()
    const ref = useRef()

    const productNameRef = useRef()
    const productPriceRef = useRef()
    const productCategoryRef = useRef()

    useEffect(() => {
        const verify = async () => {
            const tokenExist = localStorage.getItem('token');
            const res = await axios.get('/api/auth/middleware', {
                headers: {
                    'x-auth-token': tokenExist
                }
            })
            const admin = res.data.isAdmin
            // email = res.data.email
            // console.log('adminn', admin, email)
            console.log('adminn', admin)
            if (!admin) {
                router.replace('/')
                // router.replace('/auth/login')
            }
            // setIsAdmin(!!admin)
            // setIsEmail(email)
        }
        verify()
    }, []);

    console.log('resourcess', resources);

    resources = resources.filter(v => v.folder === 'fahad_profile')

    const imgArr = resources.map(r => {
        return (
            <div
                className={Style.imgContainer}
            >
                <div className={Style.imageContainer}>
                    <img src={r.url} />
                </div>
                <button
                    className={Style.dltBtn}
                    // onClick={() => handleDeleteImage(r.asset_id)}>Delete</button>
                    onClick={() => handleDeleteImage(r.public_id)}>Delete</button>
            </div>
        )
    })

    const {
        register,
        handleSubmit,
    } = useForm();

    const generateSHA1 = (data) => {
        const hash = crypto.createHash("sha1");
        hash.update(data);
        return hash.digest("hex");
    }

    const generateSignature = (publicId, apiSecret) => {
        const timestamp = new Date().getTime();
        return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
    };

    const handleDeleteImage = async (publicId) => {

        const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
        const timestamp = new Date().getTime();
        const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
        const apiSecret = process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET
        const signature = generateSHA1(generateSignature(publicId, apiSecret));
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

        try {
            const response = await axios.post(url, {
                public_id: publicId,
                signature: signature,
                api_key: apiKey,
                timestamp: timestamp,
            });

            console.log(response);
            if (response.data.result === 'ok') {
                console.log('Successfully Deleted', publicId)
                router.replace('/createproduct')
            }

        } catch (error) {
            console.error(error);
        }
    };

    const onSubmit = async (data) => {
        const image = data.profile[0];
        const formData = new FormData();
        formData.append("file", image);
        // formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME_1);

        const productName = productNameRef?.current?.value
        const productPrice = productPriceRef?.current?.value
        const productCategory = productCategoryRef?.current?.value

        const obj = {
            productName,
            productPrice,
            productCategory
        }

        const uploadResponse = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        const uploadedImageData = await uploadResponse.json();
        const imageUrl = uploadedImageData.secure_url;
        obj.imgUrl = imageUrl
        console.log('obj', obj)
        const resp = await axios.post('/api/createproduct', obj)
        console.log('resp', resp)
        router.replace('/createproduct')


        console.log('formDataa', formData)

    };

    return (
        <div>
            <form className="mt-60 mx-16" onSubmit={handleSubmit(onSubmit)}>
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="product_label"
                >
                    Product's Name
                </label>
                <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-1 px-2"
                    type="text"
                    id="product_label"
                    ref={productNameRef}
                />
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="product_price"
                >
                    Product's Price
                </label>
                <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 py-1 px-2"
                    type="number"
                    id="product_price"
                    ref={productPriceRef}
                />
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="product_price"
                >
                    Product's Category
                </label>
                <select
                    ref={productCategoryRef}
                >
                    <option value={'fruit'}>Fruit</option>
                    <option value={'vegetable'}>Vegetable</option>
                    <option value={'sweet'}>Sweet</option>
                </select>
                <label
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    htmlFor="file_input"
                >
                    Upload file
                </label>
                <input
                    {...register("profile")}
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                />
                <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                >
                    SVG, PNG, JPG or GIF (MAX. 800x400px).
                </p>

                <button
                    type="submit"
                    className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 my-4"
                >
                    Upload to Cloud
                </button>
            </form>
            <div
                className={Style.imageGrid}
            >
                {imgArr}
            </div>
        </div>
    );
}


export async function getStaticProps() {

    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`, {
        headers: {
            Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET).toString('base64')}`
        }
    }).then(r => r.json());
    // console.log('resultss', results)

    return {
        props: {
            ...results
        }
    }
}











// import axios from 'axios';
// import React, { useEffect } from 'react'
// import { useRouter } from 'next/router'

// const Index = () => {

//     const router = useRouter()

//     useEffect(() => {
//         const verify = async () => {
//             const tokenExist = localStorage.getItem('token');
//             const res = await axios.get('/api/auth/middleware', {
//                 headers: {
//                     'x-auth-token': tokenExist
//                 }
//             })
//             const admin = res.data.isAdmin
//             // email = res.data.email
//             // console.log('adminn', admin, email)
//             console.log('adminn', admin)
//             if (!admin) {
//                 router.replace('/')
//                 // router.replace('/auth/login')
//             }
//             // setIsAdmin(!!admin)
//             // setIsEmail(email)
//         }
//         verify()
//     }, []);

//     return (
//         <div>
//             CreateProduct
//         </div>
//     )
// }

// export default Index
