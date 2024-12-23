import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./pages/Footer"

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="mt-36 max-w-[1240px] mx-auto min-h-[calc(100vh-292px)] mb-20">
        <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root