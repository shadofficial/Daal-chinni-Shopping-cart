import React from 'react';
import {Container, Col , Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../context/Context";

 
function Order(props) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }
 
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
          <h4>Thank you for your Order</h4>
          <p>Here are your Order details</p>
          <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={2}>
                 {prod.description}
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
          
          </Col>
        </Row>
      </Container>
     
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Order;