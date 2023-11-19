import React from 'react'

const Header = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="diff h-full   ">
        <div className="diff-item-1 ">

          <div className='bg-black  justify-center flex flex-col flex-wrap font-black items-center '>
            <div
              className=' flex w-fit justify-center  flex-col flex-wrap font-black '>
              <div className='text-5xl'>
                I{"'"}m
              </div>

              <div
                className=' text-secondary   text-9xl  flex-col flex  font-black w-fit'>
                DHANUSH
                <span
                  className=''>PRABAKARAN</span>
              </div>
            </div>
          </div>

        </div>
        <div className="diff-item-2 ">
          <div className=" bg-secondary text-primary-content text-9xl font-black grid place-content-center">
            
            <div
            className=' flex w-fit justify-center  flex-col flex-wrap font-black '>
            <div className='text-5xl'>
              I{"'"}m
            </div>

            <div
              className=' text-primary   text-9xl  flex-col flex  font-black w-fit'>
              FULL STACK
              <span
                className=''>DEVELOPER</span>
            </div>
          </div>
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  )
}

export default Header