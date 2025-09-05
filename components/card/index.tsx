import { ReactNode } from 'react';
import styles from './styles.module.scss';

export interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'service' | 'process';
  className?: string;
}

export const Card = ({
  children,
  variant = 'default',
  className,
}: CardProps) => {
  const classes = [styles.card, styles[variant], className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes}>{children}</div>;
};
