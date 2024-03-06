import styles from "../styles/Path.module.scss";
const Path = ({ title, descriptionTitle, description, extraPadding }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.divider}></div>
      <div className={styles.description} style={{ paddingBottom: extraPadding }}>
          <h2 className={styles.descriptionTitle}>{descriptionTitle}</h2>
          <p className={styles.content}>{description}</p>
      </div>
    </div>
  );
};

Path.defaultProps = {
  //title: "Duration",
  //descriptionTitle: "Details",
  //description: `Description.`,
  extraPadding: "0rem",
};

export default Path;
