//STYLES
import styles from "../styles/Resume.module.scss";
import { motion } from "framer-motion";

//COMPONENTS
import Path from "../components/Path";
import Bar from "../components/Bar";
import PageContainer from "../components/PageContainer";
import { BigTitle, SmallTitle } from "../components/Titles";

const Resume = () => {
  const container = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  // Path.defaultProps = {
  //   title: "Duration", 
  //   description: `Description.`,
  //   descriptionTitle: "Details",
  //   extraPadding: "0rem",
  // };
  return (
    // <PageContainer>
    //   <BigTitle>Resume</BigTitle>
    //   <div className={styles.resume}>
    //     {/* PATH */}
    //     <div className={styles.path}>
    //       <div className={styles.experience}>
    //         <SmallTitle>Experience</SmallTitle>
    //         <Path title="From Jan 2023 - Present" />
    //         <Path descriptionTitle="OIF TECH PVT LTD.."/>
    //         <Path description = "Associate Software Engineer"/>
    //         <Path descriptionTitle="OIF TECH PVT LTD.." />
    //         <Path description = "Trainee Software Engineer"/>
    //         <Path descriptionTitle="VVDN Technologies.." />
    //         <Path description = "Junior Engineer"/>
    //         <Path />
    //       </div> 
    //       <div className={styles.education}>
    //         <SmallTitle>Education</SmallTitle>
    //         <Path title="2020-22"/>
    //         <Path extraPadding="2rem" descriptionTitle="Post Graduation Diploma in Computer Application" />
    //         <Path description="Goes Through Application Development , and Web Technologies"/>
    //         <Path  />
    //       </div>
    //     </div>

    //     {/* SKILLS */}
    //     <div className={styles.skills}>
    //       <div className={styles.designSkills}>
    //         <SmallTitle>Design Skills</SmallTitle>
    //         <motion.div
    //           className={styles.bars}
    //           variants={container}
    //           initial="hidden"
    //           animate="visible"
    //         >
    //           <Bar title="Web Design" percentage={95} />
    //           <Bar title="Python" percentage={85} />
    //           <Bar title="Java" percentage={95} />
    //           <Bar title="C#" percentage={90} />
    //           <Bar title="Dot NET" percentage={90} />
    //           <Bar title="SQl" percentage={90} />

              

    //         </motion.div>
    //       </div>

    //       <div className={styles.programmingSkills}>
    //         <SmallTitle>Coding Skills</SmallTitle>

    //         <motion.div className={styles.bars} variants={container}initial="hidden" animate="visible">
    //           <Bar title="Javascript" percentage={99} />
    //           <Bar title="Java" percentage={90} />
    //           <Bar title="HTML/CSS" percentage={95} />
    //           <Bar title="Python" percentage={75} />
    //           <Bar title="C#" percentage={95} />
    //         </motion.div>
    //       </div>
    //       </div> </div> </div> </div>
    // </PageContainer>
    <PageContainer>
      <BigTitle>Resume</BigTitle>
      <div className={styles.resume}>
        {/* EXPERIENCE */}
        <div className={styles.path}>
          <div className={styles.experience}>
            <SmallTitle>Experience</SmallTitle>
            {/* Job 1 */}
            <Path title="From Jan 2023 - Present">
              <Path descriptionTitle="OIF TECH PVT LTD.." />
              <Path description="Associate Software Engineer" />
            </Path>
            {/* Job 2 */}
            <Path title="Previous Job Duration">
              <Path descriptionTitle="Previous Company Name" />
              <Path description="Previous Job Title" />
            </Path>
            {/* ... add more job experiences as needed */}
          </div>
        </div>

        {/* EDUCATION */}
        <div className={styles.path}>
          <div className={styles.education}>
            <SmallTitle>Education</SmallTitle>
            <Path title="2020-22">
              <Path extraPadding="2rem" descriptionTitle="Post Graduation Diploma in Computer Application" />
              <Path description="Goes Through Application Development, and Web Technologies" />
            </Path>
            {/* Add more education entries if needed */}
          </div>
        </div>

        {/* SKILLS */}
       {/* SKILLS */}
        <div className={styles.skills}>
          <div className={styles.designSkills}>
            <SmallTitle>Design Skills</SmallTitle>
            <motion.div
              className={styles.bars}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <Bar title="Web Design" percentage={95} />
              <Bar title="Python" percentage={85} />
              <Bar title="Java" percentage={95} />
              <Bar title="C#" percentage={90} />
              <Bar title="Dot NET" percentage={90} />
              <Bar title="SQl" percentage={90} />

              

            </motion.div>
          </div>

          <div className={styles.programmingSkills}>
            <SmallTitle>Coding Skills</SmallTitle>

            <motion.div
              className={styles.bars}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <Bar title="Javascript" percentage={99} />
              <Bar title="Java" percentage={90} />
              <Bar title="HTML/CSS" percentage={95} />
              <Bar title="Python" percentage={75} />
              <Bar title="C#" percentage={95} />
            </motion.div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Resume;
