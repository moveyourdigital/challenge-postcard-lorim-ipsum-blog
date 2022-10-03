import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react';

export default function Header () {

  const changeFlag = (button: string) => {
    if (button === 'home'){
      const menu = document.querySelector("#home-menu")
      const desactive = document.querySelector("#about-menu")

      desactive?.classList.remove('text-red-700')
      menu?.classList.add('text-red-700')
    }

    if (button === 'about'){
      const menu = document.querySelector("#about-menu")
      const desactive = document.querySelector("#home-menu")

      desactive?.classList.remove('text-red-700')
      menu?.classList.add('text-red-700')
    }
  }

  useEffect(() => {
    const home = document.querySelector("#home-page")
    const about = document.querySelector("#about-page")

    if (home) {
      const menu = document.querySelector("#home-menu")
      const desactive = document.querySelector("#about-menu")

      desactive?.classList.remove('text-red-700')
      menu?.classList.add('text-red-700')
    } else if (about){
      const menu = document.querySelector("#about-menu")
      const desactive = document.querySelector("#home-menu")

      desactive?.classList.remove('text-red-700')
      menu?.classList.add('text-red-700')
    } else {
      const menuDesactive = document.querySelector("#home-menu")
      const aboutDesactive = document.querySelector("#about-menu")

      menuDesactive?.classList.remove('text-red-700')
      aboutDesactive?.classList.remove('text-red-700')
    }
  }, [])
    return(
    <>
    <header className="w-full bg-gray-300 shadow-xl h-16">
      <div className='flex justify-between items-center max-w-screen-md mx-auto h-16 px-4 lg:px-0'>
      <div className=''>
        <h2 className='font-sans text-xl font-semibold'>Lorem Ipsum Blog</h2>
      </div>

      <nav>
        <ul className="flex">
          <li className='pl-4' id='home-menu' onClick={() => changeFlag('home')}><Link href="/"><a>Home</a></Link></li>
          <li className='pl-4' id='about-menu' onClick={() => changeFlag('about')}><Link href="/about"><a>About Us</a></Link></li>
        </ul>
      </nav>
      </div>
    </header>
    </>
    )
}