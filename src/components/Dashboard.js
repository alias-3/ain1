import React, { Component } from "react"
// import '../assets/css/Dashboard.css' 
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import moment from 'moment'
import { Link } from "react-router-dom"
import NewsCard from "./NewsCard"
import WatchCard from "./WatchCard"
import StockMarketCard from "./StockMarketCard"
import WebMdFooter from "./WebMdFooter"

class Dashboard extends Component {
    render() {
        return (
            <Container fluid className="vh-100 mt-3 mb-3">                                
                {/* <Row className="p-2 mb-2">
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
                    </Col>                    
                </Row>           
                <Row className="p-2 mb-2 text-center">  
                    <Col className="mb-4">
                        <Link to="/" role="button" className="btn btn-lg btn-danger">                                        
                                Home                                                        
                        </Link>                                            
                    </Col>                                                          
                </Row>             */}

                
                <Row>
                    <Col md={6} className="p-4">
                        <NewsCard/>
                    </Col> 
                    <Col md={6} className="p-4">
                        <WatchCard/>
                    </Col>                    
                </Row>         
                <Row>
                    <Col md={6} className="p-4">
                        <StockMarketCard/>
                    </Col> 
                    {/* <Col md={6} className="p-4">                        
                    </Col>                     */}
                </Row>           
                {/* <Row className="text-center">  
                    <Col className="p-4">
                        <Link to="/" role="button" className="btn btn-lg btn-danger">                                        
                                Home                                                        
                        </Link>                                            
                    </Col>                                                          
                </Row> */}                
                <div className="text-center text-muted mb-4" style={{ marginTop:'2em' }}>© 2022 Anurag Wani</div>                
                <div style={{height:'100px'}}></div>
                <footer className="fixed-bottom bg-dark">                    
                    <WebMdFooter />
                </footer>
            </Container>            
        );
    }
}

export default Dashboard