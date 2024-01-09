import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState, useContext } from 'react';
// import Cntxt from '../global/globalContext';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/react-fontawesome'
// import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { Accordion, AccordionItem } from "@nextui-org/react";

import { useDispatch, useSelector } from 'react-redux';
import { onLoad } from '@/features/counterSlice';

const Index = () => {

    const [showMenu, setShowMenu] = useState(false)

    const router = useRouter();

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.counter);
    // const { products } = useContext(Cntxt)

    const [authenticated, setAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isEmail, setIsEmail] = useState('');

    let admin
    let email

    useEffect(() => {
        const tokenExist = localStorage.getItem('token');
        setAuthenticated(!!tokenExist);

        const verify = async () => {
            const res = await axios.get('/api/auth/middleware', {
                headers: {
                    'x-auth-token': tokenExist
                }
            })
            admin = res.data.isAdmin
            email = res.data.email
            console.log('adminn', admin, email)
            setIsAdmin(!!admin)
            setIsEmail(email)
        }
        verify()
        dispatch(onLoad())
    }, []);

    useEffect(() => {
        const handleRouteChange = () => {
            const tokenExist = localStorage.getItem('token');
            setAuthenticated(!!tokenExist);


            const verify = async () => {
                const res = await axios.get('/api/auth/middleware', {
                    headers: {
                        'x-auth-token': tokenExist
                    }
                })
                admin = res.data.isAdmin
                email = res.data.email
                console.log('adminn', admin)
                setIsAdmin(!!admin)
                setIsEmail(email)
            }
            verify()
        };

        // Subscribe to the router change event
        router.events.on('routeChangeComplete', handleRouteChange);

        // Unsubscribe when the component is unmounted
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    const logout = () => {
        localStorage.removeItem('token');
        setAuthenticated(false);
        router.replace('/auth/login');
    };

    return (
        <div className='bg-orange-400 text-white shadow-lg fixed w-full z-50'>
            <div className='mx-10 py-5'>
                <div className='flex justify-center items-center md:justify-between flex-col md:flex-row'>
                    <div>Logo</div>
                    {/* {showMenu && <div className='hidden md:flex'> */}
                    {/* {showMenu && <div */}
                    <div
                        className='flex justify-center'
                    >
                        <ul
                            // className='md:flex space-x-5 cursor-pointer absolute md:relative bg-red-300 bg-opacity-70 md:bg-transparent w-full top-20'
                            className={`${!showMenu ? 'hidden' : 'flex-row'} md:flex space-x-5 text-center cursor-pointer fixed md:relative bg-red-300 bg-opacity-70 md:bg-transparent w-full top-20 md:top-0 bottom-0 md:right-0`}
                        >
                            <Link href='/'>
                                <li className={`hover:scale-105 transition-transform px-4 rounded ${router.pathname === '/' ? 'bg-slate-500 text-white' : 'bg-slate-200 text-black'}`}>Home</li>
                            </Link>
                            <Link href='/category'>
                                <li className={`hover:scale-105 transition-transform px-4 rounded ${router.pathname === '/category' ? 'bg-slate-500 text-white' : 'bg-slate-200 text-black'}`}>Category</li>
                            </Link>
                            <Link href='/about'>
                                <li className='hover:scale-105 transition-transform bg-slate-200 px-4 text-black rounded'>About</li>
                            </Link>
                            <Link href='/contact'>
                                <li className='hover:scale-105 transition-transform bg-slate-200 px-4 text-black rounded'>Contact</li>
                            </Link>
                            {(isAdmin || admin) && <Link href='/createproduct'>
                                <li className='hover:scale-105 transition-transform bg-slate-200 px-4 text-black rounded'>Create Product</li>
                            </Link>}
                            <Link href={'/auth/login'}>
                                <li
                                    onClick={logout}
                                    className={`hover:scale-105 transition-transform bg-slate-200 px-4 text-black rounded ${authenticated ? 'hover:bg-red-500' : ''
                                        }`}
                                >
                                    {authenticated ? 'Logout' : 'Login'}
                                </li>
                            </Link>
                        </ul>
                    </div>
                    {/* </div>} */}
                    <div>{console.log('isEmail', isEmail)}</div>
                    {/* <div>{isEmail ? 'Welcome, ' + isEmail : 'null'}</div> */}
                    <div>{isEmail ? 'Welcome, ' + isEmail : ''}</div>
                </div>
                <div
                    // className='absolute right-10 top-7 flex md:hidden'
                    className={`absolute right-10 top-7 flex md:hidden transition-transform duration-1000 transform ${showMenu ? 'translate-x-1' : ' translate-x-4'}`}
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {!showMenu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
                </div>
            </div>

            {
                products.length > 0 && <>
                    <div
                        // className='z-50 fixed bottom-1 right-1 bg-stone-700 text-white px-5 py-3'
                        className='z-50 fixed bottom-1 right-1 bg-stone-700 text-white pt-3 rounded-xl'
                    >
                        <>
                            <Accordion>
                                <AccordionItem key="1" aria-label="Accordion 1" subtitle="" title="">
                                    {products.map(v => <><p>{v.productName}<>{' - ' + v.quantity}{' - ' + v.productPrice}</></p></>)}
                                </AccordionItem>

                            </Accordion>
                            <p className='px-3 py-2'>
                                {/* {products.length} */}
                                {products.reduce((a, b) => b.quantity + a, 0)}
                                {console.log('|||products|||', products)}
                            </p>
                        </>
                        <button className='bg-blue-600 px-5 py-2 rounded-b-xl'><Link href={'/checkout'}>Go to Checkout</Link></button>
                    </div>
                </>
            }
        </div >
    );
};

export default Index;