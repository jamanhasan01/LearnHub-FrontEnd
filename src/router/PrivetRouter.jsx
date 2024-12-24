import { useContext } from "react"
import { authContext } from "../provider/AuthProvider"
import { Navigate } from "react-router-dom"
import Loading from "../components/Loading"

const PrivetRouter = ({children}) => {

    let {user,loading}=useContext(authContext)
    
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
      return <Navigate to="/signin" />
    }
    
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivetRouter