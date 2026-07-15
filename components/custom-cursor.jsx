import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Target = where the mouse actually is
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    // Dot follows almost instantly, ring trails behind smoothly
    const dot = { x: mouse.x, y: mouse.y };
    const ring = { x: mouse.x, y: mouse.y };

    let rafId;

    const updateTarget = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const target = e.target;
      const isPointer =
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button";

      if (ringRef.current) {
        ringRef.current.classList.toggle("cursor-pointer", isPointer);
      }
    };

    // Linear interpolation -> smooth trailing motion
    const lerp = (start, end, amount) => start + (end - start) * amount;

    const render = () => {
      dot.x = lerp(dot.x, mouse.x, 0.35);
      dot.y = lerp(dot.y, mouse.y, 0.35);
      ring.x = lerp(ring.x, mouse.x, 0.18);
      ring.y = lerp(ring.y, mouse.y, 0.18);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", updateTarget);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", updateTarget);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
