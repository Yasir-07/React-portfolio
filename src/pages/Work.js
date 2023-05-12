import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";

function Work() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="01/09/2022 - 31/02/2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
          position="left"
        >
          <h3 className="vertical-timeline-element-title">
            Associate Developer - RPA
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tyson Foods India, Bangalore, Karnataka, India
          </h4>
          <p>
            <ul>
              <li>
                Opportunity to work as a part of the RPA team of the
                organization.
              </li>
              <li>
                Developed processes for the businesss processes and also for the
                internal processes of the organization.
              </li>
              <li>
                Primary Tools and Technologies: <i>Blueprism and Python</i>
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="11/04/2022 - 31/08/2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
          position="right"
        >
          <h3 className="vertical-timeline-element-title">
            Front-End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tyson Foods India, Bangalore, Karnataka, India
          </h4>
          <p>
            <ul>
              <li>Worked for the Full Stack Team of the organization.</li>
              <li>
                Built the dashboard for the ongoing project of the organization.
              </li>
              <li>Developed a new feature for the project on my own.</li>
              <li>
                Technologies used: <i>ReactJS, MySQL, Material UI</i>
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="01/03/2021 - 12/04/2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
          position="left"
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            The Fateinfo Technologies, Bangalore, Karnataka, India
          </h4>
          <p>
            <ul>
              <li>Built a chartered accountancy website from scratch.</li>
              <li>Developed the contact page of the website.</li>
              <li>
                Technologies used: <i>HTML, CSS, JavaScript</i>
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Work;
