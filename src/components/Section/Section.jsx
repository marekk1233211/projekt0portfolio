import styles from "./Section.module.scss";
import classNames from "classnames";

const Section = ({
  children,
  title,
  wider,
  theMostWide,
  bgcd,
  darkTitle,
  changeFlex,
}) => {
  const sectionClasses = classNames(styles.sectionContainer, {
    [styles.wider]: wider,
    [styles.theMostWide]: theMostWide,
    [styles.bgcd]: bgcd,
    // [styles.changeFlex]: changeFlex, // Dodaj klasę styles.wider, jeśli prop wider jest true
  });
  const section_containerClasses = classNames(styles.container, {
    [styles.changeFlex]: changeFlex,
  });
  const section_titleClasses = classNames(styles.section_title, {
    [styles.darkTitle]: darkTitle,
  });
  return (
    <section className={sectionClasses}>
      <div className={section_containerClasses}>
        <h2 className={section_titleClasses}>{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
