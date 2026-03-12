import { usePortfolio } from '../../context/PortfolioContext';
import { Briefcase, Wrench, Share2, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function AdminDashboard() {
  const { data } = usePortfolio();

  const stats = [
    { name: 'Total Projects', value: data.projects.length, icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'Skills Listed', value: data.skills.length, icon: Wrench, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { name: 'Social Links', value: data.socials.length, icon: Share2, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { name: 'Profile Views', value: '1,284', icon: Eye, color: 'text-orange-500', bg: 'bg-orange-500/10' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back, {data.profile.name.split(' ')[0]}!</h1>
        <p className="text-zinc-500 mt-1">Here's what's happening with your portfolio.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-zinc-900 border border-zinc-800 rounded-3xl"
          >
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
              <stat.icon size={24} />
            </div>
            <p className="text-sm font-medium text-zinc-500">{stat.name}</p>
            <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Projects */}
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl">
          <h3 className="text-xl font-bold text-white mb-6">Recent Projects</h3>
          <div className="space-y-4">
            {data.projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center gap-4 p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700/50">
                <img src={project.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-white">{project.title}</h4>
                  <p className="text-xs text-zinc-500">{project.techStack.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Summary */}
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl">
          <h3 className="text-xl font-bold text-white mb-6">Profile Summary</h3>
          <div className="flex items-center gap-6 mb-6">
            <img src={data.profile.avatarUrl} alt="" className="w-20 h-20 rounded-2xl object-cover" referrerPolicy="no-referrer" />
            <div>
              <h4 className="text-lg font-bold text-white">{data.profile.name}</h4>
              <p className="text-sm text-emerald-500 font-medium">{data.profile.role}</p>
              <p className="text-xs text-zinc-500 mt-1">{data.profile.location}</p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed">
            {data.profile.bio}
          </p>
        </div>
      </div>
    </div>
  );
}
