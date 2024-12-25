import { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { authContext } from "../provider/AuthProvider";

import logo from '../assets/learnhub.png'

const Navbar = () => {
  let { user, logOut } = useContext(authContext);
  let location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const lists = (
    <>
      <li>
        <Link className="!text-white" to={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className="!text-white" to={"/services"}>
          Services
        </Link>
      </li>
    </>
  );

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
  );

  return (
    <div className="bg-gray-900 text-white fixed left-0 top-0 w-full z-10">
      <div className="navbar max-w-[1240px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box bg-black mt-3 w-52 p-2 shadow"
            >
              {lists}
              {user&&<li>
                <Link>Dashboard</Link>
                <ul className="p-2">{dropdownLists}</ul>
              </li>
              }
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl"><img className=" max-w-10" src={logo} alt="learnhub" />LearnHub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">
            {lists}
            {user&&
            <li ref={dropdownRef} className="relative">
              <button
                className="!text-white"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                Dashboard
                <FaChevronDown />
              </button>
              {dropdownOpen && (
                <ul className="absolute top-full mt-2 w-44 bg-white text-black rounded shadow-lg p-2">
                  {dropdownLists}
                </ul>
              )}
            </li>
            }
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex btn btn-ghost avatar ">
              <div  className="w-10 rounded-full border-gray-300 border">
                <img title={`${user?.displayName}`}
                  alt="Tailwind CSS Navbar component"
                  src={`${user.photoURL}`}
                />
              </div>
              <button onClick={logOut} className="btn">
                Logout
              </button>
            </div>
          ) : (
            <div>
              {location.pathname === "/signin" ? (
                <Link to={"/signup"} className="btn">
                  Register
                </Link>
              ) : (
                <Link to={"/signin"} className="btn">
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <Link to={"/signin"} className="btn">
            Login
          </Link> */
}
