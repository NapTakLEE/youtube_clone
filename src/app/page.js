import Image from 'next/image'
import Header from '../components/Header'
import CatogoryBar from '@/components/CatogoryBar'
import VideoContainer from '@/components/VideoContainer'
import SideBar from '@/components/SideBar'
export default function Home() {
  return (
    <div className='w-full'>
      <Header />
      <div className="flex flex-row">
        <SideBar className='w-1/4 h-full'/>
        <div className = 'w-3/4'>
          <CatogoryBar className='w-full' />
          <div className='grid md:grid-cols-3 sm:gride-cols-2'>
            <VideoContainer />
            <VideoContainer />
            <VideoContainer />
            <VideoContainer />
          </div>
        </div>


      </div>

    </div>

  )
}
