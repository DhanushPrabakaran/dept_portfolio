import React from 'react'

const Certification = () => {
  return (
    <div className="card  bg-gradient-to-b from-gray-700 via-slate-600 to-gray-700 bg-opacity-25 glass  m-2 ">
            <div className="card-body">
                <h2 className="card-title text-white justify-center font-black text-2xl">HTML Certification</h2>
                <p
                className='text-white'>Dev geeks platform is a vibrant hub for developers of all backgrounds and expertise levels to come together and create, learn, and grow.</p>
                <div>
                <h1
                className=' font-black w-full text-start text-xl text-white'>skill:</h1>
                <h1
                className=' text-white'>
                    HTML5, CSS3, JavaScript, Responsive Web Design, SEO and Accessibility.
                </h1>
                </div>
                <div>
                <h1
                className=' font-black w-full text-start text-xl text-white'>Platform:</h1>
                <h1
                className=' text-2xl font-black text-error btn'>
                    Hacker Rank
                </h1>
                </div>
                {/* <h1
                className=' font-black w-full text-start text-xl'>skill:</h1>
                <div className='flex justify-center gap-1.5 flex-wrap '>
                    <div className="badge">HTML</div>
                    <div className="badge badge-neutral">CSS</div>
                    <div className="badge badge-primary">Javascript</div>
                    <div className="badge badge-secondary">NodeJs</div>
                    <div className="badge badge-accent">ExpressJS</div>
                    <div className="badge badge-ghost">Api</div>
                </div> */}
                <div className=' flex justify-center'>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <svg className="w-[30px] h-[30px] text-gray-800 dark:text-white m-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                        </svg>
                    </a>

                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <svg className="w-[30px] h-[30px] m-2  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
  )
}

export default Certification