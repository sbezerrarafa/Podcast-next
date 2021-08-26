import React from 'react';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './styles.module.scss';

const header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });
  return (
    <header className={styles.headerContainer}>
      <img className={styles.logo} src="/logo.svg" alt="" />

      <p className={styles.p}>O melhor para você ouvir, sempre</p>
      <span>{currentDate} </span>
    </header>
  );
};

export default header;
