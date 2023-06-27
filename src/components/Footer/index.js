import React from "react";
import { Facebook, SportsFootball, LinkedIn } from "@mui/icons-material";
import '../Footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div>Website created by Kyle Mucerino</div>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/kyle.mucerino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
        <a
          href="https://www.europlayers.https://www.europlayers.com/ViewProfilePlayer.aspx?ProfileId=65718com/player/123456789"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SportsFootball />
        </a>
        <a
          href="https://www.linkedin.com/in/kyle-mucerino-95b112184/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
