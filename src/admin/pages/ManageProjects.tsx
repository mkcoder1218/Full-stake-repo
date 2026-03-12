import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Plus, Pencil, Trash2, X, Github, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Project } from '../../types';

export default function ManageProjects() {
  const { data, addProject, updateProject, deleteProject } = usePortfolio();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    imageUrl: '',
    githubUrl: '',
    liveUrl: ''
  });

  const handleOpenModal = (project?: Project) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        title: project.title,
        description: project.description,
        techStack: project.techStack.join(', '),
        imageUrl: project.imageUrl,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl
      });
    } else {
      setEditingProject(null);
      setFormData({
        title: '',
        description: '',
        techStack: '',
        imageUrl: '',
        githubUrl: '',
        liveUrl: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const projectData = {
      ...formData,
      techStack: formData.techStack.split(',').map(s => s.trim()).filter(Boolean)
    };

    if (editingProject) {
      updateProject(editingProject.id, projectData);
    } else {
      addProject(projectData);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Manage Projects</h1>
          <p className="text-zinc-500 mt-1">Add, edit or remove projects from your portfolio.</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all"
        >
          <Plus size={20} />
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {data.projects.map((project) => (
          <div key={project.id} className="p-6 bg-zinc-900 border border-zinc-800 rounded-3xl flex flex-col md:flex-row gap-6 items-center">
            <img src={project.imageUrl} alt="" className="w-full md:w-48 aspect-video rounded-2xl object-cover" referrerPolicy="no-referrer" />
            <div className="flex-1 space-y-2 text-center md:text-left">
              <h3 className="text-xl font-bold text-white">{project.title}</h3>
              <p className="text-sm text-zinc-500 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.techStack.map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded uppercase font-mono">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleOpenModal(project)}
                className="p-3 bg-zinc-800 text-zinc-400 hover:text-emerald-500 hover:bg-zinc-700 rounded-xl transition-all"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => { if(confirm('Are you sure?')) deleteProject(project.id); }}
                className="p-3 bg-zinc-800 text-zinc-400 hover:text-red-500 hover:bg-zinc-700 rounded-xl transition-all"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-white">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h2>
              <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Project Title</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="My Awesome App"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Tech Stack (comma separated)</label>
                  <input
                    type="text"
                    required
                    value={formData.techStack}
                    onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="React, TypeScript, Tailwind"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Description</label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  placeholder="Tell us about the project..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Image URL</label>
                <div className="relative">
                  <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                  <input
                    type="url"
                    required
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">GitHub URL</label>
                  <div className="relative">
                    <Github className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                    <input
                      type="url"
                      required
                      value={formData.githubUrl}
                      onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Live Demo URL</label>
                  <div className="relative">
                    <ExternalLink className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
                    <input
                      type="url"
                      required
                      value={formData.liveUrl}
                      onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="https://my-app.com"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all"
              >
                {editingProject ? 'Update Project' : 'Create Project'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
