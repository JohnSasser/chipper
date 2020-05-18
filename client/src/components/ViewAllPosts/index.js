import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";


function ViewAllPosts() {

    const [state, setState] = useState({
        posts: []
    });



    useEffect(() => {
        Axios.get('/api/post')
            .then(res => {
                console.log("Hello" + res.data);
                setState({ posts: res.data });
                console.log(state.posts);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div>
            <h2 className="text-center intro-h2">Posts from the community</h2>
            <p className="intro-post-p">View all of users created post here</p>

            {
                state.posts.map((post, index) => {
                    return (
                        <div key={index} className="border border-warning box">
                            <h1 className=" text-center post-title">{post.title}</h1>
                            <div className="card-body">
                                <p>{post.body}</p>
                                <Link className="nav-item" to="/reply">
                                    <button type="button" className="btn btn-outline-dark btn-lg">Reply</button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ViewAllPosts;