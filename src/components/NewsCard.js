import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

class NewsCard extends Component {
    

    componentDidMount() {  
        const inshorts = require('inshorts-news-api');     
        var options = {
            lang: 'en',
            category: ''
        }
          
        inshorts.getNews(options ,function(result, news_offset){
            console.log(result);
            console.log(news_offset);
        });
    }




    render() {
        return (
            <Link to="/">
                <div className="p-4 m-3 bg-dark mh-50 text-center" style={{
                    borderRadius: '10px'
                }}>              
                    Home
                        
                </div>
            </Link>    
        );
    }    
}

export default NewsCard;