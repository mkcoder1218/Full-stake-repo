import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Plus, Trash2, Terminal, Layout, Settings, Code2 } from 'lucide-react';
import { Skill } from '../../types';

export default function ManageSkills() {
  const { data, addSkill, deleteSkill } = usePortfolio();
  const [newSkill, setNewSkill] = useState({ name: '', category: 'Language' as Skill['category'] });

  const categories = [
    { name: 'Language', icon: Terminal, color: 'text-blue-500' },
    { name: 'Framework', icon: Layout, color: 'text-emerald-500' },
    { name: 'Tool', icon: Settings, color: 'text-purple-500' },
    { name: 'Other', icon: Code2, color: 'text-orange-500' },
  ];

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.name.trim()) {
      addSkill(newSkill);
      setNewSkill({ name: '', category: 'Language' });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Manage Skills</h1>
        <p className="text-zinc-500 mt-1">Organize your technical expertise by categories.</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <h3 className="text-xl font-bold text-white mb-6">Add New Skill</h3>
        <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            required
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            className="flex-1 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="e.g. GraphQL"
          />
          <select
            value={newSkill.category}
            onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value as Skill['category'] })}
            className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {categories.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
          <button
            type="submit"
            className="px-8 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Add
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat) => {
          const catSkills = data.skills.filter(s => s.category === cat.name);
          return (
            <div key={cat.name} className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <cat.icon size={20} className={cat.color} />
                <h3 className="text-lg font-bold text-white">{cat.name}s</h3>
                <span className="ml-auto text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded">
                  {catSkills.length}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className="group flex items-center gap-2 px-3 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-xl text-sm text-zinc-300 hover:border-red-500/50 transition-all"
                  >
                    {skill.name}
                    <button
                      onClick={() => deleteSkill(skill.id)}
                      className="text-zinc-600 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
                {catSkills.length === 0 && (
                  <p className="text-xs text-zinc-600 italic">No skills added yet.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
