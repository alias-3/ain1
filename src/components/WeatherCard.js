import { React, Component } from "react";
import { Card, Row, Col } from "react-bootstrap";

class WatchCard extends Component {   

    componentDidMount() {
        //this.weatherWidget();
        //this.weatherWidget3();
        //this.weatherWidget4();
        this.weatherWidget5();
    }

    weatherWidget = () => {
        if (document.getElementsByClassName("elfsight-app-317930b9-0cd3-4aab-93e6-f892b825a6cc")) {
            const script = document.createElement('script');
            script.src = 'https://apps.elfsight.com/p/platform.js'
            script.defer = true;
            document.getElementsByClassName("elfsight-app-317930b9-0cd3-4aab-93e6-f892b825a6cc")[0].appendChild(script);
        }
    }

    weatherWidget2 = () => {
        if (document.getElementsByClassName("windy-weather-widget")) {
            const script = document.createElement('script');
            script.src = 'https://windy.app/widgets-code/forecast/windy_weather_async.js?v13'
            script.async = true;
            document.getElementsByClassName("windy-weather-widget")[0].appendChild(script);
        }
    }


    weatherWidget3 = () => {
        if (document.getElementsByClassName("weather-widget-3")) {
            const script = document.createElement('script');
            script.src = 'https://srv1.weatherwidget.org/js/?id=ww_6f6acd1d097a0'
            script.async = true;
            document.getElementsByClassName("weather-widget-3")[0].appendChild(script);
        }
    }

    weatherWidget4 = () => {
        if (document.getElementsByClassName("weather-widget-4")) {
            const script = document.createElement('script');            
            script.async = true;
            script.innerHTML = `
            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');            
            `
            document.getElementsByClassName("weather-widget-4")[0].appendChild(script);
        }
    }


    weatherWidget5 = () => {
        if (document.getElementsByClassName("weather-widget-5")) {
            const script = document.createElement('script');
            script.src = 'https://srv1.weatherwidget.org/js/?id=ww_fe074915bc6fb';
            script.async = true;
            document.getElementsByClassName("weather-widget-5")[0].appendChild(script);
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
                                {/* <div class="elfsight-app-317930b9-0cd3-4aab-93e6-f892b825a6cc"></div> */}

                                {/* <div className="windy-weather-widget"
                                style={{
                                    borderRadius : '15px'                                    
                                }}
                                data-windywidget="windy-weather"
                                data-thememode="dark"
                                data-appid="0e72bd6af2a15ec4d33f1885effd02d8"
                                data-spotid="395499"
                                data-dayofweek="6"
                                data-starthour="12"
                                data-windunit="knots"
                                data-tempunit="F"
                                data-mode="full"
                                data-lat="18.6161"
                                data-lng="73.7286"                                                                
                                >
                                </div> */}

                                {/* <div id="ww_6f6acd1d097a0" className="weather-widget-3" v='1.20' loc='id' a='{"t":"horizontal","lang":"en","ids":["wl1041"],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_sot":"celsius","sl_ics":"one_a","font":"Arial"}'>Weather Data Source: <a href="https://weatherlabs.in/हिंदी/पुणे_का_मौसम/" id="ww_6f6acd1d097a0_u" target="_blank">पुणे की मौसम की जानकारी</a></div> */}
                                
                                {/* <a className="weatherwidget-io weather-widget-4" href="https://forecast7.com/en/18d5273d86/pune/" data-label_1="PUNE" data-font="Roboto" data-icons="Climacons Animated" data-days="5" data-theme="original" >PUNE</a> */}

                                <div id="ww_fe074915bc6fb" className="weather-widget-5" v='1.20' loc='auto' a='{"t":"responsive","lang":"en","ids":[],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"3","sl_sot":"celsius","sl_ics":"one_a","font":"Arial"}'><a href="https://weatherwidget.org/" id="ww_fe074915bc6fb_u" target="_blank">Weather widget html for website by Weatherwidget.org</a></div>
                            </Col>
                        </Row>                                           
                    </div>
                </Card.Body>
            </Card>
        );
    }    
}

export default WatchCard;