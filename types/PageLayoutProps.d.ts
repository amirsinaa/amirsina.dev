import { ReactNode } from "react";

export default interface PageLayoutPropsm{
  children: ReactNode;
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
};
