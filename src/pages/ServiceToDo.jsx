import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import NoService from "../components/NoService"
import ServiceToDoManage from "../components/ServiceToDoManage"
import { authContext } from "../provider/AuthProvider"

const ServiceToDo = () => {
  let {user}=useContext(authContext)
  let  [bookedData, setbookedData] = useState([])
  useEffect(()=>{
    axios.get(`https://learn-hub-server-side.vercel.app/managebookedEmail/${user?.email}`,{withCredentials:true})
    .then((res)=>{
      let data=res.data
      setbookedData(data)
    })
    .catch(error=>toast(error.code))
  },[user])
 
  return (
    <div className="container mt-16">
      <h2 className="text-4xl text-center font-semibold mb-10">Service To Do</h2>
      {bookedData.length?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {bookedData.map((manage)=>(
              <ServiceToDoManage key={manage._id} manage={manage}></ServiceToDoManage>
            ))}
        </div>
        :<NoService></NoService>
        }
    </div>
  )
}

export default ServiceToDo

// booked/jamanhasan246@gmail.com