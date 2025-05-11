import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { authContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const UpdateService = () => {
    let {setLoading}=useContext(authContext)
    let navigate=useNavigate()
    const [data, setdata] = useState({})
    let {id}=useParams()
    useEffect(()=>{
        axios.get(`https://learn-hub-server-side.vercel.app/services/${id}`,{withCredentials:true})
        .then(res=>{
            let data=res.data
            setdata(data)
            setLoading(false)
        })
        
       
        
    },[id])
    let handleUpdate=(e)=>{
        e.preventDefault()

        let form=new FormData(e.target)
        let formData=Object.fromEntries(form.entries())
 
        
        axios.put(`https://learn-hub-server-side.vercel.app/services/${id}`,formData,{withCredentials:true})
        .then(res=>{
            let data=res.data
            if (data.modifiedCount) {
                toast.success('Update Successfully')
                navigate('/manageservice')
            }
            
        })
        .catch(error=>toast(error.code))
    }
    let {_id,photoUrl, name, description,price,Area} = data;
  return (
    <div className=" container mt-20  shadow-2xl  p-5 space-y-4">
        <h1 className="text-4xl font-bold text-center">Update Service</h1>
        <form onSubmit={handleUpdate}>
          {/* row  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="Photo"
                defaultValue={photoUrl}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                defaultValue={name}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="price"
                defaultValue={price}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Area</span>
              </label>
              <input
                type="text"
                name="Area"
                placeholder="Service Area"
                defaultValue={Area}
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row  */}
          <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
            <textarea name="description" id="" defaultValue={description}  className="input input-bordered"></textarea>
            </div>
          <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-black/80">
              Update
            </button>
          </div>
        </form>
      </div>
  )
}

export default UpdateService