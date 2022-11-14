import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddNewProduct from './addNewProduct';

const AllProducts = () => {
    return (
        <div>
            <p>All Products page</p>
            <AddNewProduct/>
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

export default AllProducts;