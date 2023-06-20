import React from "react";
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from"./AboutBox";

export const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section-title"> About me </h2>
      <div className="about__container grid">
        <img src={Image} alt="about image" className="about__img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I am lokraj thapa magar, web Developer from nepal ,pokhara i have
              a reach experience in web development and designing with
              experience of different programming language and also good at
              Wordpress.
            </p>

            <a href="" className="btn">
              {" "}
              Download CV{" "}
            </a>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number development">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage development"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">UI UX design</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage ui_design "></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">photography</h3>
                <span className="skills_number">60%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage photography"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
