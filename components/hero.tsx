import React from 'react'
// import Dname from './dname'
// import Deveop from './deveop'
import Dname from '@/components/Dname'
import Deveop from '@/components/Deveop'
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="diff h-full   ">
        <div className="diff-item-1  ">
          <Deveop />
        </div>
        <div className="diff-item-2 ">
          <Dname />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  )
}

export default Hero