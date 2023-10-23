import styles from "./Feature.module.scss";
const Feature = ({ children, img, title }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <h3 className={styles.section_subTitle}>{title}</h3>
      {children}
    </div>
  );
};

export default Feature;
