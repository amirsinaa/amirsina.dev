export interface Technologies {
  id: number;
  name: string;
}

export interface ProjectInterface {
  id: number;
  title: string;
  logo: string;
  link: string;
  description: string;
  blurHash: string;
  technologies: Technologies[];
};

export default interface ProjectsProps {
  projects: ProjectInterface[];
}
