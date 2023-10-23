import styles from "./JokePopUp.module.scss";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinBeamSweat } from "@fortawesome/free-solid-svg-icons";
const JokePopUp = ({ setShowPopUp }) => {
  const handleClosePopUp = () => {
    setShowPopUp(false);
  };
  return (
    <div className={styles.wrapper}>
      <p>It's some kind of elvish..</p>
      <FontAwesomeIcon icon={faFaceGrinBeamSweat} />
      <Button handleOnClick={handleClosePopUp}>Close</Button>
      <p>I can't read it</p>
    </div>
  );
};

export default JokePopUp;
