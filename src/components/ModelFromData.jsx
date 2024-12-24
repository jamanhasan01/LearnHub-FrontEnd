import axios from "axios"

const ModelFromData = ({serviceData}) => {
    console.log(serviceData);
    

  return (
    <div>
   <form onSubmit={handlePurchaseDate}   method="dialog">
              {/* row  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <div className="form-control">
                  <label className="label">
                    <span className="label-text">Service Id</span>
                  </label>
                  <input
                    type="text"
                    name="ServiceId"
                    placeholder="Service Id"
                    className="input input-bordered"
                    value={id}
                    required
                  />
                </div> */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    value={author_email}
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
                    value={price}
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
                    value={name}
                    required
                  />
                </div>
              </div>
              {/* row  */}
              <div className="grid grid-cols-1 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    placeholder="Photo"
                    className="input input-bordered"
                    value={photoUrl}
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
                    value={user.displayName}
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
                    value={user.email}
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
                    // placeholder="Date"
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

  )
}

export default ModelFromData