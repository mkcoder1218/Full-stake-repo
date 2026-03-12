import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';

export default function About() {
  const { data } = usePortfolio();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 blur-2xl rounded-full" />
            <img
              src={data.profile.avatarUrl}
              alt={data.profile.name}
              className="relative w-full max-w-md aspect-square object-cover rounded-3xl border-2 border-white dark:border-zinc-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-2">About Me</h2>
            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-6">
              Passionate about <span className="text-emerald-500">problem solving</span>.
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {data.profile.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <GraduationCap className="text-emerald-500 mb-4" size={24} />
              <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Education</h3>
              <p className="text-sm text-zinc-500">Computer Science Student</p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <Briefcase className="text-emerald-500 mb-4" size={24} />
              <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Experience</h3>
              <p className="text-sm text-zinc-500">Full-Stack Development</p>
            </div>
          </div>

          <div className="pt-4">
            <h3 className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white mb-4">
              <Heart className="text-red-500" size={20} />
              What I Love
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying a good cup of coffee while reading about software architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
