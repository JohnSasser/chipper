import React, { useState } from "react";
import Axios from "axios";


function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = () => {
    // API call to create a new post for users to see
    Axios
      .post("/api/create", {
        title: title,
        body: body
      }).then((res) => {
        console.log(res);
        if (res.data) {
          console.log(`post added sucessfully`)
        }
      }).catch((err) => {
        if (err) console.log(`create server error ${err}`)
      })
  }
  const onChange = (e) => {
    console.log(e.target, e.target.name, e.target.value);
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "body") {
      setBody(e.target.value);
    }
    // setTitle({
    //   [e.target.name]: e.target.value
    // })
    // setBody({
    //   [e.target.name]: e.target.value
    // })
  };

  return (
    <div className="container">
      <h1 className="text-center">Create a post</h1>
      <h3 className="text-center">Let us know you have lost or found a pet</h3>
      <br />
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Title:</label>
        <input
          className="form-control"
          name="title"
          value={title}
          onChange={onChange}></input>
        <label htmlFor="exampleFormControlTextarea1">Body:</label>
        <textarea
          className="form-control"
          name="body"
          rows="3"
          value={body}
          onChange={onChange}></textarea>
        <button type="submit" className="btn btn-outline-dark" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default CreatePost;
