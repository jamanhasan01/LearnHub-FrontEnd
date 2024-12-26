
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaButtons = () => {
  const handleNavigation = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const buttons = [
    { id: 1, icon: <FaFacebook />, url: "https://www.facebook.com" },
    { id: 2, icon: <FaTwitter />, url: "https://www.twitter.com" },
    { id: 3, icon: <FaInstagram />, url: "https://www.instagram.com" },
    { id: 4, icon: <FaLinkedin />, url: "https://www.linkedin.com" },
  ];

  return (
    <div className="flex gap-4">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleNavigation(button.url)}
          className="text-gray-600 hover:text-blue-500 transition-colors text-2xl"
        >
          {button.icon}
        </button>
      ))}
    </div>
  );
};

export default SocialMediaButtons;
