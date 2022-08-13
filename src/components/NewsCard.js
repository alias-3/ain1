import { React, Component } from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import news_fall_back_img from '../assets/img/news_fall_back1.png'

class NewsCard extends Component {   
    constructor(props) {
        super(props);
        this.newsListRender = [];        
        this.state = {            
            newsList : []            
        }
    }

    componentDidMount() {                         
        
        // this.fetchNewsFromNewsAPI();        
        this.fetchNewsFromNewsDataAPI();
        // this.fetchNewsFromMediaStackAPI();
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

                    <div className="card-content">
                        {cardContent}
                    </div>  

                    <Card.Footer className="text-center text-md-end">                        
                        {/* <a className='btn btn-primary btn-gradient-3' href="javascript: void(0)" onClick={this.fetchNewsFromNewsAPI}>Refresh</a>      */}
                        <a className='btn btn-primary btn-gradient-3' href="javascript: void(0)" onClick={this.fetchNewsFromNewsDataAPI}>Refresh</a> 
                        {/* <a className='btn btn-primary btn-gradient-3' href="javascript: void(0)" onClick={this.fetchNewsFromMediaStackAPI}>Refresh</a>*/}
                    </Card.Footer>                                                                                                                                                                                        
                </Card.Body>                                
            </Card>
        );
    } 
    


    fetchNewsFromNewsAPI = () => {
        console.clear();
        this.newsListRender = [];
        let newsCategory = 'business';
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
                    let imgUrl = newsRes[i].urlToImage ? newsRes[i].urlToImage : news_fall_back_img;
                    
                    //console.log(refinedTitle);
                    this.newsListRender.push(        
                        <div className='d-flex align-items-center my-4'>
                            <Row key={i} className="news-item">                                                        
                                <Col xs={8} md={9} className="text-start">
                                    <a href={newsRes[i].url} className="news-title-link" target="_blank">{refinedTitle}</a>   
                                </Col>
                                <Col xs={4} md={3} className="text-end">
                                    <img className="news-image" width="70" height="40" src={imgUrl} />   
                                </Col>                                                   
                            </Row>                            
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

    fetchNewsFromNewsDataAPI = () => {
        console.clear();
        this.newsListRender = [];
        let newsCategory = 'business';
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
                    let imgUrl = newsRes[i].image_url ? newsRes[i].image_url : news_fall_back_img;

                    //console.log(refinedTitle);
                    this.newsListRender.push(        
                        <div className='d-flex align-items-center my-4'>
                            <Row key={i} className="news-item">                                                        
                                <Col xs={8} md={9} className="text-start">
                                    <a href={newsRes[i].url} className="news-title-link" target="_blank">{refinedTitle}</a>   
                                </Col>
                                <Col xs={4} md={3} className="text-end">
                                    <img className="news-image" width="70" height="40" src={imgUrl} />   
                                </Col>                                                   
                            </Row>                            
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
    //                 let imgUrl = newsRes[i].image ? newsRes[i].image : news_fall_back_img;
                    
    //                 //console.log(refinedTitle);
    //                 this.newsListRender.push(        
    //                     <div>
    //                         <Row key={i} className="news-item">                                                        
    //                             <Col md={8}>
    //                                 <a href={newsRes[i].url} className="news-title-link" target="_blank">{refinedTitle}</a>   
    //                             </Col>
    //                             <Col md={4} className="d-none d-md-block">
    //                                 <img className="news-image" width="80" height="50" src={imgUrl} />   
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


    
}

export default NewsCard;