export interface ProjectInterface {
  id: number;
  title: string;
  logo: string;
  link: string;
  description: string;
  blurHash: string;
  technologies: string[];
};

export default interface ProjectsProps {
  projects: ProjectInterface[];
}
