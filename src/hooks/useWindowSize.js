import { useEffect, useState } from "react";

export function useWindowSize(props) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      console.log("Window Size is greater than 769 pixels")
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      console.log("Window Size is less than 769 pixels")
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return {isDesktop: isDesktop, isMobile: isMobile}
}