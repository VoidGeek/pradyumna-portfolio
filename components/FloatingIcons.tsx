"use client";
import { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai"; // Gmail icon
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon

const FloatingIcons = () => {
  useEffect(() => {
    const floatingIcons = document.querySelectorAll(".floating-icon");

    floatingIcons.forEach((icon, index) => {
      let xPos = 0;
      let yPos = 0;
      const jiggleForce = index === 0 ? 3 : 2; // Reduce jiggle force for the second icon
      const delay = index === 0 ? 0 : 200; // Add delay for the second icon

      const jiggle = () => {
        xPos += 0.05;
        yPos += 0.03;
        const x = Math.sin(xPos) * jiggleForce; // Horizontal jiggle
        const y = Math.cos(yPos) * jiggleForce; // Vertical jiggle
        (icon as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
        requestAnimationFrame(jiggle);
      };

      setTimeout(jiggle, delay);
    });
  }, []);

  return (
    <section
      id="contact"
      className="fixed bottom-8 right-8 flex flex-col gap-4"
    >
      {/* Gmail */}
      <a
        href="mailto:pradyumna.p.6969@gmail.com"
        className="floating-icon bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600"
      >
        <AiOutlineMail size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="linkedin://in/pradyumna-p-010038231"
        onClick={(e) => {
          if (!navigator.userAgent.match(/Android|iPhone|iPad/i)) {
            e.preventDefault();
            window.open(
              "https://www.linkedin.com/in/pradyumna-p-010038231/",
              "_blank"
            );
          }
        }}
        className="floating-icon bg-blue-400 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-500"
      >
        <FaLinkedin size={24} />
      </a>
    </section>
  );
};

export default FloatingIcons;
