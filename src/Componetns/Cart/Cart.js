import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Cart = (props) => {

    

    return (
        <div>
           <div>
            <Card style={{margin:'auto', width: '18rem' }}>
                <Card.Img variant="top" style={{maxHeight:'180px'}} src={props.cartImage} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Button variant="primary"><Link to={'/checkout'}><span className='text-white'>from $54.00</span></Link></Button>
                </Card.Body>
            </Card>
        </div> 
        </div>
    );
};

export default Cart;