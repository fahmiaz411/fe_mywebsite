import data from '../FakeData/Product'
import { Card, Button, Container, Col, Row } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import FormProduct from '../Components/Form/Product'
import CardProduct from '../Components/Card/CardProduct'

function Product() {
    const [AddProd, setAddProd] = useState();
    
    console.log('Component Product')
    console.log(AddProd)

    // useEffect(() => {
    //     data = [
    //         ...data,
    //         AddProd  
        
    //     ]
    // }, [])
    
    return (
        <Container className="mt-4" style={{backgroundColor: '#ffffff'}}>
            <Row>
                <Col>
                <FormProduct setAddProd={setAddProd} />
                </Col>
            </Row>
            <Row>
                {data.map((product, index) => (
                    <Col md="3" key={index}>
                        <CardProduct product= {product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Product
