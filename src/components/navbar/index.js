import { useRouter } from 'next/router'
import React from 'react'

const Index = () => {

    const router = useRouter()

    return (
        <div className='bg-orange-400 text-white shadow-lg'>
            <div className='mx-10 py-5'>
                <div className='flex justify-between'>
                    <div>Logo</div>
                    <div>
                        <ul className='flex space-x-5 cursor-pointer'>
                            <li className={`hover:scale-105 transition-transform px-4 rounded ${router.pathname === '/' ? 'bg-slate-500 text-white' : 'bg-slate-200 text-black'}`}>Home</li>
                            {/* <li className='hover:scale-105 transition-transform bg-slate-200 px-4 text-black rounded'>Home</li> */}
                            <li className='hover:scale-105 transition-transform bg-slate-200 px-4 text-black rounded'>Category</li>
                            <li className='hover:scale-105 transition-transform bg-slate-200 px-4 text-black rounded'>About</li>
                            <li className='hover:scale-105 transition-transform bg-slate-200 px-4 text-black rounded'>Contact</li>
                            <li className='hover:scale-105 transition-transform bg-slate-200 px-4 text-black rounded'>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Index
