import React from 'react'
import Dname from './dname'
// import Deveop from './deveop'
import Deveop from './deveop'
const Header = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="diff h-full   ">
        <div className="diff-item-1  ">
          <Dname/>
        </div>
        <div className="diff-item-2 "> 
          <Deveop/>
        </div>
        <div className="diff-resizer"></div>
      </div>
    </div>
  )
}

export default Header