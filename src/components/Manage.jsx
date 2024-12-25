import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Manage = ({manage}) => {
    let {_id,photoUrl, name, description,price,Area} = manage;
 
    
    let handleDelete=(id)=>{
        axios.delete(`http://localhost:5000/services/${id}`)
        .then(res=>{
            let data=res.data
            if (data.deletedCount) {
                toast('Data has been deleted')
               
            }
        })
    }
    
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
        <button onClick={()=>handleDelete(_id)} className="btn bg-red-700 text-white">
            Delete Action
        </button>
        </div>
      </div>
    );
}

export default Manage