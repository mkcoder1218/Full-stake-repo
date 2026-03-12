import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-video overflow-hidden relative">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-zinc-900 hover:bg-emerald-500 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-zinc-900 hover:bg-emerald-500 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
