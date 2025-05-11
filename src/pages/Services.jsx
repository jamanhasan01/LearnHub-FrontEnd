import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Service from "../components/Service";
import { authContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import NoService from "../components/NoService";

const Services = () => {
  const { setLoading, loading } = useContext(authContext);
  const [serviceData, setServiceData] = useState(null); // null = not loaded yet
  const [showMoreData, setShowMoreData] = useState(6);
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const filtered = serviceData.filter(service => 
      service.name.toLowerCase().includes(inputValue)
    );
    setSearchResults(filtered);
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('https://learn-hub-server-side.vercel.app/services');
        setServiceData(response.data);
        setSearchResults(response.data);
      } catch (err) {
        setError("Failed to load services. Please try again later.");
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  // Loading state
  if (loading) {
    return <Loading />;
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 text-xl">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="btn btn-primary mt-4"
        >
          Retry
        </button>
      </div>
    );
  }

  // No services found (after successful load)
  if (serviceData && serviceData.length === 0) {
    return <NoService />;
  }

  // Initial load (data not fetched yet)
  if (!serviceData) {
    return null; // or <Loading /> if you prefer
  }

  return (
    <div className="container mt-16">
      <h1 className="text-4xl text-center font-semibold mb-5">All Services</h1>
      
      {/* Search Input */}
      <div className="flex justify-center mb-10">
        <form onChange={handleSearch} className="w-full max-w-md">
          <input 
            type="text" 
            className="input input-bordered w-full" 
            placeholder="Search Service Name"
          />
        </form>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {(searchResults || serviceData)
          .slice(0, showMoreData)
          .map(service => (
            <Service key={service._id} service={service} />
          ))
        }
      </div>

      {/* View More Button */}
      {(searchResults || serviceData).length > showMoreData && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowMoreData(prev => prev + 6)}
            className="btn bg-black text-white px-8 py-3"
          >
            View More
          </button>
        </div>
      )}

      {/* No search results */}
      {searchResults && searchResults.length === 0 && (
        <div className="text-center py-10">
          <p className="text-xl">No services match your search</p>
        </div>
      )}
    </div>
  );
};

export default Services;