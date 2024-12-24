import { TbError404 } from "react-icons/tb";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h1 className="text-9xl"><TbError404/></h1>
      <p className="text-5xl font-bold flex">Page Not Founded <VscError></VscError></p>
      <Link className="btn mt-5 bg-black text-white" to={'/'}>Go Back</Link>
    </div>
  )
}

export default ErrorPage