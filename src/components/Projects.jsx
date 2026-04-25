import { projectsData } from "../data/portfolioData";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "../components/ui/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scroll = (dir) => {
    trackRef.current.scrollBy({
      left: dir * 340,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="min-h-screen bg-gradient-to-b from-gray-950 to-black py-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Featured Projects
            </h2>
            <p className="text-white/60 mt-4">
              Real-world applications built with modern tech
            </p>
          </div>

          {/* Controls */}
          <div className="flex justify-end gap-3 mb-4">
            <button
              onClick={() => scroll(-1)}
              className="px-3 py-1 rounded-full bg-white/10 text-white"
            >
              ←
            </button>
            <button
              onClick={() => scroll(1)}
              className="px-3 py-1 rounded-full bg-white/10 text-white"
            >
              →
            </button>
          </div>

          {/* Horizontal Track */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-6"
          >
            {projectsData.map((project, i) => (
              <div
                key={project.id}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal (optional – same as before) */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-white/70">
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
