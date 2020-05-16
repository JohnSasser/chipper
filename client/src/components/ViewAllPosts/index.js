import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";


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
        <div className="row">
            <h2>Posts from the community</h2>
            <hr/>
            {
                state.posts.map((post, index) => {
                    return (
                        <div key={index} className="card">
                            <div className="card-header">{post.title}</div>
                            <div className="card-body">
                                <p>{post.body}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ViewAllPosts;