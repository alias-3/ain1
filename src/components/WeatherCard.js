import { React, Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import moment from "moment";

class WatchCard extends Component {   

    constructor(props) {
        super(props);
        this.state = {            
            currentTime : moment().format("HH:mm:ss"),
            dayDate : moment().format("dddd, MMM Do")
        };            
    }

    componentDidMount() {        
        // this.weatherWidget();
        this.weatherWidget2();
        setInterval(this.getCurrentDateTime, 1000);
        this.getQuote();
    }

    getQuote = () => {        
        if(localStorage.getItem('quoteText') != null || localStorage.getItem('quoteAuthor') != null){            
            return true
        } else {
            let url = 'https://api.goprogram.ai/inspiration'
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("quoteText", data.quote);
                if(String(data.author) === "") {
                    localStorage.setItem("quoteAuthor", "Someone");
                } else {
                    localStorage.setItem("quoteAuthor", data.author);
                }
                
            })
            .catch(error => {
                console.log(error);
            }); 
        }    
    }

    getCurrentDateTime = () => {
        this.setState({            
            currentTime : moment().format("HH:mm:ss"),
            dayDate : moment().format("dddd, MMM Do")
        })        
    }

    weatherWidget = () => {
        if (document.getElementById("ww_e38277875b04a")) {
            const script = document.createElement('script');
            script.src = 'https://srv1.weatherwidget.org/js/?id=ww_e38277875b04a';
            script.async = true;
            document.body.appendChild(script);
        }        
    }

    weatherWidget2 = () => {
        if (document.getElementById("ww_346775cc388")) {
            const script = document.createElement('script');
            script.src = 'https://srv1.weatherwidget.org/js/?id=ww_346775cc388';
            script.async = true;
            document.body.appendChild(script);
        }        
    }


    render() {        
        let quote = localStorage.getItem('quoteText');
        let quoteAuthor = localStorage.getItem('quoteAuthor');
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Welcome</Card.Title>
                    <Card.Subtitle>At a glance</Card.Subtitle>
                    <div className="card-content"> 
                        <Row className="align-items-center pb-4" style={{height:'inherit'}}>                            
                            <Col xs={12}>
                                <div className="display-1">{this.state.currentTime}</div>
                                <div className="display-6">{this.state.dayDate}</div>                                
                            </Col>                            
                        </Row>   
                        <Row className="align-items-center text-center mt-4 py-4">
                            <Col>
                                <blockquote>&ldquo;{quote}&rdquo; &mdash; <footer className="fst-italic fw-light">{quoteAuthor}</footer></blockquote>                             
                                {this.quote}
                            </Col>
                        </Row>
                        <Row className="align-items-center" style={{height:'inherit'}}>                                                       
                            <Col xs={12} className="mt-4 py-4">                               
                                {/* <div className="weather-widget" style={{borderRadius:'0.5rem'}} id="ww_e38277875b04a" v='1.20' loc='auto' a='{"t":"horizontal","lang":"en","ids":[],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_sot":"celsius","sl_ics":"one_a","font":"Arial"}'><a href="https://sharpweather.com/" id="ww_e38277875b04a_u" target="_blank">Sharp Weather US</a></div> */}
                                <div className="weather-widget" style={{borderRadius:'0.5rem'}} id="ww_346775cc388" v='1.20' loc='auto' a='{"t":"responsive","lang":"en","ids":[],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"5","sl_sot":"celsius","sl_ics":"one_a","font":"Arial"}'><a href="https://sharpweather.com/" id="ww_346775cc388_u" target="_blank">Weather USA</a></div>
                            </Col>
                        </Row>                                           
                    </div>
                </Card.Body>
            </Card>
        );
    }    
}

export default WatchCard;