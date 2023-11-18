import Image from 'next/image'
import Header from '@/components/Header'
export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
  
  <div className="diff  h-full ">
  <div className="diff-item-1 ">
    {/* <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">DAISY</div> */}
    dev
    <div
    className='text-black bg-teal-800  text-9xl justify-center flex items-center font-black'>
      hello
    </div>
  </div>
  <div className="diff-item-2 ">
    <div className="bg-red-900 text-primary-content text-9xl font-black grid place-content-center">DEVELOPER</div>
  </div>
  <div className="diff-resizer"></div>
</div>

  
</div>
    
  )
}
