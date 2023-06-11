import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'

function CatogoryBar() {

    const catogoryList = [
        "asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf",
        "asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf",
        "asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf","asdf",
    ]

    const Item = ({name})=> {
        return(
        <div className='rounded-lg py-2 px-4 text-black bg-stone-200'>
            {name}
        </div>
        )
    }
  return (
    <div className='flex flex-row'>
        <button className='bg-gradient-to-r from-white to-transparent'>
            <ArrowLeftIcon className='h-6 w-6'/>
        </button>
        <div className='flex flex-row space-x-4 py-8 px-2 overflow-x-auto scrollbar'>
            {catogoryList.map((name, i) => 
            <Item name={name} key={i}/>
            )}
        </div>
        <button className='bg-gradient-to-l from-white to-transparent'>
            <ArrowRightIcon className='h-6 w-6'/>
        </button>
      
    </div>
  )
}

export default CatogoryBar
