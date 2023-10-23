import styles from "./MotivateExpanded.module.scss";
import Button from "../Button/Button";
import classNames from "classnames";
const MotivateExpanded = ({
  children,
  setShowMotivate1PopUp,
  setShowMotivate2PopUp,
  setShowMotivate3PopUp,
  goodCompany,
  visibleResults,
  workFromAnywhere,
}) => {
  const motivateClasses = classNames(styles.wrapper, {
    [styles.goodCompany]: goodCompany,
    [styles.visibleResults]: visibleResults,
    [styles.workFromAnywhere]: workFromAnywhere, // Dodaj klasę styles.wider, jeśli prop wider jest true
  });
  const closeMotivate1PopUp = () => {
    if (setShowMotivate1PopUp) {
      setShowMotivate1PopUp(false);
    }
    if (setShowMotivate2PopUp) {
      setShowMotivate2PopUp(false);
    }
    if (setShowMotivate3PopUp) {
      setShowMotivate3PopUp(false);
    }
  };
  return (
    <div className={motivateClasses}>
      {children}
      <Button handleOnClick={closeMotivate1PopUp}>back</Button>
    </div>
  );
};

export default MotivateExpanded;
