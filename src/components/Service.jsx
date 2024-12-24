import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const Service = ({ service }) => {
  let {_id, photoUrl, name, description, auther_photo, auther_name } = service;
  
    
  return (
    <div className="flex flex-col gap-2 p-3 border border-gray-200 rounded-xl">
      <img className="rounded-xl" src={photoUrl} alt={name} />
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-base text-gray-600">
        {description ? description.substring(0, 100) : "no description avealbe"}
      </p>
      <div className="flex gap-2 items-center "> 
        <img className="max-w-10 rounded-badge border border-gray-300 p-[2px]" src={auther_photo} alt={auther_name} />
        <h4 className="text-gray-600 font-medium">{auther_name}</h4>
      </div>
     
      <Link to={`/servicedetails/${_id}`}>
      <button className="btn bg-black text-white">View Details</button>
</Link> 
    </div>
  );
};

export default Service;
