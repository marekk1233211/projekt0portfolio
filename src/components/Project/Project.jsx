import styles from "./Project.module.scss";
const Project = ({ children, title, img }) => {
  //   const sectionClasses = classNames(styles.sectionContainer, {
  //     [styles.wider]: wider, // Dodaj klasę styles.wider, jeśli prop wider jest true
  //   });

  return (
    <div className={styles.project}>
      <div className={styles.proj_img}>
        <img src={img} alt="" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.section_subTitle}>{title}</h3>
        {children}
      </div>
    </div>
  );
};

export default Project;
