import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AboutToExpire = () => {
    return (
      <div>
        <p>About to Expire Products page</p>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" alt ="Product name"/>
                <Card.Body>
                    <Card.Title>Product Image</Card.Title>
                    <Card.Text>
                        discription
                    </Card.Text>
                    <Button variant="primary">Delete</Button>
                </Card.Body>
            </Card>
      </div>
    );
  };
  
  export default AboutToExpire;