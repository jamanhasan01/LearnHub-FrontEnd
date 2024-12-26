import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Service from "../components/Service"
import { authContext } from "../provider/AuthProvider"
import Loading from "../components/Loading"
import NoService from "../components/NoService"


const Services = () => {
  let {setLoading,loading}=useContext(authContext)
  const [serviceData, setserviceData] = useState([])
  const [showMoreData, setshowMoreData] = useState(6)
  const [result, setresult] = useState([])
    
  let handleSearch=(e)=>{
    e.preventDefault()
    let inputValue=e.target.value.toLowerCase()
    let filter=serviceData.filter((filter)=>filter.name.toLowerCase().includes(inputValue))
    setresult(filter);
    
  }

  
  useEffect(()=>{
    axios.get('https://learn-hub-server-side.vercel.app/services')
    .then((res)=>{
      let data=res.data
      setLoading(true)
      setserviceData(data);
      setresult(data)
      setLoading(false)
      
    })
  },[loading])

  
  
  if (loading) {
    return <Loading></Loading>
}
  
  return (
    <div>
   
        <h1 className="text-4xl text-center font-semibold mb-10">All Services </h1>
        <form onChange={handleSearch} className="mb-10 ">
          <input type="text" className="input input-bordered" placeholder="Search Service Name"/>
        </form>
        {result.length>0?
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              result.slice(0,showMoreData).map((service)=><Service key={service._id} service={service}></Service>)
            }
        </div>
      {
        result.length > 6 &&
          <div className="w-full mt-10 text-center">
          <button onClick={()=>setshowMoreData(showMoreData+6)} className="btn bg-black text-white">View More</button>
      </div>
      }
        </>
        : <NoService></NoService>
        }
    </div>
  )
}

export default Services