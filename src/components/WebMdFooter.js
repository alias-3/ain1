import React, { Component } from "react"
// import '../assets/css/Dashboard.css' 
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function WebMdFooter() {
  return (    
      <div className="p-2">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            {/* <a href="" className="nav-link px-2 text-muted">Home</a> */}
            <Link to="/">                                        
              <i className="bi bi-arrow-left-circle" style={{fontSize:'2rem', color: 'aquamarine'}}></i>                                                      
            </Link> 
          </li>          
        </ul>        
      </div>    
  );

}
