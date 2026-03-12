import { useState, useEffect } from 'react';
import { PortfolioData, Project, Skill, Profile, SocialLink } from '../types';
import { initialData } from '../data/mockData';

const STORAGE_KEY = 'portfolio_data_v2';

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const updateProfile = (profile: Profile) => {
    setData(prev => ({ ...prev, profile }));
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: crypto.randomUUID() };
    setData(prev => ({ ...prev, projects: [...prev.projects, newProject] }));
  };

  const updateProject = (id: string, updatedProject: Partial<Project>) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map(p => p.id === id ? { ...p, ...updatedProject } : p)
    }));
  };

  const deleteProject = (id: string) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill = { ...skill, id: crypto.randomUUID() };
    setData(prev => ({ ...prev, skills: [...prev.skills, newSkill] }));
  };

  const deleteSkill = (id: string) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }));
  };

  const updateSocials = (socials: SocialLink[]) => {
    setData(prev => ({ ...prev, socials }));
  };

  return {
    data,
    updateProfile,
    addProject,
    updateProject,
    deleteProject,
    addSkill,
    deleteSkill,
    updateSocials
  };
}
