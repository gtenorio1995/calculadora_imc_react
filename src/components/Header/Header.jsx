import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/calculator.svg?react";

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`container ${styles.container_header}`}>
        <div className={styles.brand}>
          <img src={logo} alt="logo" />
          <span>Calculadora IMC</span>
        </div>
        <span className={styles.author}>by Gabriel Tenório</span>
      </div>
    </header>
  );
};

export default Header;
