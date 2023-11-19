import React from 'react'
import Projectcont from './Projectcont'
const Project = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content text-center">
                <div>
                    <h1 className="lg:text-5xl text-5xl  max-md:text-4xl max-sm:text-4xl font-black ">PROJECTS</h1>
                    <div
                    className=' w-full flex flex-wrap justify-center'>
                    <Projectcont />
                    <Projectcont />
                    <Projectcont />
                    <Projectcont />
                    <Projectcont />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project