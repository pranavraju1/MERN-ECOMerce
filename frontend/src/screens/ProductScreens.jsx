import { useParams } from "react-router-dom"; //this is used to get the id
import { Link } from "react-router-dom";
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Ratings from "../components/Ratings";
import axios from 'axios';
import { useEffect, useState } from "react";


const ProductScreens = () => {

  const [product,setProduct] = useState({});



  const {id:productId} = useParams()
 // const product = products.find((p)=>p._id === productId);
 
 //we want this to run if the product ID changes
 useEffect(()=>{
  const fetchProduct = async ()=>{
    const {data} = await axios.get(`/api/products/${productId}`);
    setProduct(data);
  }
  fetchProduct();

 },[productId])

  return (
    <>
      <Link className="btn btn-light my-3" to='/'>Go Back</Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid/>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Ratings value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem>
              Price: ${product.price}
            </ListGroupItem>
            <ListGroupItem>
              Description: ${product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col><b>${product.price}</b></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col><b>{product.countInStock>0 ? 'In Stock' : 'Out of Stock'}</b></Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type="button" disabled={product.countInStock===0}>Add To Cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreens;