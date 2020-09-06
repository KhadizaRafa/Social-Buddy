import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';
import './Home.css'
import { MDBRow, MDBCol } from "mdbreact";
import Posts from "../Posts/Posts";
import Masonry from 'react-masonry-css';

const Home = () => {
    const shuffle = a => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                shuffle(data);
                const randomTenData = data.slice(0, 10)
                setPosts(randomTenData);
            })
           
    }, [])



    return (

        //...
        <MDBRow>
            <MDBCol size="12" md="8" style={{ marginLeft: "80px" }}>
                <h2 style={{ margin:"20px 0px",borderBottom:"2px solid pink" }}>Latest Posts</h2>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                   
                    {       
                        posts.map(post =><Posts post={post} key={post.id}></Posts>)
                    }
                </Masonry>
            </MDBCol>
                <MDBCol md="3">
               
                </MDBCol>

        </MDBRow>

    );
};

export default Home;

















