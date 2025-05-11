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
        <div className="min-h-[calc(100vh-10vh)]">
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