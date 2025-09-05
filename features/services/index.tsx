import React from 'react';
import { Card } from '@/components/card';
import { ADDITIONAL_SERVICES, SERVICES } from './constants';
import styles from './styles.module.scss';

export const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>WHAT WE DO</h2>
        </header>

        <div className={styles.mainServices}>
          {SERVICES.map((service, index) => (
            <Card key={index} variant="service" className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{<service.icon />}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </Card>
          ))}
        </div>

        <div className={styles.additionalServices}>
          {ADDITIONAL_SERVICES.map((service, index) => (
            <div key={index} className={styles.additionalService}>
              <div className={styles.additionalIcon}>{<service.icon />}</div>
              <div className={styles.additionalContent}>
                <h4 className={styles.additionalTitle}>{service.title}</h4>
                <p className={styles.additionalDescription}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
