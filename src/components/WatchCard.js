import { React, Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class WatchCard extends Component {   

    componentDidMount() {   
             
    }


    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Watch</Card.Title>
                    <Card.Subtitle>Entertainment</Card.Subtitle>
                    <div className="card-content">                    
                    <Row className="justify-content-center align-items-center">
                        <Col className="d-flex justify-content-center rounded bg-dark">
                        <iframe width="853" height="480" src="https://www.youtube.com/embed/Ruyl8_PT_y8" title="Peaky Blinders | Season 5 Trailer | Netflix" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Col>
                    </Row>
                    
                    </div>
                </Card.Body>
            </Card>
        );
    }    
}

export default WatchCard;