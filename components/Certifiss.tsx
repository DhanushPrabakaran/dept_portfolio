import React from 'react'
import Certification from '@/components/Certification'
const Certifiss = () => {
    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content text-center">
                <div>
                    <h1 className="lg:text-5xl text-5xl  max-md:text-4xl max-sm:text-4xl font-black my-8 ">INTERNSHIPS & CERTIFICATIONS</h1>
                    <div
                    className=' w-full flex flex-wrap justify-center'>
                    <Certification/>
                    <Certification/>
                    {/* <Certification/>
                    <Certification/>
                    <Certification/> */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifiss