import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SOCIAL_URLS } from "../constants";

const Navbar = () => {
  return (
    <nav className="mb-20 flex item-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src = {logo} alt = "logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href= {SOCIAL_URLS.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href= {SOCIAL_URLS.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaGithub />
          </a>
          <a href= {SOCIAL_URLS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            <FaInstagram />
          </a>
            <FaTwitterSquare />
        </div>
    </nav>
  )
}

export default Navbar
