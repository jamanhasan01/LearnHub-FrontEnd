import axios from "axios"
import { useEffect, useState } from "react"
import Service from "../components/Service"


const Services = () => {
  const [serviceData, setserviceData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/services')
    .then((res)=>{
      let data=res.data
      setserviceData(data);
      
    })
  },[])
  
  
  
  
  return (
    <div>
        <h1 className="text-4xl text-center font-semibold mb-10">All Services {serviceData.length}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              serviceData.map((service)=><Service key={service._id} service={service}></Service>)
            }
        </div>
    </div>
  )
}

export default Services