import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Save, Github, Linkedin, Twitter, Mail, Plus, Trash2 } from 'lucide-react';
import { SocialLink } from '../../types';

export default function ManageSocials() {
  const { data, updateSocials } = usePortfolio();
  const [socials, setSocials] = useState<SocialLink[]>(data.socials);
  const [isSaved, setIsSaved] = useState(false);

  const handleUpdate = (id: string, field: keyof SocialLink, value: string) => {
    setSocials(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const handleAdd = () => {
    const newSocial: SocialLink = {
      id: crypto.randomUUID(),
      platform: 'GitHub',
      url: '',
      icon: 'Github'
    };
    setSocials([...socials, newSocial]);
  };

  const handleDelete = (id: string) => {
    setSocials(prev => prev.filter(s => s.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSocials(socials);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Social Links</h1>
          <p className="text-zinc-500 mt-1">Manage your online presence and contact links.</p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white font-bold rounded-xl hover:bg-zinc-700 transition-all border border-zinc-700"
        >
          <Plus size={20} />
          Add Link
        </button>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {socials.map((social) => {
              const Icon = social.platform === 'GitHub' ? Github : 
                           social.platform === 'LinkedIn' ? Linkedin : 
                           social.platform === 'Twitter' ? Twitter : Mail;
              return (
                <div key={social.id} className="flex flex-col sm:flex-row gap-4 p-4 bg-zinc-800/50 rounded-2xl border border-zinc-700/50 items-center">
                  <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-emerald-500">
                    <Icon size={24} />
                  </div>
                  <select
                    value={social.platform}
                    onChange={(e) => handleUpdate(social.id, 'platform', e.target.value)}
                    className="w-full sm:w-40 px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="GitHub">GitHub</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Email">Email</option>
                  </select>
                  <input
                    type="url"
                    required
                    value={social.url}
                    onChange={(e) => handleUpdate(social.id, 'url', e.target.value)}
                    className="flex-1 w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://..."
                  />
                  <button
                    type="button"
                    onClick={() => handleDelete(social.id)}
                    className="p-3 text-zinc-500 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-4 pt-4">
            <button
              type="submit"
              className="px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all flex items-center gap-2"
            >
              <Save size={20} />
              Save Socials
            </button>
            {isSaved && (
              <span className="text-emerald-500 text-sm font-medium animate-pulse">
                Social links updated!
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
