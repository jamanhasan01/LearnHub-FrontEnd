import { useState, useEffect, useRef, useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import { authContext } from '../provider/AuthProvider'
import { IoMdSunny } from 'react-icons/io'
import { FaMoon } from 'react-icons/fa'

import logo from '../assets/learnhub.png'

const Navbar = () => {
  let { user, logOut } = useContext(authContext)
  const [navbarbg, setnavbarbg] = useState(false)
  let location = useLocation()

  const [showModeIcon, setshowModeIcon] = useState(false)

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setnavbarbg(true)
      } else {
        setnavbarbg(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  let handleMoodOfTheme = () => {
    let html = document.querySelector('html')
    if (html) {
      let currentTheme = html.getAttribute('data-theme')
      if (currentTheme == 'light') {
        html.setAttribute('data-theme', 'dark')
      } else if (currentTheme == 'dark') {
        html.setAttribute('data-theme', 'light')
      }
    }
    setshowModeIcon(!showModeIcon)
  }
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const lists = (
    <>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `px-2 py-1 rounded-none  focus:bg-transparent  transition duration-200 ${
              isActive
                ? 'border-b-2 border-textClr !text-textClr  font-semibold'
                : 'hover:bg-indigo-50'
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-2 py-1 rounded-none transition focus:bg-transparent duration-200 ${
              isActive
                ? 'border-b-2 border-textClr !text-textClr font-semibold'
                : 'hover:bg-indigo-50'
            }`
          }
          to={'/services'}
        >
          Services
        </NavLink>
      </li>
    </>
  )

  const dropdownLists = (
    <>
      <li>
        <Link to={'/addservice'}>Add Service</Link>
      </li>
      <li>
        <Link to={'/manageservice'}>Manage Service</Link>
      </li>
      <li>
        <Link to={'/bookedservices'}>Booked Services</Link>
      </li>
      <li>
        <Link to={'/servicetodo'}>Service To Do</Link>
      </li>
    </>
  )

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 transition duration-300 ${
        navbarbg
          ? 'bg-white/80 shadow-md backdrop-blur text-[#4a2d72]'
          :` ${location=='/'?"bg-transparent":"bg-white"} text-[#4a2d72]`
      }`}
    >
      <div className='navbar max-w-[1240px] mx-auto'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content rounded-box  bg-black mt-3 w-52 p-2 shadow'
            >
              {lists}
              {user && (
                <li>
                  <Link>Dashboard</Link>
                  <ul className='p-2'>{dropdownLists}</ul>
                </li>
              )}
            </ul>
          </div>
          <Link className=' flex items-center text-xl font-semibold'>
            <img className=' max-w-10' src={logo} alt='learnhub' />
            <span className='md:block hidden'>LearnHub</span>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu font-semibold text-base menu-horizontal px-1 items-center'>
            {lists}
            {user && (
              <li ref={dropdownRef} className='relative'>
                <button className='' onClick={() => setDropdownOpen((prev) => !prev)}>
                  Dashboard
                  <FaChevronDown />
                </button>
                {dropdownOpen && (
                  <ul className='absolute top-full mt-2 w-44 bg-white  rounded shadow-lg p-2'>
                    {dropdownLists}
                  </ul>
                )}
              </li>
            )}
          </ul>
        </div>
        <div className='navbar-end'>
          <button className='text-2xl mr-3' onClick={handleMoodOfTheme}>
            {showModeIcon ? <IoMdSunny></IoMdSunny> : <FaMoon></FaMoon>}
          </button>
          {user ? (
            <div className='flex'>
              <div className='flex btn btn-ghost avatar '>
                <div className='w-10 rounded-full border-gray-300 border'>
                  <img
                    title={`${user?.displayName}`}
                    alt='Tailwind CSS Navbar component'
                    referrerPolicy='no-referrer'
                    src={`${user?.photoURL}`}
                  />
                </div>
              </div>
              <button onClick={logOut} className='button'>
                Logout
              </button>
            </div>
          ) : (
            <div>
              {location.pathname === '/signin' ? (
                <Link to={'/signup'} className='button  py-3'>
                  Register
                </Link>
              ) : (
                <Link to={'/signin'} className='!button py-3'>
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
