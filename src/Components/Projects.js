import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function Project(props) {
  const [currProjIndex, setCurrProjInd] = useState(0);
  return (
    <motion.div className="projectContainer" exit={{ opacity: 0 }}>
      <AnimatePresence exitBeforeEnter>
        <IndividualProjects
          handler={setCurrProjInd}
          key={currProjIndex}
          ind={currProjIndex}
        />
      </AnimatePresence>
    </motion.div>
  );
}

function IndividualProjects(props) {
  const [exitAnimation, setExitAnimation] = useState("");
  function transitionLength(i) {
    return {
      transition: {
        duration: i,
      },
    };
  }
  const projectAnimations = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      ...transitionLength(1),
    },
    exitDown: {
      y: "100vh",
      opacity: 0,
      ...transitionLength(1),
    },
    exitUp: {
      y: "-100vh",
      opacity: 0,
      ...transitionLength(1),
    },
  };
  const projects = [
    {
      name: "Brain Tumor Segmentation",
      desc: "Coded the U-net from scratch in python to segment tumors from normal Brain MRI images.Dealt with class imbalance since the tumor mask had a lot of 0’s but under-represented 1’s, which made the U-net segment to all 0’s that still yielded a good accuracy with MSE loss function but the image segmented nothing. Employed weighted cross entropy to give the class 1 in tumor class more precedence than 0’s in the tumor mask.",
    },
    {
      name: "Multi-Class Regression Model",
      desc: "Implemented binary logistic regression model with sigmoid function that maps value between the range of 0 and 1. Used a threshold of 0.6 resulted in excellent accuracy. Hence, this was then used to make the model multi-class. Trained a number of logistic regressors, using one-vs-all concept, based on the number of classes existing on the dataset and, used the logistic regressor with the highest probability of 1. ",
    },
  ];
  const currRenderedProj = projects[props.ind];
  return (
    <motion.div
      key={props.ind}
      variants={projectAnimations}
      initial="hidden"
      animate="visible"
      className="projects"
      exit={exitAnimation}
    >
      {props.ind !== 0 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setExitAnimation("exitUp");
            props.handler(props.ind - 1);
          }}
        >
          Go Up
        </button>
      )}
      <h1>{currRenderedProj.name}</h1>
      <p>{currRenderedProj.desc}</p>
      {props.ind !== projects.length - 1 && (
        <button
          onClick={(e) => {
            e.preventDefault();
            setExitAnimation("exitDown");
            props.handler(props.ind + 1);
          }}
        >
          Go down
        </button>
      )}
    </motion.div>
  );
}

export default Project;
