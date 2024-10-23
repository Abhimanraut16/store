'use client'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (

    <header className="text-gray-600 body-font">

      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl font-bold">.Store</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
          <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
          <Link href={'/'} className="mr-5 hover:text-gray-900">About</Link>
          <Link href={'/'} className="mr-5 hover:text-gray-900">Services</Link>
          <Link href={'/contact'} className="mr-5 hover:text-gray-900">Contact Us</Link>
        </nav>
        <Link href={'/cart'} className=" font-medium mr-11 text-gray-900 mb-4 md:mb-0">
          <span className=" text-xl ">Cart</span>
        </Link>
        <Link href={'/login'}>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 font-bold">Login

          </button>
        </Link>
      </div>
    </header>

    // <header className="text-gray-600 body-font">
    //   <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center ">
    //     <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    //       <span className="ml-20 text-xl font-bold ">.Store</span>
    //     </Link>
    //     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-bold">
    //       <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
    //       <Link href={'/'} className="mr-5 hover:text-gray-900">About</Link>
    //       <Link href={'/'} className="mr-5 hover:text-gray-900">Services</Link>
    //       <Link href={'/'} className="mr-5 hover:text-gray-900">Contact Us</Link>
    //     </nav>
    //     <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 font-bold md:mt-0">Login
    //     </button>
    //   </div>
    // </header>

  )
}

export default Navbar