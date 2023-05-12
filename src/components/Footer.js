import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Footer.css";

function Footer() {
  let date = new Date();

  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.instagram.com/yasir_49/">
          <InstagramIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/mohammed-yasir-ba37a71b9">
          <LinkedInIcon />
        </Link>

        <Link to="https://github.com/Yasir-07">
          <GitHubIcon />
        </Link>
      </div>
      <p>&copy; {date.getFullYear()} Mohammed Yasir</p>
    </div>
  );
}

export default Footer;
