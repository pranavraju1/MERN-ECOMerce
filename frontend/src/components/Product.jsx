import { Card } from "react-bootstrap"
import { Link } from "react-router-dom";
import Rating from './Ratings';

const Product = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div' className="product-title">
              <b>{product.name}</b>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
          </Card.Text>
          <Card.Text as='h3'>
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product