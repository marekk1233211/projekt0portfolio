import styles from "./Motivate.module.scss";
import Button from "../Button/Button";
import classNames from "classnames";
const Motivate = ({
  children,
  btn,
  goodCompany,
  visibleResults,
  workFromAnywhere,
  handleMotivatePopUp,
}) => {
  const motivateClasses = classNames(styles.motivate, {
    [styles.goodCompany]: goodCompany,
    [styles.visibleResults]: visibleResults,
    [styles.workFromAnywhere]: workFromAnywhere, // Dodaj klasę styles.wider, jeśli prop wider jest true
  });
  return (
    <div className={motivateClasses}>
      <div className={styles.container}>
        <h3 className={styles.title}>{children}</h3>
        <Button handleOnClick={handleMotivatePopUp}>{btn}</Button>
      </div>
    </div>
  );
};

export default Motivate;
