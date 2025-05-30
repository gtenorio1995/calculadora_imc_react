import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container_footer}`}>
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} | Todos os Direitos Reservados
        </div>
        <div className={styles.author}>
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/gabrieltenorio-oliveira/"
            target="_blank"
          >
            Gabriel Tenório de Oliveira
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
