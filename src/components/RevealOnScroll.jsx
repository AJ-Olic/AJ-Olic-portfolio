import { useRef, useEffect } from "react";

export const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Show everything immediately on page load
    const timer = setTimeout(() => {
      if (ref.current) {
        ref.current.classList.add("visible");
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};
