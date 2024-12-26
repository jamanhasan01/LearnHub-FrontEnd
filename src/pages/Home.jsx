import { useContext } from "react";
import { motion } from "framer-motion"; 
import PopularService from "../components/PopularService";
import Slider from "../components/Slider";
import { authContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
import Tabs from "../components/Tabs";
import About from "../components/About";

const animationVariants = {
  hidden: { opacity: 0, y: 100 }, 
  visible: { opacity: 1, y: 0 },  
};

const Home = () => {
  const { loading } = useContext(authContext);

  return (
    <div>
      <Helmet>
        <title>LearnHub || Home</title>
      </Helmet>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={animationVariants}
      >
        <Slider />
      </motion.div>


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow repeating animations
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={animationVariants}
      >
        {loading ? <Loading /> : <PopularService />}
      </motion.div>


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow repeating animations
        transition={{ duration: 0.8, delay: 0.4 }}
        variants={animationVariants}
      >
        <Tabs />
      </motion.div>

  
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} 
        transition={{ duration: 0.8, delay: 0.6 }}
        variants={animationVariants}
      >
        <About />
      </motion.div>
    </div>
  );
};

export default Home;
