import "./App.scss";
import { useState } from "react";

import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import Section from "./components/Section/Section";
import Project from "./components/Project/Project";
import Feature from "./components/Feature/Feature";
import Motivate from "./components/Motivate/Motivate";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import JokePopUp from "./components/JokePopUp/JokePopUp";
import MotivateExpanded from "./components/MotivateExpanded/MotivateExpanded";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinBeamSweat,
  faFaceGrinBeam,
  faFaceSmileBeam,
} from "@fortawesome/free-solid-svg-icons";

import portfolio1 from "./img/portfolio1.png";
import portfolio2 from "./img/portfolio2.png";
import portfolio3 from "./img/portfolio3.png";
import htmlCssJsImg from "./img/HTMLJSCSS2.png";
import reactImg from "./img/React-icon.png";
import nodeImg from "./img/Node.js_logo.png";
import jiraImg from "./img/Jira.png";
import gitImg from "./img/Git-logo5.png";
import tsImg from "./img/typescript-def.png";
function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showMotivate1PopUp, setShowMotivate1PopUp] = useState(false);
  const [showMotivate2PopUp, setShowMotivate2PopUp] = useState(false);
  const [showMotivate3PopUp, setShowMotivate3PopUp] = useState(false);
  const handlePHPROnClick = () => {
    setShowPopUp(true);
  };
  const handleMotivatePopUp1 = () => {
    setShowMotivate1PopUp(true);
  };
  const handleMotivatePopUp2 = () => {
    setShowMotivate2PopUp(true);
  };
  const handleMotivatePopUp3 = () => {
    setShowMotivate3PopUp(true);
  };
  return (
    <div className="App">
      <Header />
      <Section title={"about code reading"}>
        <p className="intro">
          When you trying to look at the code you wrote a month ago<br></br>
          <Button handleOnClick={handlePHPROnClick}>check</Button>
        </p>
      </Section>
      <Section title={"about me"} wider={true}>
        <div className="aboutMeParagraph">
          <p className="description">
            I completed my studies at Silesian University of Technology,
            achieving a bachelor's degree in Mining and Geology, and a master's
            degree in Automation and Robotics. Following that, I gained two
            years of experience as an automation engineer at Mecalux, working on
            projects during business trips. While the job was fascinating, I
            also delved into web development during my spare time. The
            possibility of remote work and my keen interest in creating web
            applications motivated me to explore a career change.
          </p>
        </div>
      </Section>
      <Section title={"What I did"}>
        <Project title={"My third website"} img={portfolio1}>
          <p className="description">
            This is my third website which is still in progress. I use react,
            node.js and mongoDB. I style it using mainly flexbox method and
            position property. This website provides the opportunity to find
            tutors, considering various filtering criteria for search. It also
            allows users to register on the platform transfering data to
            database. For authentication tokens are used. Currently, I am
            working on the user authentication on the back-end to achieve
            separate endpoints for tutors and students.
          </p>
        </Project>
        <Project title={"My second website"} img={portfolio2}>
          <p className="description">
            The second website was also a project from my brother's Kodilla
            course. Similar to before, I chose to develop this website using
            React, flexbox, and the position property. It is a front-end project
            that relies on straightforward computations and data transfer among
            various component levels.
          </p>
        </Project>
        <Project title={"My first website"} img={portfolio3}>
          <p className="description">
            I was inspired by my brother's Kodilla bootcamp course. But I did
            this first simple website using react, flex-box method and using
            position property to arrange elements. Each website I try to style
            by mobile first approach. I test the application on desktop & moto
            g52 smartphone.
          </p>
        </Project>
      </Section>
      <Section title={"I create website using"} wider={true} changeFlex={true}>
        <Feature title={"HTML CSS JS"} img={htmlCssJsImg}>
          <p className="description">
            <strong>HTML</strong> - I use and understand semantics of HTML5
            standard. <strong>CSS</strong> - I try to work with flexbox method
            as often as possible, but i did learn about other methods such as
            grid and old ones. I also use preprocessor Sass.
            <strong> JS</strong> - I know the basics of JavaScript.
          </p>
        </Feature>
        <Feature title={"React"} img={reactImg}>
          <p className="description">
            I developed ability to use <strong>React</strong> library especially
            using hooks such as useState, useEffect, useContext, useHistory.
            because it simplifies and makes code organization, provides
            reusability and better performance.
          </p>
        </Feature>
        <Feature title={"Node.js"} img={nodeImg}>
          <p className="description">
            Because I was studying Java and Python I did not learn much about
            <strong> Node.js</strong> nevertheless I know this tool and I did
            use it on my projects.
          </p>
        </Feature>
        <Feature title={"Jira"} img={jiraImg}>
          <p className="description">
            I learn Scrum by using <strong>Jira</strong> tool, nevertheless I
            was not cooperate with team members in real project so my knowledge
            about Scrum is basic.
          </p>
        </Feature>
        <Feature title={"Git"} img={gitImg}>
          <p className="description">
            To be honest <strong>Git</strong> has only helped me with file
            sharing so far, but I believe in the usefulness of this environment.
          </p>
        </Feature>
        <Feature title={"Typescript"} img={tsImg}>
          <p className="description">Still in progress to get the basics.</p>
        </Feature>
      </Section>
      <Section title={"What motivate me"} changeFlex={true}>
        {(() => {
          switch (true) {
            case showMotivate1PopUp:
              return (
                <div className="wrapper2">
                  <div className="motivateWrapper2">
                    <MotivateExpanded
                      setShowMotivate1PopUp={setShowMotivate1PopUp}
                      goodCompany={true}
                    >
                      <p>
                        Good company is one of the most valuable thing which
                        motivates me to work.
                      </p>
                      <p>
                        A good company has impact on good atmosphere of mine,
                        support and understanding & personal growth.
                      </p>
                      <FontAwesomeIcon icon={faFaceSmileBeam} />
                    </MotivateExpanded>
                  </div>
                </div>
              );
            case showMotivate2PopUp:
              return (
                <div className="wrapper2">
                  <div className="motivateWrapper2">
                    <MotivateExpanded
                      setShowMotivate2PopUp={setShowMotivate2PopUp}
                      visibleResults={true}
                    >
                      <p>
                        In my case when I see results of my work I get extra
                        boost to work even harder.
                      </p>
                      <FontAwesomeIcon icon={faFaceGrinBeamSweat} />
                    </MotivateExpanded>
                  </div>
                </div>
              );
            case showMotivate3PopUp:
              return (
                <div className="wrapper2">
                  <div className="motivateWrapper2">
                    <MotivateExpanded
                      setShowMotivate3PopUp={setShowMotivate3PopUp}
                      workFromAnywhere={true}
                    >
                      <p>
                        Because I would love to travel & work from any place in
                        the world.
                      </p>
                      <FontAwesomeIcon icon={faFaceGrinBeam} />
                    </MotivateExpanded>
                  </div>
                </div>
              );
            default:
              return (
                <div className="wrapper">
                  <div className="motivateWrapper">
                    <Motivate
                      btn={"See details"}
                      goodCompany={true}
                      handleMotivatePopUp={handleMotivatePopUp1}
                    >
                      Good company
                    </Motivate>
                  </div>
                  <div className="motivateWrapper">
                    <Motivate
                      btn={"See details"}
                      visibleResults={true}
                      handleMotivatePopUp={handleMotivatePopUp2}
                    >
                      Visible results of my hard work
                    </Motivate>
                  </div>
                  <div className="motivateWrapper">
                    <Motivate
                      btn={"See details"}
                      workFromAnywhere={true}
                      handleMotivatePopUp={handleMotivatePopUp3}
                    >
                      Possibility to work from anywhere
                    </Motivate>
                  </div>
                </div>
              );
          }
        })()}
      </Section>
      <Section title={"Contact"} darkTitle={true} wider={true} bgcd={true}>
        <Contact />
      </Section>
      <Footer />
      {showPopUp && <JokePopUp setShowPopUp={setShowPopUp} />}
    </div>
  );
}

export default App;
