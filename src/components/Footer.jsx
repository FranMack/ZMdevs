import logo from "../assets/images/zmDevsGradiente.png";
import { socialMedia } from "../assets/icons/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "../hooks/useTranslation";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="CFdev" />
      </div>

      <div className="footer-social-media">
        <div className="footer-social-media-content">
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

          <Link to="/privacy" className="footer-privacy-link">
            {t("footer.privacyPolicy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
