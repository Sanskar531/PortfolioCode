import { motion } from "framer-motion";
import AnimatedLinks from "./AnimatedLinks";

export default function SocialLinks(props) {
  return (
    <motion.div>
      {props.socialLinks.map((item, ind) => (
        <AnimatedLinks
          key={ind}
          href={item.href}
          children={<img src={item.src} alt={item.name} />}
        />
      ))}
    </motion.div>
  );
}
