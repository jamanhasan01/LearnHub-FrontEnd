import { useContext } from "react";
import PopularService from "../components/PopularService";
import Slider from "../components/Slider";
import { authContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const Home = () => {
  let { loading } = useContext(authContext);
  return (
    <div>
      <Slider></Slider>
      {loading ? <Loading></Loading> : <PopularService></PopularService>}
    </div>
  );
};

export default Home;
