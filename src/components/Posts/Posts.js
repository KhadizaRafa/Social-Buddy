import React from 'react';
import { Link } from "react-router-dom";

const Posts = (props) => {
    const {id,title,body} = props.post;
    return (
        <div>
             
            <div>

                    <b style={{color:"#ec008c",fontWeight:"bold"}}>#HashTag {id}</b>
                    <h5>{title}</h5>
                    {body}
                    <br/>
                    <Link to={"/post/"+id}><button className="main-btn">See More</button></Link>
                </div>
        </div>
    );
};

export default Posts;