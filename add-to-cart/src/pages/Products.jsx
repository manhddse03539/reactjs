import { useState, useEffect } from 'react';
import { CartContext } from '../contexts/Cart';
import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';
import './Products.css';

const fetchData = (url, callback) => {
    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                console.log(`Error fetching recipes: ${response.status}`);
            } else {
                response.json().then(callback);
            }
        })
        .catch(err => console.log(err));
}

function Products() {
    const [imageList, setImageList] = useState([]);
    const URL = 'http://localhost:9081/list';
    useEffect(() => {
        fetchData(URL, data => {
            setImageList(data);
        })
    }, [])

    return (
        <Container>
            <h2>Products</h2>
            <Row>
                {imageList.map(image => (
                    <Col key={image.id} sm="4">
                        <Card>
                            <CardImg top width="100%" src={image.imageUrl} alt={image.name} />
                            <CardBody>
                                <CardTitle tag="h5">{image.name}</CardTitle>
                                <CardText>{image.description}</CardText>
                                <CartContext.Consumer>
                                    {({ addToCart }) => (
                                        <Button onClick={() => addToCart(image)}>
                                            Add to cart
                                        </Button>
                                    )}
                                </CartContext.Consumer>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Products;
