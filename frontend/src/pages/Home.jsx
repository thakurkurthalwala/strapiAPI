import styles from "../styles/Home.module.scss";
import PageContainer from "../components/PageContainer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {
  return (

    <PageContainer classOption={styles.home}>
      <Card body>
      <Card.Text>
        <h3>Welcome to My Personal Portfolio</h3>
        <h5>Full-Stack-developer<br/>@OIF Tech Pvt Ltd</h5>
      </Card.Text>
        </Card>

      {/* <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title><h2>Rohit Thakur</h2></Card.Title>
        
      </Card.Body>
    </Card> */}
      </PageContainer>
  );
};

export default Home;
