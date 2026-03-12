import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { Code2, Layout, Settings, Terminal } from 'lucide-react';

export default function Skills() {
  const { data } = usePortfolio();

  const categories = [
    { name: 'Language', icon: Terminal, color: 'text-blue-500' },
    { name: 'Framework', icon: Layout, color: 'text-emerald-500' },
    { name: 'Tool', icon: Settings, color: 'text-purple-500' },
    { name: 'Other', icon: Code2, color: 'text-orange-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">My Arsenal</h2>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white">
          Skills & <span className="text-emerald-500">Technologies</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => {
          const catSkills = data.skills.filter(s => s.category === cat.name);
          if (catSkills.length === 0) return null;

          return (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm"
            >
              <div className={`w-12 h-12 bg-zinc-50 dark:bg-zinc-800 rounded-2xl flex items-center justify-center ${cat.color} mb-6`}>
                <cat.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                {cat.name}s
              </h3>
              <div className="flex flex-wrap gap-3">
                {catSkills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded-xl text-sm font-medium border border-zinc-100 dark:border-zinc-800 hover:border-emerald-500/50 transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
