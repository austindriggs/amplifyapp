import Card from 'react-bootstrap/Card';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

// Source: https://react-bootstrap.netlify.app/docs/components/cards

function BgColorExample(props) {
  return (
    <>
      <h1>Card Components</h1><br/>
      <Container>
        <Row md={4} className="g-4 mx-auto justify-content-between">
            <Col>
              <Card
                key='success'
                bg='success'
                text='white'
                style={{ width: '18rem' }}
                className="mb-2"
              >
                <Card.Body>
                  <Card.Title>Card 01</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                key='warning'
                bg='warning'
                text='white'
                style={{ width: '18rem' }}
                className="mb-2"
              >
                <Card.Body>
                  <Card.Title>Card 02</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                key='info'
                bg='info'
                text='white'
                style={{ width: '18rem' }}
                className="mb-2"
              >
                <Card.Body>
                  <Card.Title>Card 03</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default BgColorExample;