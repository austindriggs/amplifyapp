import Card from 'react-bootstrap/Card';

// Source: https://react-bootstrap.netlify.app/docs/components/cards

function BgColorExample(props) {
  return (
    <>
        <Card
          bg={props.bg}
          key={props.key}
          text='white'
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </>
  );
}

export default BgColorExample;