import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const ServiceDetails = () => {
  let { setLoading, user } = useContext(authContext);
  let { id } = useParams();
  let navigate = useNavigate();
  const [serviceData, setserviceData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/services/${id}`,{withCredentials:true}).then((res) => {
      let data = res.data;
      setserviceData(data);
      setLoading(false);
    });
  }, [id]);

  let handlePurchaseDate = (e) => {
    e.preventDefault();
    let form = new FormData(e.target);
    let purchaseData =Object.fromEntries(form.entries());
    console.log(purchaseData);
    let newPurchaseData={...purchaseData}
   
    
    newPurchaseData.ServiceStatus="pending"
    newPurchaseData.auther_photo=serviceData.auther_photo
    newPurchaseData.auther_name=serviceData.auther_name
    
    axios.post("http://localhost:5000/booked", newPurchaseData,{withCredentials:true}).then((res) => {
      let data = res.data;

      
      if (data.insertedId) {
        toast("Purchase Successfully");
        navigate("/bookedservices");
      }
    })
    .catch((error)=>toast.error(error.code))
  };

  let {
    photoUrl,
    name,
    description,
    auther_photo,
    auther_name,
    price,
    Area,
    author_email,
  } = serviceData;
  
 
  

  return (
    <div className="max-w-xl mx-auto border border-gray-200 p-6 flex flex-col gap-2">
      <img src={photoUrl} alt="" />
      <h2 className="text-4xl font-bold">{name}</h2>
      <p className="text-gray-500 font-lg">{description}</p>
      <h3 className=" font-semibold text-lg">{Area}</h3>
      <h4 className="text-2xl font-bold">{price} taka</h4>
      <div className="flex gap-2 items-center">
        <img className=" max-w-10 rounded-badge" src={auther_photo} alt="" />
        <h4 className="font-serif text-lg text-gray-600">{auther_name}</h4>
      </div>

      {/* model show */}

      <button
        className="btn bg-black text-white"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Book Now
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {/* ---------------------------------------------- */}
          <form onSubmit={handlePurchaseDate} method="dialog">
            {/* row  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Id</span>
                </label>
                <input
                  type="text"
                  name="ServiceId"
                  placeholder="Service Id"
                  className="input input-bordered"
         
                  defaultValue={id}
                  readOnly
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  defaultValue={author_email}
                  readOnly
                  required
                />
              </div>
            </div>
            {/* row  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="price"
                  className="input input-bordered"
                  defaultValue={price}
                  readOnly
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  defaultValue={name}
                  readOnly
                  required
                />
              </div>
            </div>
            {/* row  */}
            <div className="grid grid-cols-1 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Photo Url</span>
                </label>
                <input
                  type="url"
                  name="photoUrl"
                  placeholder="Photo"
                  className="input input-bordered"
                  defaultValue={photoUrl}
                  readOnly
                  
                  required
                />
              </div>
            </div>
            {/* row  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Your Name"
                  className="input input-bordered"
                  defaultValue={user?.displayName}
                  readOnly
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  name="userEmail"
                  placeholder="Your email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                  readOnly
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Address</span>
                </label>
                <input
                  type="text"
                  name="UserAddress"
                  placeholder="Type Your Address"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="date"
                  name="UserDate"
               
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-black text-white hover:bg-black/80">
                Purchase Button
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
