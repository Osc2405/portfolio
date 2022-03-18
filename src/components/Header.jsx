import React from 'react'
import logo from './../assets/img/logo-noBg.png'

const Header = (props) => {
  return (
    <header className=' text-white'>
      <div className=' flex items-center justify-between h-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8'>
        <div className='flex items-center'>
          <button type='button' className='p-2 sm:mr-4 md:hidden'>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              >
              <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a href="/" className='flex items-center justify-center'>
          <img src={logo} className=" mr-3 h-6 sm:h-10 rounded-full" alt="Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Oscar's Portfolio</span>
          </a>
        </div>
        <div className='flex items-center'>
          <nav className='flex md:uppercase md:tracking-wide md:font-bold md:space-x-4 md:flex '>
          <a href="/news" className=" block h-16  leading-[4rem] border-transparent hover:text-DarkEmpathize hover:border-curren "
          >
            News
          </a>
          <a href="/news" className=" block h-16  leading-[4rem] border-transparent hover:text-DarkEmpathize hover:border-curren "
          >
            About
          </a>
          <a href="/news" className=" block h-16  leading-[4rem] border-transparent hover:text-DarkEmpathize hover:border-curren "
          >
            Contact
          </a>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default Header