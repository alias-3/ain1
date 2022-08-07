import { React, Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";

class NewsCard extends Component {   

    componentDidMount() {   
        const NEWS_API_KEY = 'd9adddef1ca84cd7b2668089b25ae073';       
        var options = {
            country :   'in',
            category:   'techonology'         
        }
 
        fetch('https://newsapi.org/v2/everything?domains=google.com&apiKey=d9adddef1ca84cd7b2668089b25ae073')
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
        });        
    }


    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>News</Card.Title>
                    <Card.Subtitle>Get Insights</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        );
    }    
}

export default NewsCard;