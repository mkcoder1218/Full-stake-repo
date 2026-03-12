import { Github, Linkedin, Twitter, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

export default function Footer() {
  const { data } = usePortfolio();

  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-lg font-black tracking-tighter text-zinc-900 dark:text-white uppercase">
              {data.profile.name}<span className="text-emerald-500">.</span>
            </h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mt-1">
              Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-6">
            {data.socials.map((social) => {
              const Icon = social.platform === 'GitHub' ? Github : 
                           social.platform === 'LinkedIn' ? Linkedin : 
                           social.platform === 'Twitter' ? Twitter : Mail;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-emerald-500 transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
              © {new Date().getFullYear()} {data.profile.name}
            </p>
            <Link 
              to="/admin" 
              className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-zinc-300 dark:text-zinc-700 hover:text-emerald-500 transition-colors"
            >
              <Lock size={10} />
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
