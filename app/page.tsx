"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
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
    <div className="min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col items-center text-center mb-16">
        <Image
          src="/profile.jpg" // Replace with your profile image
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold">Backend Developer Portfolio</h1>
        <p className="text-gray-600 mt-2">
          Hi, I’m a passionate backend developer with expertise in building
          scalable systems and APIs.
        </p>
      </header>

      <main className="space-y-16">
        {/* Skills Section */}
        <section id="skills" className="">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
              Node.js
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
              Express
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
              NestJS
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
              PostgreSQL
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
              MongoDB
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
              Redis
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
              Docker
            </li>
            <li className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
              GraphQL
            </li>
          </ul>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Project 1: API for E-Commerce
              </h3>
              <p className="text-gray-600">
                Built a scalable REST API for an e-commerce platform, supporting
                100,000+ daily requests.
              </p>
              <a
                href="#"
                className="text-blue-500 mt-2 block hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Project 2: Realtime Chat App
              </h3>
              <p className="text-gray-600">
                Developed a real-time chat application using WebSocket, Node.js,
                and Redis for messaging.
              </p>
              <a
                href="#"
                className="text-blue-500 mt-2 block hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="fixed bottom-8 right-8 flex flex-col gap-4"
        >
          {/* Gmail */}
          <a
            href="mailto:pradyumna.p.6969@gmail.com"
            className="floating-icon bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600"
          >
            <Image
              src="/gmail-icon.png"
              alt="Gmail Icon"
              width={24}
              height={24}
            />
          </a>

          {/* LinkedIn */}
          <a
            href="linkedin://in/pradyumna-p-010038231"
            onClick={(e) => {
              // Fallback for browsers or unsupported platforms
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
            <Image
              src="/linkedin-icon.png"
              alt="LinkedIn Icon"
              width={24}
              height={24}
            />
          </a>
        </section>
      </main>

      <footer className="mt-16 text-center text-gray-600">
        © {new Date().getFullYear()} Pradyumna P. All rights reserved.
      </footer>
    </div>
  );
}
