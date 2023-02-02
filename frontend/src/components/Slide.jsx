import styles from "../styles/Slide.module.scss";
import { IoMdQuote } from "react-icons/io";
const Slide = ({ info }) => {
  return (
    <div className={styles.sliderContent}>
      <div className={styles.person}>
        <img src={info.imageSource} alt="person" />
      </div>
      <p>{info.quote}</p>
      <div className={styles.quote}>
        <div className={styles.name}>
          <h4>{info.name}</h4>
          <h4>{info.company}</h4>
        </div>
        <div className={styles.iconContainer}>
          <IoMdQuote className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

Slide.defaultProps = {
  info: {
    imageSource: "C:\Users\USER\Downloads\portofolio-master\portofolio-master\frontend\src\assets\Avatar1.jpg",
    quote: `I'm Rohit Kumar a full stack developer at OIF Tech pvt Ltd Bengaluru,
    I've been working here since 4 month and done my 3 months internship completed.
    During my internship period I go through in c# , dot net and Ms SQL database,
    I done some work on python with it's some libraries like py2pdf,pdfminer,numpy etc.
    And currently I'm working at strapi a headless CMS..`,
    name: `Rohit Thakur`,
    company: `OIF Tech`,
  },
};

export default Slide;
