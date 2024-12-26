import { useContext } from "react";
import { authContext } from "../provider/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const AddService = () => {
  let { user } = useContext(authContext);
  let navigate=useNavigate()
  let location = useLocation();


  let handleAddService = (e) => {
    e.preventDefault();

    let form = new FormData(e.target);
    let formData = Object.fromEntries(form.entries());
    let serviceData = { ...formData };

    // get data input form user
    serviceData.author_email = user.email;
    serviceData.auther_name = user.displayName;
    serviceData.auther_photo = user.photoURL;

    axios.post("https://learn-hub-server-side.vercel.app/services", serviceData,{withCredentials:true}).then((res) => {
      if (res.data.insertedId) {
        toast.success("data has been added successfully");
        navigate('/services')
      }
    });
  };

  return (
    <div>
      <div className=" mx-auto w-full max-w-xl  shadow-2xl my-20 p-5 space-y-4">
        <h1 className="text-4xl font-bold text-center">Add Service</h1>
        <form onSubmit={handleAddService}>
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
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* row  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                id=""
                className="input input-bordered"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                id="description"
                className="input input-bordered"
              >
                <option value="english">English</option>
                <option value="bangla">Bangla</option>
                <option value="programming">Programming</option>
              </select>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-black text-white hover:bg-black/80">
              Add Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
