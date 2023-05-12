import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi! I am Mohammed Yasir</h2>
        <div className="motto">
          <p>
            I am Software Developer with a passion for learning and developing
            eye-catching websites.
          </p>
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
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML5, CSS, NPM, Bootstrap, Material UI</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, RestApi, MySQL, MongoDB, SQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C, C++, Java</span>
          </li>
          <li className="item">
            <h2>Others</h2>
            <span>Git, Github, Heroku, OOPs, Data Structures and Algo</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
