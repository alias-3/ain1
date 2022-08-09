import { React, Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class WatchCard extends Component {   

    componentDidMount() {
        //this.weatherWidget();
    }

    weatherWidget = () => {
        if (document.getElementsByClassName("elfsight-app-317930b9-0cd3-4aab-93e6-f892b825a6cc")) {
            const script = document.createElement('script');
            script.src = 'https://apps.elfsight.com/p/platform.js'
            script.defer = true;
            document.getElementsByClassName("elfsight-app-317930b9-0cd3-4aab-93e6-f892b825a6cc")[0].appendChild(script);
        }
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Weather</Card.Title>
                    <Card.Subtitle>Climate at a glance</Card.Subtitle>
                    <div className="card-text"> 
                        <Row className="align-items-center" style={{height:'inherit'}}>
                            {/* <Col md={6} className="d-none d-md-block">
                                Wherever you go, no matter what the weather, always bring your own sunshine. Sunshine is delicious, rain is refreshing, 
                                wind braces us up, snow is exhilarating;
                                 there is really no such thing as bad weather, only different kinds of good weather.
                            </Col> */}
                            <Col xs={12} md={6}>
                                Wherever you go, no matter what the weather, always bring your own sunshine. Sunshine is delicious, rain is refreshing, 
                                wind braces us up, snow is exhilarating;
                                 there is really no such thing as bad weather, only different kinds of good weather.
                            </Col>
                            <Col xs={12} md={6}>
                                <div class="elfsight-app-317930b9-0cd3-4aab-93e6-f892b825a6cc"></div>
                            </Col>
                        </Row>                                           
                    </div>
                </Card.Body>
            </Card>
        );
    }    
}

export default WatchCard;