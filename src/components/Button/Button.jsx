import styles from "./Button.module.scss";
const Button = ({ children, handleOnClick }) => {
  return (
    <button className={styles.btn} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
