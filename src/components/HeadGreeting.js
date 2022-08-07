import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/HeadGreeting.css' 
import { Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import { Link } from "react-router-dom"

class HeadGreeting extends Component {
    constructor(props) {
        super(props);  
        this.state = {            
            timeOfDay   : 'Day',
            dateTime    : new Date()
        };                        
    }

    componentDidMount() {
        this.tickGreeting();
        this.dateTimeID = setInterval(
            () => this.tickDateTime(),1000
        );
        this.greetingID = setInterval(
            () => this.tickGreeting(),1800000
        );
    }

    componentWillUnmount() {
        clearInterval(this.dateTimeID);
        clearInterval(this.greetingID);
    }

    tickDateTime() {
        this.setState({
            dateTime    : new Date()
        });
    }

    tickGreeting() {
        let hourOfDay = new Date().getHours(); 
        if (hourOfDay < 12) {
            this.setState({                
                timeOfDay   : 'Morning'
            });

        }
        else if (hourOfDay < 18) {
            this.setState({                
                timeOfDay   : 'Afternoon'                
            });
        }
        else {
            this.setState({                
                timeOfDay   : 'Evening'
            });
        }
    }


    render(){
        return (            
            <Container fluid className="jumbotron-head">
                <Row className='h-100 align-items-center'>
                    <Col md={9}>                                                                              
                        <div className="greet-title" id="day_time_greet" data-time-of-day={this.state.timeOfDay}>Good {this.state.timeOfDay}</div>                           
                        <div className="day-time-title" id="day_time">{moment(this.state.dateTime).format('dddd, MMMM D')}</div>                                                            
                    </Col>
                    <Col md={3} className="text-center text-md-start">
                        <Link to="/dashboard">Go to Dashboard</Link>
                    </Col>
                </Row>
            </Container>                            
        );
    }
    
}

export default HeadGreeting;