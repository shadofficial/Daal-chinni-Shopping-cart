import React, { useState } from "react";
import { CartState } from "../context/Context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [qty, setqty] = useState(1);

  const increment = (e, ids) => {
    setqty(qty + 1);
    dispatch({
      type: "INCREMENT",
      payload: {
        id: ids,
        qty: qty,
      },
    });
    console.log(cart);
  };
  const decrement = (e, ids) => {
    setqty(qty - 1);
    dispatch({
      type: "DECREMENT",
      payload: {
        id: prod.id,
        qty: qty,
      },
    });
  };

  return (
    <Container fluid="md">
      <Row className="mb-5">
        <Col md={4} xs={4}>
          <Image
            className="m-2"
            thumbnail={true}
            src={prod.image}
            alt={prod.name}
          />
        </Col>
        <Col md={8} xs={8}>
          <h2 className="pro_h1">{prod.name}</h2>
          <p>{prod.description}</p>
          <span className="m-2">₹ {prod.price.split(".")[0]}</span>
          {cart.some((p) => p.id === prod.id) ? (
            <div className="float-right">
              <div className="add-minus-quantity">
                <Button
                  variant="outline"
                  onClick={(e) => decrement(e, prod.id)}
                >
                  -
                </Button>
                <input type="number" value={qty} disabled />
                <Button
                  variant="outline"
                  onClick={(e) => increment(e, prod.id)}
                >
                  +
                </Button>
              </div>
            </div>
          ) : (
            <div className="float-right">
              <Button
                variant="success"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  })
                }
                disabled={!prod.inStock}
              >
                {!prod.inStock ? "Out of Stock" : "Add"}
                {console.log(prod)}
              </Button>
            </div>
          )}
        </Col>
        <hr/>
      </Row>
    </Container>
  );
};

export default SingleProduct;
