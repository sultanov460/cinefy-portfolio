import clsx from "clsx";
import { ReactNode } from "react";

interface ContainerProps {
  className?: string;
  id?: string;
  children: ReactNode;
}

export const Container = ({ className, id, children }: ContainerProps) => {
  return (
    <div className={clsx("max-w-3xl mx-auto ", className, id)}>{children}</div>
  );
};
