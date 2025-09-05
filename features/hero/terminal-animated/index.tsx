'use client';

import { PiStar } from 'react-icons/pi';
import { Button } from '@/components/button';
import styles from './styles.module.scss';

export const TerminalAnimated = () => {
  return (
    <div className={styles.terminalAnimated}>
      <div className={styles.ctaText}>
        <p>Unlock Potential. Ignite Creativity. Grow with T8 Pro.</p>
        <p>
          Empowering businesses with innovative solutions that drive growth and
          success.
        </p>
      </div>

      <Button
        iconLeft={<PiStar />}
        variant="primary"
        size="large"
        className={styles.cta}
      >
        GENERATE THE RESULTS
      </Button>
    </div>
  );
};
