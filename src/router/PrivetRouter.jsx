import { useContext } from "react"
import { authContext } from "../provider/AuthProvider"
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"

const PrivetRouter = ({children}) => {
    let navigate=useNavigate()
    let {user,loading}=useContext(authContext)
    

    
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return navigate('/signin')
    }
    
  return (
    <div>
        {children}
    </div>
  )
}

export default PrivetRouter