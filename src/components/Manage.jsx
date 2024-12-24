import { Link } from "react-router-dom";

const Manage = ({manage}) => {
    let {_id,photoUrl, name, description,price,Area} = manage;
  
    
    return (
      <div className="flex flex-col gap-2 p-3 border border-gray-200 rounded-xl">
        <img className="rounded-xl" src={photoUrl} alt={name} />
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-base text-gray-600">
          {description ? description.substring(0, 100) : "no description avealbe"}
        </p>
      
        <h4>{price}</h4>
       <p>{Area}</p>
        <div className="flex justify-between">
        <Link to={`/updateservice/${_id}`}>
        <button className="btn bg-black text-white">Update Action</button>
        </Link> 
        <button className="btn bg-red-700 text-white">
            Delete Action
        </button>
        </div>
      </div>
    );
}

export default Manage