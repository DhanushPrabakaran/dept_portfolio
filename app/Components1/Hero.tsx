import React from 'react'
// import Header from './HE'

const Hero = () => {
    return (
        
            
        <div className="hero min-h-screen bg-black flex  flex-row flex-wrap bg-left-bg bg-cover bg-no-repeat">
            <div className="navbar bg-transparent flex justify-between font-black border-b border-gray-900 top-0 absolute">
<div className="flex">
    <a className="btn btn-ghost text-3xl">DEV</a>
  </div>
<div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-black">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  
  <div className="btn">
    Get Connected
  </div>
</div>
            <div>
                Hello
            </div>
            <div>
                Hello
            </div>
        </div>
        
        
    )
}

export default Hero