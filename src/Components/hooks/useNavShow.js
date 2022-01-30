import { useState, useEffect } from "react";

function getWindowSize() {
  return { height: window.innerHeight, width: window.innerWidth };
}

export default function useNavShow() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function onResize() {
      console.log(getWindowSize());
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  });
  return windowSize.width <= 640 ? true : false;
}
