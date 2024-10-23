"use client"

import Link from 'next/link'
import { useRouter } from "next/navigation";
import { useState } from "react"

function MiniNav(product) {
  const [search, setSearch] = useState('');
  const router = useRouter();

  // const handleSumbit = (e) => {
  //   e.preventDefault();

  //   //  const search = current.toString();

  //   router.push(`/${search}`)
  //   setSearch("")
  //   // router.push(`/search/${search}`)
  // };

  return (
    <header className="text-gray-600 body-font">

      <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center font-semibold">
          <Link href={'/phone'} className="mr-5 hover:text-gray-900">Phone </Link>
          <Link href={'/phonecase'} className="mr-5 hover:text-gray-900">PhoneCase</Link>
          <Link href={'/accessories'} className="mr-5 hover:text-gray-900">Accessories</Link>
          <Link href={'/watches'} className="mr-5 hover:text-gray-900">Watches</Link>
        </nav>

        {/* <form className="flex justify-between px-5 max-w-6xl" onSubmit={handleSumbit} >

          <input type="text" placeholder="Search...." value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 p-3 rounded-md placeholder-gray-500 outline-none border-color: currentColor border-2"
          />
          <button className="text-black-600 border-y-2 border-r-4 rounded-md decoration-gray-400" disabled={search === ''} >
            Search
          </button>
        </form> */}

      </div>
    </header>

  )
}

export default MiniNav