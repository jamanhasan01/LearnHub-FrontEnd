import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Manage = ({ manage }) => {
  const { _id, photoUrl, name, description, price } = manage;

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete you service!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axios.delete(`https://learn-hub-server-side.vercel.app/services/${id}`, {
          withCredentials: true,
        });

        if (data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Service has been deleted.",
            icon: "success",
          });
         
        } else {
          toast.error("Failed to delete the data.");
        }
      } catch (error) {
        toast.error("Error deleting data. Please try again.");
        console.error("Delete error:", error);
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 p-3 border border-gray-200 rounded-xl">
      <img
        className="rounded-xl max-h-[200px] object-cover"
        src={photoUrl}
        alt={name}
      />
      <h3 className="text-2xl font-bold">Name: {name}</h3>
      <p className="text-base text-gray-600">
        {description ? description.substring(0, 100) : "No description available"}
      </p>
      <h4 className="text-lg font-semibold">Price: {price}</h4>
      <div className="flex justify-between">
        <Link to={`/updateservice/${_id}`}>
          <button className="btn bg-black text-white">Update Action</button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-700 text-white"
        >
          Delete Action
        </button>
      </div>
    </div>
  );
};

export default Manage;
