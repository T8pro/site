import { Button } from '@/components/button';
import { Logo } from '@/components/logo';
import styles from './styles.module.scss';

export interface HeaderProps {
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export const Header = ({ ctaLabel = 'BE PRO', onCtaClick }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo variant="header" size="medium" />
        <Button size="medium" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      </div>
    </header>
  );
};
