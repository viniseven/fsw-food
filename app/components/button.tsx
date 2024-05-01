import { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  title?: string;
  icon: IconType;
  className?: string;
}

export function Button({ title, icon: Icon, className, ...rest }: ButtonProps) {
  return (
    <div className={`${className}`}>
      {Icon && <Icon size={20} />}
      {title}
    </div>
  );
}
