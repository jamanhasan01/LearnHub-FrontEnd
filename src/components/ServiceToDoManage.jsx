
import { Link } from "react-router-dom";


const ServiceToDoManage = ({ manage }) => {
  let {
    photoUrl,
    name,
    price,
    UserAddress,
    ServiceStatus,
    UserDate,
    _id
  } = manage;

 

  return (
    <div className="flex flex-col gap-2 p-5 border border-gray-200 rounded-xl">
      <img src={photoUrl} alt={name} />
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold"> Name : {name}</h3>
      </div>

      <div className="flex flex-wrap justify-between items-center">
        <div className="felx flex-col">
          <h4 className="text-gray-700 font-semibold ">Date : {UserDate}</h4>
          <h4 className="font-semibold my-2">Status : <span className={`${ServiceStatus=="completed"&&' bg-green-300 text-green-800' } ${ServiceStatus=="working"&&' bg-yellow-500 text-yellow-100' }  ${ServiceStatus=="pending"&&' bg-red-600 text-red-100' } text-sm font-medium   px-2 p-1 rounded-full`}>{ServiceStatus}</span></h4>
        </div>
        <div className="">
          <h3 className="text-xl font-semibold text-end">
            Area : {UserAddress}
          </h3>
          <h4 className="text-xl font-semibold ">Price : {price} Tk</h4>
        </div>
      </div>
      <Link to={`/servicetodoupdate/${_id}`}>
      <button className="btn bg-black text-white">Status Update</button>
      </Link>
    </div>

   
  );
};

export default ServiceToDoManage;
