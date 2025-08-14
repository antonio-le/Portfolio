import React from "react";
import AboutSVG from "../../assets/images/about.svg";
import "./About.scss";

const About = () => {
  return (
    <section
      className="app__about"
      id="about"
      data-aos="fade-right"
      data-aos-offset="230"
      data-aos-delay="450"
      data-aos-duration="1000"
      data-aos-easing="ease"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="app__about-container">
        <div className="app__about-container_text">
          <h2>About</h2>
          <p>
            {/* I am a self-taught developer. I learn by doing things. As a
            Front-End Developer, I translate UI/UX designs into successful,
            responsive websites that are fast, easy to use, and built with best
            practices. The main area of my expertise is front-end development.
            Next.js, React.js, TypeScript, and Tailwind CSS are my main stack.
            Most of my skills are heavily focused on different front-end
            technologies */}
            {/* Hello! My name is Antonio and I am a front end developer with a passion
            for creating visually stunning and intuitive websites. With a strong
            foundation in HTML, CSS, and JavaScript, I am able to bring designs
            to life and create user experiences that are both functional and
            enjoyable. In my previous roles, I have worked on a variety of
            projects ranging from small business websites to large e-commerce
            platforms. I have a keen eye for detail and am always seeking ways
            to improve the performance and functionality of a website. Outside
            of work, I enjoy staying up-to-date on the latest web development
            trends and techniques through online learning and attending industry
            events. I am always looking for new challenges and opportunities to
            expand my skillset. Thank you for considering me for your project. I
            am excited to bring my skills and expertise to your team and create
            something truly unique and impactful. */}
            Hello! My name is Antonio and I am a Full Stack Developer with a
            passion for creating visually stunning and intuitive websites. I
            have significant experience working in industries like healthcare,
            finance, and business intelligence. Proven expertise in JavaScript
            frameworks, backend integration. I am good at explaining complex
            technical ideas to business leaders and have a solid understanding
            of design, data structures, and algorithms. I’m always excited to
            take on new challenges that help me grow and stay up to date with
            the latest technologies.
          </p>

          <p>
            I spend my time learning on technology especially Full Stack and AI
            Development I consistently learn the concepts and tools behind and
            building projects around it.
          </p>

          <p>
            I'm currently work as a Full Stack Developer at{" "}
              Nexplay
          </p>
        </div>
        <div className="app__about-container_image">
          <img src={AboutSVG} alt="Programming" />
        </div>
      </div>
    </section>
  );
};

export default About;
