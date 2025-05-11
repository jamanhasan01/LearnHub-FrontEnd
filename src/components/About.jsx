import React from "react";
import { FaCode, FaLanguage, FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="container">
      <div className=" text-center">
        {/* Title Section */}
        <h2 className="text-4xl text-center font-semibold mb-10">About Us</h2>
   

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Programming Card */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaCode className="text-blue-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Programming</h3>
            <p className="text-gray-600 mt-2">
              Master coding skills with courses in web development, Python, Java, and more.
            </p>
          </div>

          {/* English Card */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaLanguage className="text-green-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">English</h3>
            <p className="text-gray-600 mt-2">
              Enhance your fluency in English through grammar, writing, and speaking courses.
            </p>
          </div>

          {/* Bangla Card */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <FaPenNib className="text-red-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Bangla</h3>
            <p className="text-gray-600 mt-2">
              Learn Bangla, improve your reading and writing, or explore Bangla literature.
            </p>
          </div>
        </div>
        <Link to={'/services'}>
        <button className="btn bg-black text-white mt-10">Show Services</button></Link>
      </div>
    </section>
  );
};

export default About;
