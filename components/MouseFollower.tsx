"use client";
import React, { useEffect, useRef } from "react";

const MouseFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const mouse = { x: 0, y: 0 };
    const follower = { x: 0, y: 0 };
    const easingFactor = 0.05; // Reduced value for slower movement
    const verticalOffset = -8; // Move the dot slightly above the cursor
    const horizontalOffset = -8; // Move the dot slightly to the left of the cursor

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      // Smoothly interpolate the follower's position towards the cursor
      follower.x += (mouse.x - follower.x) * easingFactor;
      follower.y += (mouse.y - follower.y) * easingFactor;

      // Apply the calculated position to the dot
      dot.style.transform = `translate(${follower.x + horizontalOffset}px, ${
        follower.y + verticalOffset
      }px)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-50 shadow-md"
    />
  );
};

export default MouseFollower;
