import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

const ServiceToDoUpdate = () => {
  let {id} = useParams();
    const [data, setdata] = useState({})
    let navigate=useNavigate()
    let {ServiceStatus}=data
  useEffect(()=>{
    axios.get(`https://learn-hub-server-side.vercel.app/managebookedId/${id}`,{withCredentials:true})
    .then(res=>{
        let data=res.data
        setdata(data)
    })
  },[id])
  console.log(data);
  

  let handleStatusChange = (e) => {

    e.preventDefault();
    let form = new FormData(e.target);
    let status = form.get("status");
    ServiceStatus=status
    axios
      .patch(`https://learn-hub-server-side.vercel.app/booked/${id}`, {
        ServiceStatus
      },{withCredentials:true})
      .then((res) => {
        let data = res.data;
        console.log("Update Response:", data);
        if (data.modifiedCount > 0) {
          toast.success("Status updated successfully!");
          navigate('/servicetodo')

        } else {
          toast.info("No changes made.");
        }
      })
      .catch((error) => {
        toast.error(
          error.response?.data?.message || error.message || "An error occurred"
        );
      });
  };
  return (
    <div className="flex justify-center items-center flex-col">
      <form
        className="min-w-[500px] border p-5"
        onSubmit={handleStatusChange}
        
      >
        <h2 className="text-4xl text-center">ServiceToDoUpdate</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <select name="status" className="input input-bordered">
            <option value="pending">pending</option>
            <option value="working">working</option>
            <option value="completed">completed</option>
          </select>
        </div>
        <button className="btn bg-black text-white w-full mt-2">Confirm</button>
      </form>
    </div>
  );
};

export default ServiceToDoUpdate;
