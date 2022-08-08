import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

class WatchCard extends Component {   

    componentDidMount() {   
             
    }


    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Watch</Card.Title>
                    <Card.Subtitle>Entertainment</Card.Subtitle>
                    <div className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </div>
                </Card.Body>
            </Card>
        );
    }    
}

export default WatchCard;