import React, { Component } from "react"
// import '../assets/css/Dashboard.css' 
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import moment from 'moment'
import { Link } from "react-router-dom"
import NewsCard from "./NewsCard"
import WatchCard from "./WatchCard"
import StockMarketCard from "./StockMarketCard"

class Dashboard extends Component {
    render() {
        return (
            <Container className="vh-100 mt-3 mb-3">                                
                <Row className="p-2 mb-2">
                    <Col md={6} className="mb-4">
                        <NewsCard/>
                    </Col> 
                    <Col md={6} className="mb-4">
                        <WatchCard/>
                    </Col>                    
                </Row>         
                <Row className="p-2 mb-2">
                    <Col md={6} className="mb-4">
                        <StockMarketCard/>
                    </Col> 
                    <Col md={6} className="mb-4">
                        {/* <WatchCard/> */}
                    </Col>                    
                </Row>           
                <Row className="p-2 mb-2 text-center">  
                    <Col className="mb-4">
                        <Link to="/" role="button" className="btn btn-lg btn-danger">                                        
                                Home                                                        
                        </Link>                                            
                    </Col>                                                          
                </Row>            
            </Container>            
        );
    }
}

export default Dashboard