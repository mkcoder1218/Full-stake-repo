import React, { createContext, useContext, ReactNode } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { PortfolioData, Project, Skill, Profile, SocialLink } from '../types';

interface PortfolioContextType {
  data: PortfolioData;
  updateProfile: (profile: Profile) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, updatedProject: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  deleteSkill: (id: string) => void;
  updateSocials: (socials: SocialLink[]) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const portfolio = usePortfolioData();

  return (
    <PortfolioContext.Provider value={portfolio}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
