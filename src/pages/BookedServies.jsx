import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { authContext } from "../provider/AuthProvider"
import BookedServie from "../components/BookedServie"
import NoService from "../components/NoService"

const BookedServies = () => {
  let {user,setLoading}=useContext(authContext)
  let  [bookedData, setbookedData] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:5000/booked/${user?.email}`)
    .then(res=>{
      let data=res.data
      setbookedData(data)
      setLoading(false)
    })
  },[user])
  return (
    <div>
      <h2 className="text-4xl text-center mb-10 font-semibold">Booked Services {bookedData.length}</h2>
      {bookedData.length>0?
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {bookedData.map((booked)=><BookedServie key={booked._id} booked={booked}></BookedServie>)}
      </div>:
      <NoService></NoService>
      }
    </div>
  )
}

export default BookedServies