import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Code2, Sparkles, Rocket } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Home() {
  const { data } = usePortfolio();

  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-white dark:bg-zinc-950">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-0 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-zinc-500 dark:text-zinc-400 font-medium mb-4"
          >
            👋, my name is <span className="text-zinc-900 dark:text-white">{data.profile.name}</span> and I am a freelance
          </motion.p>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15vw] md:text-[12vw] leading-none flex flex-col md:flex-row items-center justify-center gap-[2vw]"
            >
              <span className="text-serif italic font-black text-zinc-900 dark:text-white lowercase tracking-tighter">Full</span>
              <span className="text-display text-emerald-500">Stack</span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15vw] md:text-[12vw] text-display text-outline text-zinc-900 dark:text-white -mt-[2vw] md:-mt-[4vw]"
            >
              & Developer
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-zinc-500 dark:text-zinc-400 font-medium mt-8"
          >
            based in Addis Ababa, Ethiopia.
          </motion.p>

          <div className="flex gap-4 mt-12">
            <Link
              to="/projects"
              className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-emerald-500 dark:hover:bg-emerald-500 dark:hover:text-white transition-all"
            >
              You need a full stack developer
            </Link>
            <Link
              to="/contact"
              className="border-2 border-zinc-900 dark:border-white text-zinc-900 dark:text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-20 opacity-30 grayscale dark:invert">
          {['Google', 'Meta', 'Amazon', 'Apple', 'Microsoft'].map((brand) => (
            <span key={brand} className="text-xl font-black tracking-tighter uppercase">{brand}</span>
          ))}
        </div>

        {/* Hero Image */}
        <div className="relative mt-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Mikeyas" 
              className="w-full h-auto grayscale contrast-125 dark:opacity-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-zinc-950 dark:via-zinc-950/20" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
