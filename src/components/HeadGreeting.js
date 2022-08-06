import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/HeadGreeting.css' 
import {Container, Row, Col} from 'react-bootstrap'
import moment from 'moment'

class HeadGreeting extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            greeting    : 'Welcome',
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
                greeting    : 'Good Morning'
            });
        }
        else if (hourOfDay < 18) {
            this.setState({
                greeting    : 'Good Afternoon'
            });
        }
        else {
            this.setState({
                greeting    : 'Good Evening'
            });
        }
    }


    render(){
        return (
            
                <Container fluid className="jumbotron-head">
                    <Row className='h-100 align-items-center'>
                        <Col md={9}>                                                            
                            <div className="greet-title" id="day_time_greet">{this.state.greeting}</div>
                            <div className="day-time-title" id="day_time">{moment(this.state.dateTime).format('dddd, MMMM D')}</div>                                                            
                        </Col>
                        <Col md={3} className='d-none d-xxl-block text-light bg-success'>
                            
                        </Col>
                    </Row>
                </Container>
                
            
        );
    }
    
}

export default HeadGreeting;