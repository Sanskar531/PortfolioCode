import { motion } from "framer-motion";
import { useState } from "react";

function Project(props) {
  const [currProjIndex, setCurrProjInd] = useState(0);
  return (
    <IndividualProjects
      handler={setCurrProjInd}
      key={currProjIndex}
      ind={currProjIndex}
    />
  );
}

function IndividualProjects(props) {
  const projectAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: [0, 1],
    },
    exit: {
      opacity: [1, 0],
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
      className="projects"
      variants={projectAnimations}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      exit="exit"
    >
      {props.ind !== 0 && (
        <button
          onClick={(e) => {
            e.preventDefault();
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
