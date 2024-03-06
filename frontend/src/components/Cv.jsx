//COMPONENTS
import { Link } from "react-router-dom";
import { useState } from "react";
import ListItemLink from "./ListItemLink";
import useClickOutside from "../customHooks/ClickOutside";

//STYLES
import styles from "../styles/Cv.module.scss";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaTimes,
  FaBars,
  FaInstagram,
} from "react-icons/fa";
import avatar from "../assets/rohit-PhotoRoom.jpg";

const Cv = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const domNode = useClickOutside(() => {
    setIsNavOpen(false);
  });

  return (
    <div className={styles.container}>
      {/* BURGER */}
      <div
        className={styles.burgerContainer}
        onClick={() => setIsNavOpen(true)}
      >
        <FaBars />
      </div>

      {/* CONTENT */}
      <div
        className={`${styles.content} ${isNavOpen ? styles.active : undefined}`}
        ref={domNode}
      >
        {/* CLOSE BURGER */}
        <div
          className={styles.burgerContainer}
          onClick={() => setIsNavOpen(false)}
        >
          <FaTimes />
        </div>

        <div className={styles.imageContainer}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles.moreInfo}>
          <h2>Rohit Thakur</h2>
          <h3>Full Stack Developer</h3>

          <ul className={styles.nav2}>
            {/* HOME */}
            <ListItemLink url="" clickHandler={() => setIsNavOpen(false)}>
              <span>Home</span>
            </ListItemLink>

            {/* ABOUT ME */}
            <ListItemLink url="about" clickHandler={() => setIsNavOpen(false)}>
              <span>About Me</span>
            </ListItemLink>

            {/* RESUME */}
            <ListItemLink url="resume" clickHandler={() => setIsNavOpen(false)}>
              <span>Resume</span>
            </ListItemLink>

            {/* PORTOFOLIO */}
            <ListItemLink
              url="portofolio"
              clickHandler={() => setIsNavOpen(false)}
            >
              <span>Portofolio</span>
            </ListItemLink>

            {/*  BLOG */}
            <ListItemLink url="blog" clickHandler={() => setIsNavOpen(false)}>
              <span>Blog</span>
            </ListItemLink>

            {/* CONTACT */}
            <ListItemLink
              url="contact"
              clickHandler={() => setIsNavOpen(false)}
            >
              <span>Contact</span>
            </ListItemLink>
          </ul>

          <div className={styles.socials}>
            {/* We  */}
            {/* <a href="www.linkedin.com/in/rohit-kumar-69b0ab204" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn /> </a> */}
            <a href="https://www.linkedin.com/in/rohit-thakur-69b0ab204" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>

            <a href="https://www.facebook.com/profile.php?id=100048504011733&mibextid=2JQ9oc" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/it_z_rohit_rajput/#" target="_blank" rel=""><FaInstagram /></a>
            <Link to="#">
              <FaTwitter />
            </Link>
          </div>
          <a href="https://drive.google.com/file/d/1VibU-q0EC7z9UGhp0uJCcm2MBEo935ZR/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.button}>
          <span>Download Cv</span>
          </a>

        </div>

        <div className={styles.copyright}>
          <span>© 2022 All rights reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Cv;
