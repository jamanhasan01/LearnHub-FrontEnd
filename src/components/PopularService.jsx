import { useContext, useEffect, useState } from "react";
import Service from "./Service";
import axios from "axios";
import { Link } from "react-router-dom";
import { authContext } from "../provider/AuthProvider";

const PopularService = () => {
  const [serviceData, setserviceData] = useState([]);
  let { setLoading ,loading} = useContext(authContext);
  
  useEffect(() => {
    axios.get("http://localhost:5000/services").then((res) => {
      let data = res.data;
      setLoading(true)
      setserviceData(data);
      setLoading(false);
    });
  }, [loading]);

  console.log(loading);
  
  return (
    <div>
     
        <div>
          <h1 className="text-4xl text-center font-semibold mb-10">
            Popular Service
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceData.slice(0,6).map((service) => (
              <Service key={service._id} service={service}></Service>
            ))}
          </div>
          <div className="w-full mt-10 text-center">
            <Link
              to={"/services"}
              className="btn text-center bg-black text-white"
            >
              Show All
            </Link>
          </div>
        </div>
      
    </div>
  );
};

export default PopularService;
