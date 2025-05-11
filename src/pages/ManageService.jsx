import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { authContext } from "../provider/AuthProvider"
import Manage from "../components/Manage"
import NoService from "../components/NoService"

const ManageService = () => {
  let {user}=useContext(authContext)
  const [manageData, setmanageData] = useState([])
  useEffect(()=>{
    axios.get(`https://learn-hub-server-side.vercel.app/manage/${user?.email}`,{withCredentials:true})
    .then(res=>{
      let data=res.data

      setmanageData(data)
    })
    .catch(error=>{
      toast(error.code)
    })
  },[user,manageData])

 

  return (
    <div className="container mt-16">
        <h2 className="text-4xl text-center mb-10 font-semibold">Manage Service</h2>
        {manageData.length?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {manageData.map((manage)=>(
              <Manage key={manage._id} manage={manage}></Manage>
            ))}
        </div>
        :<NoService></NoService>
        }
    </div>
  )
}

export default ManageService