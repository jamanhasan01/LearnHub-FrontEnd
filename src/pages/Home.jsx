import { useContext } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import PopularService from "../components/PopularService";
import Slider from "../components/Slider";
import { authContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Helmet } from "react-helmet-async";
import Tabs from "../components/Tabs";
import About from "../components/About";

const animationVariants = {
  hidden: { opacity: 0, y: 100 }, // Start off-screen
  visible: { opacity: 1, y: 0 },  // Smoothly appear and slide up
};

const Home = () => {
  const { loading } = useContext(authContext);

  return (
    <div>
      <Helmet>
        <title>LearnHub || Home</title>
      </Helmet>

      {/* Animated Slider */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow repeating animations
        transition={{ duration: 0.8 }}
        variants={animationVariants}
      >
        <Slider />
      </motion.div>

      {/* Animated PopularService */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow repeating animations
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={animationVariants}
      >
        {loading ? <Loading /> : <PopularService />}
      </motion.div>

      {/* Animated Tabs */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow repeating animations
        transition={{ duration: 0.8, delay: 0.4 }}
        variants={animationVariants}
      >
        <Tabs />
      </motion.div>

      {/* Animated About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }} // Allow repeating animations
        transition={{ duration: 0.8, delay: 0.6 }}
        variants={animationVariants}
      >
        <About />
      </motion.div>
    </div>
  );
};

export default Home;
