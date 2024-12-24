import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const ServiceDetails = () => {
  let { setLoading } = useContext(authContext);
  let { id } = useParams();

  const [serviceData, setserviceData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/services/${id}`).then((res) => {
      let data = res.data;
      setserviceData(data);
      setLoading(false);
    });
  }, [serviceData]);
  let { photoUrl, name, description, auther_photo, auther_name, price, Area,auther_email } =
    serviceData;
    console.log(auther_email);
    

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

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-black text-white"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          {/* modal form for show input data */}
          <form action="">
           
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ServiceDetails;
