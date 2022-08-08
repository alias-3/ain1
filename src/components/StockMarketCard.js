import { React, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'

class StockMarketCard extends Component {   

    constructor(props) {
        super(props);        
    }
    
    componentDidMount() {
        this.renderWidget();
    }

    renderWidget() {
        if (document.getElementsByClassName("tradingview-widget-container")) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js'
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": "FX:EURUSD",
                "width": 350,
                "height": 220,
                "locale": "in",
                "dateRange": "12M",
                "colorTheme": "light",
                "trendLineColor": "rgba(41, 98, 255, 1)",
                "underLineColor": "rgba(41, 98, 255, 0.3)",
                "underLineBottomColor": "rgba(41, 98, 255, 0)",
                "isTransparent": false,
                "autosize": false,
                "largeChartUrl": ""
            });
    
            document.getElementsByClassName("tradingview-widget-container")[0].appendChild(script);
        };
    }


    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Markets</Card.Title>
                    <Card.Subtitle>Track markets</Card.Subtitle>
                    <div className="card-text">


                        <div id="stock_widget_1" className="stock-widget">
                            <div class="tradingview-widget-container">
                                <div class="tradingview-widget-container__widget"></div>
                                <div class="tradingview-widget-copyright"><a href="https://in.tradingview.com/symbols/EURUSD/?exchange=FX" rel="noopener" target="_blank"><span class="blue-text">EURUSD Rates</span></a> by TradingView</div>                        
                            </div>
                        </div>
                    

                    </div>
                </Card.Body>
            </Card>
        );
    }    
}

export default StockMarketCard;