import React from 'react'

type Props = {}

const MainHero = (props: Props) => {
  return (
    
  

<div className="mt-20 max-w-screen-xl mx-auto px-6 md:px-12">
    <div aria-hidden="true" className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"></div>
    <div className="relative lg:flex lg:items-center lg:gap-12">
        <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">Build in your way but with our experts <span className="text-primary dark:text-primaryLight">Support.</span></h1>
            <p className="mt-8 text-gray-600 dark:text-gray-300">Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
            <div>
                <form action="" className="w-full mt-12">
                    <div className="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                        <div className="pl-6 py-3">
                        <svg className="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
<path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
</svg>
                        </div>
                        <input autoComplete='email' placeholder="Search Course" className="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white bg-transparent" type="text"/>
                        <div className="md:pr-1.5 lg:pr-0">
                            <button type="button" className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-[#005BC4] dark:before:bg-[#002E62] before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                <span className="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                                    Search
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
                <img src="./images/clients/airbnb.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                <img src="./images/clients/ge.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                <img src="./images/clients/coty.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                <img src="./images/clients/microsoft.svg" className="h-8 sm:h-10 w-auto lg:h-12" alt="" />
            </div>
        </div>
        <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
            <img src="/assests/laptop.png" alt="project illustration" height="" width=""/>
        </div>
    </div>
</div> 
                                    
  )
}

export default MainHero