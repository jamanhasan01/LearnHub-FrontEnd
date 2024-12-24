import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { authContext } from "../provider/AuthProvider"
import Manage from "../components/Manage"

const ManageService = () => {
  let {user}=useContext(authContext)
  const [manageData, setmanageData] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/manage/${user?.email}`)
    .then(res=>{
      let data=res.data

      setmanageData(data)
    })
    .catch(error=>{
      toast(error.code)
    })
  },[user])

 

  return (
    <div>
        <h2 className="text-4xl text-center mb-10">ManageService {manageData.length}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {manageData.map((manage)=>(
              <Manage key={manage._id} manage={manage}></Manage>
            ))}
        </div>
    </div>
  )
}

export default ManageService