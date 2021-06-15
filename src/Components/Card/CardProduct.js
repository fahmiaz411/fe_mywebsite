import {Card, Button} from 'react-bootstrap'

function CardProduct({product}) {


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img style={{height: '250px'}} variant="top" src={product.url} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default CardProduct
