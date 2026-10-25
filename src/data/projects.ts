import generatedProjects from './projects.generated.json';

export type ProjectCategory = 'personal' | 'client' | 'other';
export type ProjectStatus = 'active' | 'archived';

export interface Project {
  key: string;
  title: string;
  year: number;
  yearStart: number | null;
  yearEnd: number | null;
  category: ProjectCategory;
  status: ProjectStatus;
  statusLabel: string;
  slug: string;
  description: string;
  logo: string | null;
  sourceUrl: string;
  liveUrl: string;
  githubUrl: string;
  tech: string[];
  featured: boolean;
}

export const projects = generatedProjects as Project[];
