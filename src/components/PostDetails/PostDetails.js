import React, { useState, useEffect } from 'react';
import { MDBMedia, MDBContainer, MDBRow, MDBCol, MDBJumbotron } from 'mdbreact';
import { useParams, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';


const PostDetails = () => {
    const { postId } = useParams()
    const [singlePost, setSinglePost] = useState([])
    const [comments,setComments] = useState([])
    const baseUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
    const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    useEffect(() => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => setSinglePost(data))

        fetch(commentUrl)
            .then(response => response.json())
            .then(data => setComments(data))
    },[])

    return (
        <MDBContainer>
            <MDBMedia style={{ margin: "100px 0px"}}>
                <MDBMedia left className="mr-3" href="#">
                    {/* <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg" alt="" /> */}
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading>
                        {singlePost.title}
                    </MDBMedia>
                    {singlePost.body}
                </MDBMedia>
            </MDBMedia> 
              {/* <MDBJumbotron fluid>
                    <MDBContainer>
                        <h3 className="display-4"> {singlePost.title}</h3>
                        <p className="lead">{singlePost.body}</p>
                    </MDBContainer>
                </MDBJumbotron> */}
            
               <div>
                    {
                        comments.map(comment =><Comments comment={comment} key={comment.id}></Comments>)
                    }

                    <Link to="/"><button className="main-btn">Back to Feed</button></Link>
               </div>
                    
            
           
        </MDBContainer>
    );
};

export default PostDetails;