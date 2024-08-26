import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#ffffff", "#f0f0f0", "#d0d0d0"], // Different shades of white and grey
          },
          shape: {
            type: "circle", // You can use "circle", "square", "triangle", etc.
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 0.1,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none", // Set to "none" to allow free movement
            random: true,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 1, // Adjust duration for a smoother delay effect
              speed: 1,    // Adjust speed for how quickly particles follow the cursor
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
