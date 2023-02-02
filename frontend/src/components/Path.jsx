import styles from "../styles/Path.module.scss";
const Path = ({ title, descriptionTitle, description, extraPadding }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.divider}></div>
      <div
        className={styles.description}
        style={{ paddingBottom: extraPadding }}
      >
        <h2 className={styles.descriptionTitle}>{descriptionTitle}</h2>
        <p className={styles.content}>{description}</p>
      </div>
    </div>
  );
};

Path.defaultProps = {
  title: "2022 Board of Technical Education",
  descriptionTitle: "Post Graduation Diploma in Computer Applications",
  description: `PGDCA is a 1-year Post-Graduate Diploma course that is designed to prepare students for performing singular and multiple computer-related specific tasks.
  The programme focus on theoretical and application-based computer application.
   Students learn subjects like C, C++, Python, and Java during the course.`,
  extraPadding: "0rem",
};

export default Path;
