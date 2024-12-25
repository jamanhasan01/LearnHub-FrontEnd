import { useContext } from "react";
import PopularService from "../components/PopularService";
import Slider from "../components/Slider";
import { authContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Tabs from "../components/Tabs";
import About from "../components/About";

const Home = () => {
  let { loading } = useContext(authContext);

  return (
    <div>
      <Helmet>
        <title>LearnHub || Home</title>
      </Helmet>
      <Slider></Slider>
      {loading ? <Loading></Loading> : <PopularService></PopularService>}
      <Tabs></Tabs>
      <About></About>
    </div>
  );
};

export default Home;
