import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Wrench, 
  User, 
  Share2, 
  LogOut, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
  { name: 'Projects', icon: Briefcase, path: '/admin/projects' },
  { name: 'Skills', icon: Wrench, path: '/admin/skills' },
  { name: 'Profile', icon: User, path: '/admin/profile' },
  { name: 'Social Links', icon: Share2, path: '/admin/socials' },
];

export default function AdminSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
            <User size={18} />
          </div>
          <span className="font-bold text-white tracking-tight">Admin Portal</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all group",
                  isActive 
                    ? "bg-emerald-500 text-white" 
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  {item.name}
                </div>
                {isActive && <ChevronRight size={14} />}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-zinc-800 space-y-4">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-zinc-400 hover:text-emerald-500 transition-colors"
        >
          <ExternalLink size={18} />
          View Site
        </Link>
        <button
          onClick={() => window.location.href = '/admin/login'}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-zinc-400 hover:text-red-400 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
