import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <br/>
      <h1>CS 230L</h1>
      <h2>WVU ID: 800397100</h2>
      <p>Hi, I am Austin Driggs</p>
      <br/>
    <Container>
      <Row md={4} className="g-4 mx-auto justify-content-between">
          <Col>
            <Card
              title='Card 01'
              key='success'
              bg='success'
              text='Some quick example text to build on the card title and make up the bulk of the cards content.'
            />
          </Col>
          <Col>
            <Card
              title='Card 01'
              key='warning'
              bg='warning'
              text='Some quick example text to build on the card title and make up the bulk of the cards content.'
            />
          </Col>
          <Col>
            <Card
              title='Card 01'
              key='info'
              bg='info'
              text='Some quick example text to build on the card title and make up the bulk of the cards content.'
            />
          </Col>
      </Row>
    </Container>

    </div>
  );
}

export default App;
