import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
const SidebarSocials = () => {
  return (
    <div className="flex justify-between px-5 py-4 border-y border-gray-600 ">
      <button>
        <FaInstagram
          size={30}
          className="xl:hover:text-primary transition duration-300 cursor-pointer"
        />
      </button>
      <button>
        <FaYoutube
          size={30}
          className="xl:hover:text-primary transition duration-300 cursor-pointer"
        />
      </button>
      <button>
        {" "}
        <FaDiscord
          size={30}
          className="xl:hover:text-primary transition duration-300 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default SidebarSocials;
