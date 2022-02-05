import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import brainTumorResults from "./assets/BrainTumorResults.png";
import MCLR from "./assets/MCLR.png";
import BackDrop from "./BackDrop";

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
        <div className="arrow">
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              props.handler(props.ind - 1);
            }}
            variants={SVGvariants}
            initial="hidden"
            animate="visible"
            whileTap="tap"
            whileHover="hover"
            exit="exit"
          >
            <svg
              width="8"
              height="60"
              viewBox="0 0 8 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64648 0.14645L4.35359 0.853557L4.35359 0.853555L3.64648 0.14645ZM0.464501 3.32843L-0.242606 2.62132L-0.242607 2.62132L0.464501 3.32843ZM4.35359 0.14645L3.64648 0.853555L3.64648 0.853557L4.35359 0.14645ZM7.53557 3.32843L8.24268 2.62132L8.24268 2.62132L7.53557 3.32843ZM6.82846 4.03554L7.53557 3.32843L7.53557 3.32843L6.82846 4.03554ZM4.50003 1.70711L5.20714 1L3.50003 -0.707102V1.70711H4.50003ZM4.50003 59.5V60.5H5.50003V59.5H4.50003ZM3.50003 59.5H2.50003V60.5H3.50003V59.5ZM3.50003 1.70711H4.50003V-0.707102L2.79293 1L3.50003 1.70711ZM1.17161 4.03554L0.464501 3.32843L0.4645 3.32843L1.17161 4.03554ZM2.93937 -0.560657L-0.242606 2.62132L1.17161 4.03554L4.35359 0.853557L2.93937 -0.560657ZM5.0607 -0.560655C4.47491 -1.14644 3.52516 -1.14644 2.93937 -0.560655L4.35359 0.853555C4.15833 1.04882 3.84174 1.04882 3.64648 0.853555L5.0607 -0.560655ZM8.24268 2.62132L5.06069 -0.560657L3.64648 0.853557L6.82846 4.03554L8.24268 2.62132ZM8.24268 4.74264C8.82846 4.15686 8.82846 3.20711 8.24268 2.62132L6.82846 4.03554C6.6332 3.84027 6.6332 3.52369 6.82846 3.32843L8.24268 4.74264ZM6.12135 4.74264C6.70714 5.32843 7.65689 5.32843 8.24268 4.74264L6.82846 3.32843C7.02372 3.13317 7.34031 3.13317 7.53557 3.32843L6.12135 4.74264ZM3.79293 2.41422L6.12135 4.74264L7.53557 3.32843L5.20714 1L3.79293 2.41422ZM5.50003 59.5L5.50003 1.70711H3.50003L3.50003 59.5H5.50003ZM3.50003 60.5H4.50003V58.5H3.50003V60.5ZM2.50003 1.70711L2.50003 59.5H4.50003L4.50003 1.70711H2.50003ZM1.87871 4.74264L4.20714 2.41422L2.79293 1L0.464501 3.32843L1.87871 4.74264ZM-0.242607 4.74264C0.34318 5.32843 1.29293 5.32843 1.87872 4.74264L0.4645 3.32843C0.659762 3.13317 0.976347 3.13317 1.17161 3.32843L-0.242607 4.74264ZM-0.242607 2.62132C-0.828392 3.20711 -0.828392 4.15686 -0.242607 4.74264L1.17161 3.32843C1.36687 3.52369 1.36687 3.84027 1.17161 4.03554L-0.242607 2.62132Z"
                fill="white"
              />
            </svg>
          </motion.button>
        </div>
      ) : (
        <div className="emptySpace">&nbsp;</div>
      )}
      {props.children}
      {props.ind !== props.projects.length - 1 ? (
        <div className="arrow">
          <motion.button
            onClick={(e) => {
              e.preventDefault();
              props.handler(props.ind + 1);
            }}
            variants={SVGvariants}
            initial="hidden"
            animate="visible"
            whileTap="tap"
            whileHover="hover"
            exit="exit"
          >
            <svg
              width="8"
              height="60"
              viewBox="0 0 8 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35358 59.3535L3.64647 58.6464L3.64647 58.6464L4.35358 59.3535ZM7.53556 56.1716L8.24267 56.8787L8.24267 56.8787L7.53556 56.1716ZM3.64647 59.3535L4.35358 58.6464L4.35358 58.6464L3.64647 59.3535ZM0.464492 56.1716L-0.242616 56.8787L-0.242614 56.8787L0.464492 56.1716ZM1.1716 55.4645L0.464491 56.1716L0.464493 56.1716L1.1716 55.4645ZM3.50003 57.7929L2.79292 58.5L4.50003 60.2071V57.7929H3.50003ZM3.50003 0V-1L2.50003 -1V0L3.50003 0ZM4.50003 0L5.50003 0V-1L4.50003 -1V0ZM4.50003 57.7929H3.50003V60.2071L5.20713 58.5L4.50003 57.7929ZM6.82845 55.4645L7.53556 56.1716L7.53556 56.1716L6.82845 55.4645ZM5.06069 60.0607L8.24267 56.8787L6.82845 55.4645L3.64647 58.6464L5.06069 60.0607ZM2.93936 60.0607C3.52515 60.6464 4.4749 60.6464 5.06069 60.0607L3.64647 58.6464C3.84173 58.4512 4.15832 58.4512 4.35358 58.6464L2.93936 60.0607ZM-0.242614 56.8787L2.93937 60.0607L4.35358 58.6464L1.1716 55.4645L-0.242614 56.8787ZM-0.242616 54.7574C-0.828401 55.3431 -0.828401 56.2929 -0.242616 56.8787L1.1716 55.4645C1.36686 55.6597 1.36686 55.9763 1.1716 56.1716L-0.242616 54.7574ZM1.87871 54.7574C1.29292 54.1716 0.343171 54.1716 -0.242616 54.7574L1.1716 56.1716C0.976338 56.3668 0.659754 56.3668 0.464491 56.1716L1.87871 54.7574ZM4.20713 57.0858L1.87871 54.7574L0.464493 56.1716L2.79292 58.5L4.20713 57.0858ZM2.50003 0L2.50003 57.7929H4.50003L4.50003 0L2.50003 0ZM4.50003 -1H3.50003V1H4.50003V-1ZM5.50003 57.7929L5.50003 0L3.50003 0L3.50003 57.7929H5.50003ZM6.12135 54.7574L3.79292 57.0858L5.20713 58.5L7.53556 56.1716L6.12135 54.7574ZM8.24267 54.7574C7.65688 54.1716 6.70713 54.1716 6.12135 54.7574L7.53556 56.1716C7.3403 56.3668 7.02371 56.3668 6.82845 56.1716L8.24267 54.7574ZM8.24267 56.8787C8.82845 56.2929 8.82845 55.3431 8.24267 54.7574L6.82845 56.1716C6.63319 55.9763 6.63319 55.6597 6.82845 55.4645L8.24267 56.8787Z"
                fill="white"
              />
            </svg>
          </motion.button>
        </div>
      ) : (
        <div className="emptySpace">&nbsp;</div>
      )}
    </div>
  );
}

function MobileProjects(props) {
  const [showImage, setShowImage] = useState(false);
  return (
    <motion.div
      className="mobileProj"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        whileHover={{ scale: 1.05, color: "#9575CD" }}
        whileTap={{ scale: 0.95 }}
      >
        <a href={props.currRenderedProj.link}>
          <h1>{props.currRenderedProj.name}</h1>
        </a>
      </motion.div>
      <div>
        {props.currRenderedProj.desc}
        <div>
          <motion.button
            initial={false}
            whileHover={{ scale: 1.1 }}
            whileTap={{ y: 2, scale: 0.9 }}
            onClick={(e) => setShowImage(true)}
          >
            View Example
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showImage ? (
          <BackDrop
            children={
              <img
                id="smallProj"
                src={props.currRenderedProj.img}
                alt={props.currRenderedProj.name}
              />
            }
            exitHandler={() => setShowImage(false)}
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
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
            <motion.div
              key={props.ind}
              variants={projectAnimations}
              initial="hidden"
              animate="animate"
              exit="exit"
              className="MonitorView"
            >
              <img src={currRenderedProj.img} alt={currRenderedProj.name} />
              <div>
                <motion.div whileHover={{ color: "#9575CD", y: -10 }}>
                  <h1>
                    <a
                      rel="noreferrer noopener"
                      target="_blank"
                      href={currRenderedProj.link}
                    >
                      {currRenderedProj.name}
                    </a>
                  </h1>
                </motion.div>
                <p>{currRenderedProj.desc}</p>
              </div>
            </motion.div>
          ) : (
            <MobileProjects
              handler={props.handler}
              currRenderedProj={currRenderedProj}
              ind={props.ind}
            />
          )
        }
      />
    </>
  );
}

export default Project;
