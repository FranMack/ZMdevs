import logo from "../assets/images/zmDevsGradiente.png";
import { socialMedia } from "../assets/icons/icons";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="CFdev" />
      </div>

      <div className="footer-social-media">
        <div className="footer-social-media-icons">
          {socialMedia.map((media,i) => {
            return  <Link to={media.link} target="_blank" key={i}>{media.icon}</Link>
          })}
        </div>

        <p
          className="footer-text"
          style={{
            color: "#E0E1E3",
          }}
        >{`Copyright © ${year} ZMdevs. All Rights Reserved `}</p>
      </div>
    </footer>
  );
}

export default Footer;
