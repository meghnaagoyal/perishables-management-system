import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Expired = () => {
    return (
      <div>
        <p> Expired Products page</p>
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://www.w3schools.com/images/w3schools_green.jpg/100px180" alt ="Product name" />
                <Card.Body>
                    <Card.Title>Product Name</Card.Title>
                    <Card.Text>
                        discription
                    </Card.Text>
                    <Button variant="primary">Delete</Button>
                </Card.Body>
            </Card>
      </div>
    );
  };
  
  export default Expired;