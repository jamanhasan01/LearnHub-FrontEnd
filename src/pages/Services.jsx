import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Service from "../components/Service"
import { authContext } from "../provider/AuthProvider"
import Loading from "../components/Loading"


const Services = () => {
  let {setLoading,loading}=useContext(authContext)
  const [serviceData, setserviceData] = useState([])
  const [showMoreData, setshowMoreData] = useState(6)

    


  useEffect(()=>{
    axios.get('http://localhost:5000/services')
    .then((res)=>{
      let data=res.data
      setserviceData(data);
      setLoading(false)
      
    })
  },[loading])

  
  if (loading) {
    return <Loading></Loading>
}
  
  return (
    <div>
        <h1 className="text-4xl text-center font-semibold mb-10">All Services </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              serviceData.slice(0,showMoreData).map((service)=><Service key={service._id} service={service}></Service>)
            }
        </div>
        <div className="w-full mt-10 text-center">
            <button onClick={()=>setshowMoreData(showMoreData+6)} className="btn bg-black text-white">View More</button>
        </div>
    </div>
  )
}

export default Services