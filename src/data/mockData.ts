import { PortfolioData } from '../types';

export const initialData: PortfolioData = {
  profile: {
    name: "Mikeyas Derje",
    role: "Full-Stack Developer & CS Student",
    bio: "I am a passionate Computer Science student and full-stack developer focused on building scalable web and mobile applications. I love solving complex problems and learning new technologies.",
    avatarUrl: "https://picsum.photos/seed/mikeyas/400/400",
    email: "alex.rivera@example.com",
    location: "San Francisco, CA"
  },
  projects: [
    {
      id: "1",
      title: "TaskFlow Manager",
      description: "A collaborative project management tool with real-time updates and intuitive drag-and-drop interface.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      imageUrl: "https://picsum.photos/seed/taskflow/800/600",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      id: "2",
      title: "EcoTrack Mobile",
      description: "A mobile application for tracking personal carbon footprint and discovering sustainable local businesses.",
      techStack: ["React Native", "Node.js", "MongoDB"],
      imageUrl: "https://picsum.photos/seed/eco/800/600",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ],
  skills: [
    { id: "1", name: "TypeScript", category: "Language" },
    { id: "2", name: "React", category: "Framework" },
    { id: "3", name: "Node.js", category: "Framework" },
    { id: "4", name: "Tailwind CSS", category: "Tool" },
    { id: "5", name: "PostgreSQL", category: "Tool" },
    { id: "6", name: "Docker", category: "Tool" }
  ],
  socials: [
    { id: "1", platform: "GitHub", url: "https://github.com", icon: "Github" },
    { id: "2", platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { id: "3", platform: "Twitter", url: "https://twitter.com", icon: "Twitter" }
  ]
};
