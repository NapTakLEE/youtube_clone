'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Dropdown  from './Dropdown'
function VideoContainer() {
    return (
        <div className='p-4 flex flex-col space-y-4 items-center'>
            <Image src="https://i.ytimg.com/an_webp/Vho4am2gAuo/mqdefault_6s.webp?du=3000&sqp=CJTQl6QG&rs=AOn4CLDjTQUo_3yZibfqp8LDk7LqDWIHEQ"
                height={200} width={400} className='rounded-lg' aly="" />
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
