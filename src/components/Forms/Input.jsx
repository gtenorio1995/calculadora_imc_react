import React from "react";
import styles from "./Input.module.css"; // Assuming you have a CSS module for styles

const Input = ({ id, label, type, name, value, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={styles.input}
        id={id}
        {...props}
      />
    </div>
  );
};

export default Input;
