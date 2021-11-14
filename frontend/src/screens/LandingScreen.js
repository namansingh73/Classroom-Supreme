import React from "react";
import { motion } from "framer-motion";

const LandingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 0.6,
        type: "spring",
        damping: 36,
        stiffness: 200,
      }}
      classNameName="landingpage"
    >
      <div className="conatiner landingpage">
        <div className="row">
          <div className="col-lg-4" style={{ marginLeft: "-10vw" }}>
            <div className="md-5 Heading">
              <h2
                style={{
                  color: "#000080",
                  fontWeight: "bolder",
                  margin: "20px",
                  fontSize: "3rem",
                  fontWeight: 600,
                }}
              >
                Classroom Supreme
              </h2>
            </div>
            <div className="timeline-learning">
              <div className="line">
                <div className="line-content">
                  <div className="content">
                    <h1>Interactive Learning</h1>
                  </div>

                  <div className="content">
                    <h1>
                      Solve your doubts <br />
                      instantly
                    </h1>
                  </div>

                  <div className="content">
                    <h1>Get the peer-motivation</h1>
                  </div>

                  <div className="content">
                    <h1>Capture the class</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-lg-4 code-gif position-absolute  right-0 height-full home-codespaces-illo events-none">
            <img
              className="code-gif"
              src="https://github.githubassets.com/images/modules/site/home/codespaces-vscode-1.webp"
              alt="code"
            ></img>
          </div>
        </div>

        <div className="tech-stack container">
          <div className="row m-5">
            <div className="col m-2" style={{ width: "100%", height: "100%" }}>
              <h1>
                The Tech stack we used
                <br /> and simple technologies
              </h1>
            </div>
            <div className="col m-2" style={{ width: "50%", height: "100%" }}>
              <div className="flex-2 m-2">
                <div className="small card">
                  <div className="content">
                    <strong>ReactJS</strong>
                  </div>
                </div>
              </div>
              <div className="flex-2 m-2">
                <div className="small card">
                  <div className="content">
                    <strong>MongoDB</strong>
                  </div>
                </div>
                <div className="small card">
                  <div className="content">
                    <strong>ExpressJS</strong>
                  </div>
                </div>
              </div>
              <div className="flex-2 m-2">
                <div className="small card">
                  <div className="content">
                    <strong>NodeJS</strong>
                  </div>
                </div>
                <div className="small card">
                  <div className="content">
                    <strong>Python</strong>
                  </div>
                </div>
                <div className="small card">
                  <div className="content">
                    <strong>Heroku</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner">
          <div className=" play-card row">
            <div className="cardLearning card--dark col-4">
              <h2 className="card__title">INTERACTIVE CLASSROOM !</h2>
              <p className="card__body">
                Providing students with live classroom and a common platform to
                share their ideas and discuss doubts with teachers and peers.
                This will provide the most real experience possible.
              </p>
            </div>

            <div className="cardLearning card--dark col-4">
              <h2 className="card__title">STUDY WITH TUTORIALS !</h2>
              <p className="card__body">
                For students having temporary internet issues, tutorials section
                contains detailed videos with explanation of all topics. These
                tutorials can be watched anywhere, anytime.
              </p>
            </div>

            <div className="cardLearning card--dark col-4">
              <h2 className="card__title">
                YOUR LEARNING MATTERS, NOT YOUR INTERNET SPEED !
              </h2>
              <p className="card__body">
                Our platform provides a feature of capturing whiteboard in a
                live class. This image is further compressed so that it can be
                sent easily using minimal intenet usage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingScreen;
