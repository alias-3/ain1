import { React, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button, Col, Row } from 'react-bootstrap'

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
        
        // this.fetchNewsFromNewsAPI();
        // this.fetchNewsFromMediaStackAPI();
        this.fetchNewsFromNewsDataAPI();
    }

    fetchNewsFromNewsAPI = () => {
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
                    let imgUrl = newsRes[i].urlToImage ? newsRes[i].urlToImage : "../assets/img/news_fall_back.png";
                    
                    //console.log(refinedTitle);
                    this.newsListRender.push(        
                        <div>
                            <Row key={i} className="news-item">                                                        
                                <Col md={9}>
                                    <a href={newsRes[i].url} className="news-title-link" target="_blank">{refinedTitle}</a>   
                                </Col>
                                <Col className="d-none d-md-block">
                                    <img className="news-image" width="100" height="60" src={imgUrl} alt="news image" />   
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

    // fetchNewsFromMediaStackAPI = () => {
    //     console.clear();
    //     this.newsListRender = [];
    //     let newsCategory = 'business';
    //     const MEDIASTACK_API_KEY = '84454286fbabd467c0bc0ea0275bb0b6';  
    //     const MEDIASTACK_API_URL = 'http://api.mediastack.com/v1/news?access_key='+MEDIASTACK_API_KEY+'&countries=in&categories='+newsCategory+'';
    //     fetch(MEDIASTACK_API_URL)
    //     .then(res => res.json())
    //     .then(res => {    
    //         console.log(res);
    //         let newsRes = res.data;                                       
    //         this.setState({ 
    //             newsList : newsRes,                
    //         });     
    //         if(newsRes.length > 0){
    //             for (var i = 0; i < 8; i++) {                    
    //                 console.log(newsRes[i]);
    //                 let refinedTitle = newsRes[i].title.replace(newsRes[i].source,'');
    //                 let imgUrl = newsRes[i].image ? newsRes[i].image : "../assets/img/news_fall_back.png";
                    
    //                 //console.log(refinedTitle);
    //                 this.newsListRender.push(        
    //                     <div>
    //                         <Row key={i} className="news-item">                                                        
    //                             <Col md={9}>
    //                                 <a href={newsRes[i].url} className="news-title-link" target="_blank">{refinedTitle}</a>   
    //                             </Col>
    //                             <Col className="d-none d-md-block">
    //                                 <img className="news-image" width="100" height="60" src={imgUrl} alt="news image" />   
    //                             </Col>                                                   
    //                         </Row>
    //                         <hr />  
    //                     </div>                                                                                           
    //                 )
    //             }
    //             console.log('Updated News Items List: ' + this.newsListRender );
    //         }                                          
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });          
    // }



    fetchNewsFromNewsDataAPI = () => {
        console.clear();
        this.newsListRender = [];
        let newsCategory = 'technology';
        const NEWS_API_KEY = 'pub_100376a5aa21c17c81bff50ecaaca5aa224ee';  
        const NEWS_API_URL = 'https://newsdata.io/api/1/news?country=in&category='+newsCategory+'&apiKey='+NEWS_API_KEY;
        fetch(NEWS_API_URL)
        .then(res => res.json())
        .then(res => {    
            let newsRes = res.results;                                       
            this.setState({ 
                newsList : newsRes,                
            });     
            if(newsRes.length > 0){
                for (var i = 0; i < 8; i++) {                    
                    //console.log(newsRes[i]);
                    let refinedTitle = newsRes[i].title.replace(' - ' + newsRes[i].source_id,'');
                    let imgUrl = newsRes[i].image_url ? newsRes[i].image_url : "../assets/img/news_fall_back.png";
                    
                    //console.log(refinedTitle);
                    this.newsListRender.push(        
                        <div>
                            <Row key={i} className="news-item">                                                        
                                <Col md={9}>
                                    <a href={newsRes[i].url} className="news-title-link" target="_blank">{refinedTitle}</a>   
                                </Col>
                                <Col className="d-none d-md-block">
                                    <img className="news-image" width="100" height="60" src={imgUrl} alt="news image"/>   
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
                        <a href="javascript: void(0)" onClick={this.fetchNewsFromNewsDataAPI}>Refresh</a>                
                    </div>                                                                                                                                              
                    
                </Card.Body>
            </Card>
        );
    }    
}

export default NewsCard;