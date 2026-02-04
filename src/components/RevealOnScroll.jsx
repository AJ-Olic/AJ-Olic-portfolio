import { useRef, useEffect } from "react";

export const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Show everything immediately on page load
    if (ref.current) {
      setTimeout(() => {
        ref.current.classList.add("visible");
      }, delay);
    }
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};
