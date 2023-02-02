//COMPONENTS
import Slider from "react-slick";
import Slide from "../components/Slide";
import {
  People,
  Logos,
  TestimonialsSliderSettings,
  ClientSliderSetting,
} from "../settings/sliderConfig";
import PageContainer from "../components/PageContainer";
import { BigTitle, SmallTitle } from "../components/Titles";

//STYLES
import { BsShop, BsPencil, BsLaptop, BsFlag } from "react-icons/bs";
import { BsHeart, BsClock, BsStar } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/About.module.scss";

const About = () => {
  return (
    <PageContainer>
      {/* SECTION1 */}
      <section className={styles.section1}>
        <BigTitle>About Me</BigTitle>

        <div className={styles.info}>
          <p>
          I'm Rohit Kumar a full stack developer at OIF Tech pvt Ltd Bengaluru,
I've been working here since 4 month and done my 3 months internship completed.
During my internship period I go through in c# , dot net and Ms SQL database,
I done some work on python with it's some libraries like py2pdf,pdfminer,numpy etc.
And currently I'm working at strapi a headless CMS..

          </p>

          <div className={styles.moreInfo}>
            <ul>
              <li>
                <span>Age</span>
                <span>22</span>
              </li>

              <li>
                <span>Residence</span>
                <span>Muzaffarnagar INDIA</span>
              </li>

              <li>
                <span>Address</span>
                <span>VPO-Kurthal, SubDIstrict-Budhana, District-Muzaffarnagar 251309</span>
              </li>

              <li>
                <span>E-mail</span>
                <span>rohitkushwahaup12@gmail.com</span>
              </li>

              <li>
                <span>Phone</span>
                <span>+91 639759469</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION2 */}
      <section className={styles.section2}>
        <SmallTitle>What I Do</SmallTitle>

        <div className={styles.moreInfoContainer}>
          <div className={styles.moreInfoContainerLeft}>
            <div className={styles.info}>
              <BsShop className={styles.icon} />
              <h4>Ecommerce</h4>
              <p className={styles.description}>
              Ecommerce or electronic commerce is the trading of goods and services on the internet.
              It is your bustling city center or brick-and-mortar shop translated into zeroes and ones on the internet superhighway.
              </p>
            </div>

            <div className={styles.info}>
              <BsLaptop className={styles.icon} />
              <h4>Web Design</h4>
              <p className={styles.description}>
              Web design refers to the design of websites that are displayed on the internet.
              It usually refers to the user experience aspects of website development rather than software development.
              </p>
            </div>
          </div>

          <div className={styles.moreInfoContainerRight}>
            <div className={styles.info}>
              <BsPencil className={styles.icon} />
              <h4>Copywriting</h4>
              <p className={styles.description}>
              Copyright is a type of intellectual property that protects original works of authorship
               as soon as an author fixes the work in a tangible form of expression.
              </p>
            </div>

            <div className={styles.info}>
              <BsFlag className={styles.icon} />
              <h4>Management</h4>
              <p className={styles.description}>
              Copyright is a type of intellectual property that protects original works of authorship
               as soon as an author fixes the work in a tangible form of expression.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION3 */}
      <section className={styles.section3}>
        <SmallTitle>Testimonials</SmallTitle>
        <Slider {...TestimonialsSliderSettings}>
          {People.map((person, index) => (
            <div key={index}>
              <Slide
                info={{
                  imageSource: person,
                  quote: `OIFtech FZ LLC a Free Zone Limited Liability Company,
                  registered in accordance with the Dubai Development Authority (Registration No. 95228) with Head Office located
                  P O Box 45218, EX-57, Ground Floor, Building 16, Dubai Internet City, <n/> <n/>Dubai.

                  `,
                  name: `Anshuman IAO`,
                  company: `VP OIF Tech Pvt Ltd. Bengaluru`,
                }}
              />
            </div>
          ))}
        </Slider>
      </section>

      <section className={styles.section4}>
        <SmallTitle>Clients</SmallTitle>
        <Slider {...ClientSliderSetting}>
          {Logos.map((brand, index) => {
            return (
              <div key={index}>
                <div className={styles.brandContainer}>
                  <img src={brand} alt={`brand`} />
                </div>
              </div>
            );
          })}
        </Slider>
      </section>

      <section className={styles.section5}>
        <SmallTitle>Fun Facts</SmallTitle>

        <div className={styles.factsContainer}>
          <div className={styles.factContainer}>
            <BsHeart className={styles.icon} />
            <h2>Happy Clients</h2>
            <h3>578</h3>
          </div>

          <div className={styles.factContainer}>
            <BsClock className={styles.icon} />
            <h2>Working Hours</h2>
            <h3>4780</h3>
          </div>

          <div className={styles.factContainer}>
            <BsStar className={styles.icon} />
            <h2>Awards Won</h2>
            <h3>15</h3>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default About;
