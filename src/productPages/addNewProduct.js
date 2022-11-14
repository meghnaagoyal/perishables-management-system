import React, { useState, useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { GrAddCircle } from "react-icons/gr";

function AddNewProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  return (
    <>
      <button
        style={{ border: "none", outline: "none", background: "transparent" }}
        onClick={handleShow}
      >
        <GrAddCircle size={30} />{" "}
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form form action="/addNewProduct" enctype="multipart/form-data" method="post">
            <Form.Group className="mb-3" controlId="formBasicImage">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="file" placeholder="Logo" name="imageURL" required/>
              <Form.Text className="text-muted">
                Insert Image of the Product
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Product name" name="productName" required/>
              <Form.Text className="text-muted">
                Insert product name
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Product Description</Form.Label>
              <Form.Control type="text" placeholder="Enter Product Description" name="productDescription" required/>
              <Form.Text className="text-muted">
                Insert product Description
              </Form.Text>
            </Form.Group>
            <Button variant="primary"  type ="submit" value="Upload" >
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/*<Button variant="primary">Understood</Button>*/}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewProduct;
