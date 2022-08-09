import React, { Component } from 'react'
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
                <Row>
                    <Col md={8} className="p-4">
                        <WatchCard/>
                    </Col> 
                    <Col md={4} className="p-4">
                        <NewsCard/>
                    </Col>                    
                </Row>         
                <Row>
                    <Col md={6} className="p-4">
                        <StockMarketCard/>
                    </Col> 
                    {/* <Col md={6} className="p-4">                        
                    </Col>                     */}
                </Row>           

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