import React, { useState, useEffect } from 'react';
import { MDBRow, MDBCol} from 'mdbreact';



const Comments = (props) => {
    const [randomUser, setRandomUser] = useState({});
    useEffect(() => {
        fetch('https://randomuser.me/api/?inc=picture')
            .then(response => response.json())
            .then(data => setRandomUser(data.results[0].picture))
    }, [])

    const { name, body } = props.comment;
    // console.log(randomUser.map(img => console.log(img.thumbnail)));

    return (
        <MDBRow>
            <MDBCol size="2">
                <img src={randomUser.thumbnail} style={{ borderRadius: "50%" }}></img>
            </MDBCol>
            <MDBCol size="10" style={{ textAlign: "left" }}>
                <h6>{name}</h6>
                <p>{body}</p>

            </MDBCol>
        </MDBRow>

    );
};

export default Comments;