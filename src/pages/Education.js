import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

function Education() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2018 - 2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
            position="left"
          >
            <h3 className="vertical-timeline-element-title">
              Dayananda Sagar College of Engineering, Bangalore, Karnataka,
              India
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor's of Engineering in Information Science
            </h4>
            <p>Graduated with 8.92 CGPA</p>
            <p>
              <ul>
                <li>Programming Langauges</li>
                <li>Data Structures and Algorithms</li>
                <li>Database Management System</li>
                <li>Computer Fundamentals</li>
                <li>Management and Entrepreneurship</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimeline lineColor="#3e497a">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2016 - 2018"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<SchoolIcon />}
            position="right"
          >
            <h3 className="vertical-timeline-element-title">
              Shaheen PU College, Bangalore, Karnataka, India
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pre-University, HSC
            </h4>
            <p>Completed with 93.16%</p>
            <p>
              <ul>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
              </ul>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Josephs's High School, Chikkamagaluru, Karnataka, India
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            High School, SSLC
          </h4>
          <p>Completed with 97.12%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
