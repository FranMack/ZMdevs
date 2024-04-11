import { AiOutlineMail } from "react-icons/ai";
import { BsXLg } from "react-icons/bs";
import { FaLinkedinIn,FaInstagram,FaWhatsapp,FaBars } from "react-icons/fa";
import { IoIosArrowBack,IoIosArrowForward,IoMdArrowDropleftCircle,IoMdArrowDroprightCircle  } from "react-icons/io";


const email=(<AiOutlineMail title="Email" />)
const phone=(<FaWhatsapp title="Phone"/>)
const linkedin=(<FaLinkedinIn title="Linkedin" />)
const instagram=(<FaInstagram title="Instagram"/>)


export const socialMedia=[
    {icon:email,link:"mailto:franmack556@gmail.com",text:"cfDev@gmail.com"},
    {icon:phone,link:"https://www.instagram.com/nuggets/",text:"+54-9342-4564569"},
    {icon:linkedin,link:"https://www.instagram.com/nuggets/",text:"cdDevs.linkedin"},
    {icon:instagram,link:"https://www.instagram.com/nuggets/",text:"cfDevs"},
]


const arrowLeft=(<IoIosArrowBack />)
const arrowRight=(<IoIosArrowForward />)
const circleArrowsLeft=(<IoMdArrowDropleftCircle />)
const circleArrowsRight=(<IoMdArrowDroprightCircle />)

export const arrows={
    left:arrowLeft,
    right:arrowRight
}

export const circleArrows={
    left:circleArrowsLeft,
    right:circleArrowsRight
} 


export const HamburguerMenu=({handleShowMobileMenu})=>{
return(<FaBars onClick={handleShowMobileMenu} style={{marginRight:"5%"}}/>)}

export const ExitIcon=({handleShowMobileMenu})=>{
    return(<BsXLg onClick={handleShowMobileMenu} style={{marginLeft:"5%"}}/>)}

