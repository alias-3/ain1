import React, { Component } from "react"
// import '../assets/css/Dashboard.css' 
import { Container, Row, Col, Card } from 'react-bootstrap'
import moment from 'moment'
import { Link } from "react-router-dom"
import NewsCard from "./NewsCard"

class Dashboard extends Component {
    render() {
        return (
        <NewsCard/>
        );
    }
}

export default Dashboard