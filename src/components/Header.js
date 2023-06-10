'use client'

import React, { useState } from 'react'
import Logo from 'react-svgporn';
import { Bars3Icon, MicrophoneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { BellIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

function Header() {

    const [showLen, setShowLen] = useState(false);
    return (
        <div>
            {/* Header */}
            <div className="flex flex-row items-center justify-between mt-1 mx-2">
                <div className='flex flex-row space-x-5 items-center'>
                    <button className='button ml-6'>
                        <Bars3Icon className='h-6 w-6' />

                    </button>
                    <button>
                        <Logo name="Youtube" className='h-10 w-24' />
                    </button>
                </div>


                <div className='hidden sm:flex flex-row space-x-3 items-center w-1/2'>
                    <div className='flex flex-grow flex-row '>
                        <div className=' forcus:border-red-200 items-center flex flex-row w-full rounded-l-full pl-5 border-solid border-2 border-gray-300 shadow-inner'>
                            {showLen && <MagnifyingGlassIcon className='h-6 w-6' />}
                            <input className='w-full h-full rounded-l-full'   onFocus={()=>setShowLen(true)} onBlur={()=>setShowLen(false)} type="text" placeholder='Search'/> 
                        </div>
                         <button className='rounded-r-full hover:bg-gray-100 hover:transition-all border-solid border-2 border-gray-300 bg-gray-50 py-2 px-5 shadow-inner
                         button_with_data_tip' data-tip="Search">
                            <MagnifyingGlassIcon className='h-6 w-6' />
                        </button>
                    </div> {/*Search bar */}

                    <div className="button_with_data_tip" data-tip='Search with your voice'>
                        <button className="button">
                            <MicrophoneIcon className='h-5 w-5' />
                        </button>
                    </div>
                </div>

                <div className='flex flex-row space-x-3 items-center'>
                    <div className="sm:hidden button_with_data_tip" data-tip='Search'>
                        <button className="button">
                            <MagnifyingGlassIcon className='h-6 w-6' />
                        </button>
                    </div>
                    <div className="sm:hidden button_with_data_tip" data-tip='Search with your voice'>
                        <button className="button">
                            <MicrophoneIcon className='h-5 w-5' />
                        </button>
                    </div>
                    <div className="button_with_data_tip" data-tip='Create'>
                        <button className="button">
                            <VideoCameraIcon className='h-6 w-6' />
                        </button>
                    </div>
                    <div className="button_with_data_tip" data-tip='Notifications'>
                        <button className="button">
                            <BellIcon className='h-6 w-6' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
