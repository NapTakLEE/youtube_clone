'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Dropdown  from './Dropdown'
function VideoContainer() {
    return (
        <div className='p-4 flex flex-col space-y-4 items-center'>
            <Image src="https://i.ytimg.com/vi/7EtQqLZ-PCM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJv_1QmFs0Rp3lhWNfXGUOyGOKPg"
                height={200} width={400} className='rounded-lg' />
            <div className="flex flex-row justify-between space-x-2 w-full p-4">
                <div className='rounded-full'> Avat</div>
                <div className='flex-grow flex flex-col '>
                    <p>title here</p>
                    <p className='text-md text-gray-400'>Creator</p>
                    <p className='text-md text-gray-400'>9.4k views・2 hours ago</p>
                </div>
                <div>
                    <Dropdown/>
                </div>


            </div>

        </div>
    )
}

export default VideoContainer
