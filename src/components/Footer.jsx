import logo from "../assets/images/logo1.png";
import { socialMedia } from "../assets/social_media/icons";

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
          {socialMedia.map((media) => {
            return <>{media.icon}</>;
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
