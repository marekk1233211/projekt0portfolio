import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div>
      <header className={styles.splash}>
        <div className={styles.splashInner}>
          <div className={styles.fontIconContainer}>
            <FontAwesomeIcon icon={faFaceSmileWink} />
          </div>
          <h1 className={styles.page_title}>Hi, My name is Marek Korczak</h1>
          <h2 className={styles.page_subTitle}>
            automation engineer, web developer
          </h2>
        </div>
      </header>
    </div>
  );
};

export default Header;
