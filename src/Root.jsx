import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./pages/Footer"
import { Helmet } from "react-helmet-async"

const Root = () => {
  let location=useLocation()
  let pathName=location.pathname.slice(1)
  return (
    <div>
        <Navbar></Navbar>
        <div className="mt-36 max-w-[1240px] mx-auto min-h-[calc(100vh-292px)] mb-20">
        <Helmet>
          <title> LearnHub || {pathName}</title>
          </Helmet>
        <Outlet></Outlet>
        
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root