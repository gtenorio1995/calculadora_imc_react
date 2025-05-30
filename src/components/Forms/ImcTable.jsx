import React from "react";
import styles from "./ImcTable.module.css"; // Assuming you have a CSS module for styles
import Button from "./Button";

const ImcTable = ({ data, imc, description, infoClass, resetCalc }) => {
  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.container_table}`}>
        <h1>Tabela IMC</h1>
        <p className={styles.imc_number}>
          Seu IMC: <span className={styles[infoClass]}>{imc}</span>
        </p>
        <p className={styles.imc_info}>
          Situação atual:{" "}
          <span className={styles[infoClass]}>{description}</span>
        </p>
        <h3>Confira as classificações</h3>
        <div className={styles.imc_table}>
          <div className={styles.table_header}>
            <h4>IMC</h4>
            <h4>Classificação</h4>
            <h4>Obesidade</h4>
          </div>
          {data.map((item) => (
            <div className={styles.table_data} key={data.description}>
              <p>{item.classification}</p>
              <p>{item.description}</p>
              <p>{item.obesity}</p>
            </div>
          ))}
        </div>
        <Button action={resetCalc}>Voltar</Button>
      </div>
    </section>
  );
};

export default ImcTable;
