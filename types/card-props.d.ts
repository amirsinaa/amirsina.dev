export default interface CardProps {
  title: string;
  description?: string;
  role?: string;
  period?: string;
  logo?: string;
  colorMode: string;
  alt?: string;
  children?: React.ReactNode;
}