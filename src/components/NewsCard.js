import { React, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row } from 'react-bootstrap'
import news_fallback_img from '../assets/img/news_fall_back.png'

class NewsCard extends Component {   
    constructor(props) {
        super(props);
        this.newsListRender = [];        
        this.state = {            
            newsList : []            
        }
    }

    componentDidMount() {                     
        var options = {            
            category:   'techonology'         
        }
        
        this.fetchNewsFromAPI();
    }

    fetchNewsFromAPI() {
        console.clear();
        this.newsListRender = [];
        let newsCategory = 'technology';
        const NEWS_API_KEY = 'd9adddef1ca84cd7b2668089b25ae073';  
        const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines?country=in&category='+newsCategory+'&apiKey='+NEWS_API_KEY;
        fetch(NEWS_API_URL)
        .then(res => res.json())
        .then(res => {    
            let newsRes = res.articles;                                       
            this.setState({ 
                newsList : newsRes,                
            });     
            if(newsRes.length > 0){
                for (var i = 0; i < 8; i++) {                    
                    //console.log(newsRes[i]);
                    let refinedTitle = newsRes[i].title.replace(' - ' + newsRes[i].source.name,'');
                    let imgUrl = newsRes[i].urlToImage ? newsRes[i].urlToImage : { news_fallback_img }
                    
                    //console.log(refinedTitle);
                    this.newsListRender.push(        
                        <div>
                            <Row key={i}>                                                        
                                <Col md={9}>
                                    <a href={newsRes[i].url} className="news-title-link" target="_blank">{refinedTitle}</a>   
                                </Col>
                                <Col className="d-none d-md-block">
                                    <img className="mw-100 mh-100" src={imgUrl} />   
                                </Col>                                                   
                            </Row>
                            <hr />  
                        </div>                                                                                           
                    )
                }
                console.log('Updated News Items List: ' + this.newsListRender );
            }                                          
        })
        .catch(error => {
            console.log(error);
        });          
    }

    render() {
        const isNewsListEmpty = (this.newsListRender.length < 1) ? true : false;
        let cardContent;
        if(isNewsListEmpty){
            cardContent = "No news to show."+'\n'+"Please check connectivity."            
        } else {                
            cardContent = this.newsListRender
        }
        
        
        return (
            <Card>
                <Card.Body>
                    <Card.Title>News</Card.Title>
                    <Card.Subtitle>Get Insights</Card.Subtitle>
                    <div className="card-text">
                        {cardContent}
                    </div>      
                    <div className="text-center text-md-end ">
                        <a href="javascript: void(0)" onClick={this.fetchNewsFromAPI.bind(this)}>Refresh</a>                
                    </div>                                                                                                                                              
                    
                </Card.Body>
            </Card>
        );
    }    
}

export default NewsCard;