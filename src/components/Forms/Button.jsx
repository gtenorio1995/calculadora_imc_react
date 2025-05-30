import styles from "./Button.module.css"; // Assuming you have a CSS module for styles

const Button = ({ children, id, action }) => {
  const handleAction = (e) => {
    action(e);
  };
  return (
    <button id={id} onClick={handleAction} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
