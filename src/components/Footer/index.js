import React from "react";
import { Facebook, SportsFootball, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer>
      <div>Website created by Kyle Mucerino</div>
      <div>
        <a href="https://www.facebook.com/kyle.mucerino">
          <Facebook />
        </a>
        <a href="https://www.europlayers.https://www.europlayers.com/ViewProfilePlayer.aspx?ProfileId=65718com/player/123456789">
          <SportsFootball />
        </a>
        <a href="https://www.linkedin.com/in/kyle-mucerino-95b112184/">
          <LinkedIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
