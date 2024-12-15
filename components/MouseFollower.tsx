"use client";
import React, { useEffect, useRef } from "react";

const MouseFollower = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null); // Store the animation frame ID

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    // Check if the device is mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      dot.style.display = "none"; // Hide the dot on mobile devices
      return;
    }

    const mouse = { x: 0, y: 0 };
    const follower = { x: 0, y: 0 };
    const easingFactor = 0.05; // Slower movement for more relaxed feel
    const offset = -8; // Combine offsets into a single value

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const animate = () => {
      // Smooth interpolation
      follower.x += (mouse.x - follower.x) * easingFactor;
      follower.y += (mouse.y - follower.y) * easingFactor;

      // Apply transform only if there’s a visible change
      dot.style.transform = `translate(${follower.x + offset}px, ${
        follower.y + offset
      }px)`;

      // Store animation frame ID
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Add event listener and start animation
    window.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      // Cleanup: Remove listener and cancel animation frame
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
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
