import { Link } from 'react-router-dom';
import logo from '../assets/learnhub.png'
import SocialMediaButtons from '../components/SocialMediaButtons';
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <footer className="footer footer-center container  rounded p-10">
      <Link className="btn btn-ghost text-xl"><img className=" max-w-10" src={logo} alt="learnhub" /><span className="md:block hidden">LearnHub</span></Link>
   
        <nav>
          <div className="grid grid-flow-col gap-4 mt-3">
          <SocialMediaButtons></SocialMediaButtons>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
