import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const { data } = usePortfolio();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">My Work</h2>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
          Featured <span className="text-emerald-500">Projects</span>
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          A selection of my favorite projects, ranging from web applications to mobile experiences and developer tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
