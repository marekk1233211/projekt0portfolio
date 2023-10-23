import styles from "./Contact.module.scss";
import Button from "../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <form className={styles.formWrapper} action="">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <textarea></textarea>
      <div className={styles.btnWrapper}>
        <Button>Submit</Button>
      </div>
      <div className={styles.socialMediaWrapper}>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <span>519 656 014</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faFacebook} />
          <span>
            <a href="https://www.facebook.com/MarekKorczak123">
              https://www.facebook.com/MarekKorczak123
            </a>
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>
            {" "}
            <a href="https://github.com/marekk1233211">
              https://github.com/marekk1233211
            </a>
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faLinkedin} />
          <span>
            <a href="https://linkedin.com/in/marek-korczak-913210285">
              linkedin.com/in/marek-korczak-913210285
            </a>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Contact;
