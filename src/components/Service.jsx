
import { useContext } from "react";
import { Link,  } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Service = ({ service }) => {
  let {_id, photoUrl, name, description, auther_photo, auther_name ,price,Area} = service;
  let {user}=useContext(authContext)
    
  return (
    <div className="flex flex-col gap-2 p-3 border border-gray-200 dark:border-gray-600 rounded-xl">
      <img className="rounded-md h-[160px] object-fill" referrerPolicy="no-referrer" src={photoUrl} alt={name} />
      <h3 className="text-lg font-bold">{name.length>20? `${name.slice(0,25)}...`:name}</h3>
      <div className="flex justify-between">
      <div className="flex gap-2 items-center "> 
        <img className="max-w-10 rounded-badge border border-gray-300 p-[2px]" referrerPolicy="no-referrer" src={auther_photo} alt={auther_name} />
        <h4 className="text-gray-600 font-medium text-sm">{auther_name}</h4>
      </div>
      <div>
        <h3 className="text-xl font-bold text-end">{price} Tk</h3>
        <h3 className="text-sm font-semibold text-gray-600">{Area}</h3>
      </div>
      </div>
      
     
      <Link to={`/servicedetails/${_id}`}>
      <button className="button   w-full">View Details</button>
      </Link> 
    </div>
  );
};

export default Service;
