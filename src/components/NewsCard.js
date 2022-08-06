import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function NewsCard () {

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

export default NewsCard;