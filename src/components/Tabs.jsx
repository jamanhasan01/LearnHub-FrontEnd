import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Service from "./Service";
import NoService from "./NoService";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("english");
  const [cetagoryData, setcetagoryData] = useState([])

  const handleTabClick = (tab) => {
    setActiveTab(tab);

  };
  useEffect(()=>{
    axios.get(`https://learn-hub-server-side.vercel.app/${activeTab}`,)
    .then(res=>setcetagoryData(res.data)
    )
  },[activeTab])

  

  return (
    <div className="mt-20">
      <h1 className="text-4xl mb-10 font-semibold text-center">Category  Services</h1>
      {/* Tab headers */}
      <div role="tablist" className="tabs tabs-lifted ">
        <button
          onClick={() => handleTabClick("english")}
          className={`tab ${activeTab === "english" ? "tab-active !border-2 !border-b-0" : ""}`}
          role="tab"
          aria-selected={activeTab === "english"}
        >
          English
        </button>
        <button
          onClick={() => handleTabClick("bangla")}
          className={`tab ${activeTab === "bangla" ? "tab-active !border-2 !border-b-0" : ""}`}
          role="tab"
          aria-selected={activeTab === "bangla"}
        >
          Bangla
        </button>
        <button
          onClick={() => handleTabClick("programming")}
          className={`tab ${activeTab === "programming" ? "tab-active !border-2 !border-b-0" : ""}`}
          role="tab"
          aria-selected={activeTab === "programming"}
        >
          Programming
        </button>
      </div>

      {/* Tab content */}
      {cetagoryData.length>0?
      <div className="p-4 border border-gray-200 rounded-b-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cetagoryData.slice(0,6).map((service)=><Service key={service._id} service={service}></Service>)}
      </div>
      : <div className="py-20"><NoService></NoService></div>
      }
    </div>
  );
};

export default Tabs;
