import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className=" group relative min-w-[320px] max-w-[320px] snap-center cursor-pointer"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition" />

      {/* Card */}
      <div className=" mt-5 relative rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 h-full transition-transform group-hover:-translate-y-2">
        {/* Image */}
        <div className="h-40 w-full rounded-xl overflow-hidden mb-4 bg-black/20">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-contain"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white mb-1">
          {project.title}
        </h3>

        <p className="text-cyan-400 text-sm mb-3">
          {project.subtitle}
        </p>

        <p className="text-white/70 text-sm line-clamp-3 mb-4">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-full bg-white/10">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"
            >
              <ExternalLink size={14} />
              Live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-white/70 hover:text-white"
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
