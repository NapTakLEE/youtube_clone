'use client'
import React from 'react'
import { FlagIcon, HomeIcon } from '@heroicons/react/24/solid'
import { ArrowDownIcon, ClockIcon, FireIcon, HandThumbUpIcon, LinkIcon, MusicalNoteIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

const style1 = `rounded-lg flex 
flex-row items-center focus:bg-stone-100
 focus:hover:bg-stone-200 hover:bg-stone-100
 space-x-4 ml-4 px-4 py-2`
function SideBar() {

    const router = useRouter()

    return (
        <div className='bg-white overflow-y-auto'>

            <div className='border-b-2 border-stone-100 text-lg space-y-2 px-3 py-2 max-h-screen'>
                <div className={style1} >
                    <HomeIcon className='h-6 w-6' /> <p> Home</p>
                </div>
                <div className={style1} onClick={()=> router.push('/playground')}>
                    <HomeIcon className='h-6 w-6 ' /> <p> Shorts</p>
                </div>
                <div className={style1}>
                    <HomeIcon className='h-6 w-6 ' /> <p> Subscriptions</p>
                </div>
            </div>

            <div className='border-b-2 border-stone-100 text-lg space-y-2 px-3 py-2'>
                <div className={style1} >
                    <HomeIcon className='h-6 w-6' /> <p> Library</p>
                </div>
                <div className={style1}>
                    <HomeIcon className='h-6 w-6 ' /> <p> History</p>
                </div>
                <div className={style1}>
                    <HomeIcon className='h-6 w-6 ' /> <p> Your videos</p>
                </div>
                <div className={style1}>
                    <ClockIcon className='h-6 w-6 ' /> <p> Your videos</p>
                </div>
                <div className={style1}>
                    <HandThumbUpIcon className='h-6 w-6 ' /> <p> Liked videos</p>
                </div>
                <div className={style1}>
                    <ArrowDownIcon className='h-6 w-6 ' /> <p> Show more</p>
                </div>
            </div>


            <div className='border-b-2 border-stone-100 text-lg space-y-2 px-3 py-2'>
                <p>Subscriptions</p>
                <div className={style1} >
                    <HomeIcon className='h-6 w-6' /> <p> youtuber1</p>
                </div>
                <div className={style1}>
                    <ArrowDownIcon className='h-6 w-6 ' /> <p> Show 110 more</p>
                </div>
            </div>


            <div className='border-b-2 border-stone-100 text-lg space-y-2 px-3 py-2'>
                <p>Explore</p>
                <div className={style1} >
                    <FireIcon className='h-6 w-6' /> <p> Trending</p>
                </div>
                <div className={style1}>
                    <MusicalNoteIcon className='h-6 w-6 ' /> <p> Music</p>
                </div>
                <div className={style1}>
                    <HomeIcon className='h-6 w-6 ' /> <p>Movies</p>
                </div>
                <div className={style1}>
                    <ClockIcon className='h-6 w-6 ' /> <p>Live</p>
                </div>
                <div className={style1}>
                    <LinkIcon className='h-6 w-6 ' /> <p> Gaming</p>
                </div>
                <div className={style1}>
                    <ArrowDownIcon className='h-6 w-6 ' /> <p> Sports</p>
                </div>
                <div className={style1}>
                    <HomeIcon className='h-6 w-6 ' /> <p> Fashion & Beauty</p>
                </div>
            </div>

            <div className='border-b-2 border-stone-100 text-lg space-y-2 px-3 py-2'>
                <p>More from YouTube</p>
                <div className={style1} >
                    <HomeIcon className='h-6 w-6' /> <p> YouTube Premium</p>
                </div>
                <div className={style1}>
                    <FlagIcon className='h-6 w-6 ' /> <p> YouTube Studio</p>
                </div>
                <div className={style1}>
                    <QuestionMarkCircleIcon className='h-6 w-6 ' /> <p>YouTube Music</p>
                </div>
                <div className={style1}>
                    <HomeIcon className='h-6 w-6 ' /> <p>YouTube Kids</p>
                </div>
            </div>

            <div className='border-b-2 border-stone-100 text-lg space-y-2 px-3 py-2'>
                <div className={style1} >
                    <HomeIcon className='h-6 w-6' /> <p> Settings</p>
                </div>
                <div className={style1}>
                    <FlagIcon className='h-6 w-6 ' /> <p> Report history</p>
                </div>
                <div className={style1}>
                    <QuestionMarkCircleIcon className='h-6 w-6 ' /> <p>Help</p>
                </div>
                <div className={style1}>
                    <HomeIcon className='h-6 w-6 ' /> <p>Send feedback</p>
                </div>
            </div>

            <div className='font-bold text-md text-stone-700'>
                <p>About</p>
                <p>Press</p>
                <p>Copyright</p>
                <p>Contact us </p>
                <p>Creators</p>
                <p>Advertise</p>
                <p>Developers</p>
<p></p>
                <p>Terms</p>
                <p>Privacy </p>
                <p>Policy & Safety</p>
                <p>How YouTube works</p>
                <p>Test new features</p>
            </div>


        </div>
    )
}

export default SideBar
