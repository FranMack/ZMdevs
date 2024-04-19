import { AiOutlineMail } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { FaBars, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

const email = <AiOutlineMail title="Email" />;
const phone = <FaWhatsapp title="Phone" />;
const linkedin = <FaLinkedinIn title="Linkedin" />;
const instagram = <FaInstagram title="Instagram" />;

export const socialMedia = [
  { icon: email, link: "mailto:info@zmdevs.com", text: "info@zmdevs.com" },
  {
    icon: phone,
    link: "https://wa.me/5493425906598",
    text: "+54-93425906598",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/czaburlin/",
    text: "zmdevs.linkedin",
  },
  {
    icon: instagram,
    link: "https://www.instagram.com/zmdevs/",
    text: "ZMDevs",
  },
];

const arrowLeft = <IoIosArrowBack />;
const arrowRight = <IoIosArrowForward />;
const circleArrowsLeft = <IoMdArrowDropleftCircle />;
const circleArrowsRight = <IoMdArrowDroprightCircle />;

export const arrows = {
  left: arrowLeft,
  right: arrowRight,
};

export const circleArrows = {
  left: circleArrowsLeft,
  right: circleArrowsRight,
};

export const HamburguerMenu = ({ handleShowMobileMenu }) => {
  return (
    <FaBars
      id="menu-hamburguesa-icon"
      onClick={handleShowMobileMenu}
      style={{ marginRight: "5%" }}
    />
  );
};

export const ExitIcon = ({ handleShowMobileMenu }) => {
  return (
    <BsXLg
      onClick={handleShowMobileMenu}
      style={{ marginLeft: "5%", marginTop: "5%" }}
    />
  );
};
