import { motion } from "framer-motion";

export default function NavMenu(props) {
  const miniNavAnimations = {
    initial: {
      opacity: 0,
      y: 5,
    },
    visible: (ind) => ({
      opacity: 1,
      y: 0,
      transition: { delay: ind / 10 },
    }),
    exit: (ind) => ({
      opacity: 0,
      y: 5,
      transition: { delay: ind / 15 },
    }),
  };
  function handler(e, redirect) {
    e.stopPropagation();
    props.exitHandler();
    if (redirect) {
      props.navigate(redirect);
    }
  }
  const links = [
    ...props.navLinks,
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sanskargauchan/" },
    { name: "Github", href: "https://github.com/Sanskar531" },
    {
      name: "Contact Me",
      eventHandler: (e) => {
        e.preventDefault();
        props.findHandler();
      },
    },
  ];
  return (
    <motion.div className="navMenu">
      {links.map((item, ind) => {
        return (
          <motion.a
            custom={ind}
            onClick={
              item.eventHandler
                ? (e) => item.eventHandler(e)
                : (e) => handler(e, item.redirect)
            }
            href={item.href && item.href}
            variants={miniNavAnimations}
            initial="initial"
            animate="visible"
            exit="exit"
            key={ind}
          >
            {item.name}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
