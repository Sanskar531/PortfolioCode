import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import brainTumorResults from "../assets/BrainTumorResults.png";
import MCLR from "../assets/MCLR.png";
import Arrow from "./Arrow";
import MonitorProjectView from "./MonitorProjectView";
import MobileProjects from "./MobileProjectView";

function Project(props) {
  const [currProjIndex, setCurrProjInd] = useState(0);
  return (
    <motion.div className="projectContainer" exit={{ opacity: 0 }}>
      <AnimatePresence exitBeforeEnter>
        <IndividualProjects
          currDimension={props.currDimension}
          handler={setCurrProjInd}
          key={currProjIndex}
          ind={currProjIndex}
        />
      </AnimatePresence>
    </motion.div>
  );
}

function UpDown(props) {
  const SVGvariants = {
    hover: {
      scale: 1.2,
    },
    tap: {
      scale: 0.9,
    },
    hidden: {
      opacity: 1,
    },
    visible: {
      y: [5, -5, 5],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
      },
    },
    exit: {
      opacity: 0,
      y: 0,
    },
  };
  return (
    <div className="projects">
      {props.ind !== 0 ? (
        <Arrow
          Up={true}
          handler={props.handler}
          ind={props.ind}
          SVGvariants={SVGvariants}
        />
      ) : (
        <div className="emptySpace">&nbsp;</div>
      )}
      {props.children}
      {props.ind !== props.projects.length - 1 ? (
        <Arrow
          Up={false}
          handler={props.handler}
          ind={props.ind}
          SVGvariants={SVGvariants}
        />
      ) : (
        <div className="emptySpace">&nbsp;</div>
      )}
    </div>
  );
}

function IndividualProjects(props) {
  const projectAnimations = {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };
  const projects = [
    {
      name: "Brain Tumor Segmentation",
      desc:
        "Coded the U-net from scratch in python to segment tumors from normal Brain MRI images.Dealt with class imbalance since the tumor mask had a lot of 0’s but under-represented 1’s, which made the U-net segment to all 0’s that still yielded a good accuracy with MSE loss function but the image segmented nothing. Employed weighted cross entropy to give the class 1 in tumor class more precedence than 0’s in the tumor mask.",
      img: brainTumorResults,
      link: "https://github.com/Sanskar531/Brain-Tumor-Segmentation-using-Unet",
    },
    {
      name: "Multi-Class Regression Model",
      desc:
        "Implemented binary logistic regression model with sigmoid function that maps value between the range of 0 and 1. Used a threshold of 0.6 resulted in excellent accuracy. Hence, this was then used to make the model multi-class. Trained a number of logistic regressors, using one-vs-all concept, based on the number of classes existing on the dataset and, used the logistic regressor with the highest probability of 1. ",
      img: MCLR,
      link: "https://github.com/Sanskar531/Multi-Class-Logistic-Regression",
    },
  ];
  const currRenderedProj = projects[props.ind];
  return (
    <>
      <UpDown
        projects={projects}
        ind={props.ind}
        handler={props.handler}
        children={
          !props.currDimension ? (
            <MonitorProjectView
              currRenderedProj={currRenderedProj}
              ind={props.ind}
              projectAnimations={projectAnimations}
            />
          ) : (
            <MobileProjects
              currRenderedProj={currRenderedProj}
              ind={props.ind}
              projectAnimations={projectAnimations}
            />
          )
        }
      />
    </>
  );
}

export default Project;
