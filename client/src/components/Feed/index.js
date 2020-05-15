import React from "react";

function Feed() {
  return (
    <div className="container">
      <h1 className="text-center">Create a post</h1>
      <h3 className="text-center">Let us know you have lost or found a pet</h3>
    <br/>
    <div className="form-group">
    <label for="exampleFormControlTextarea1">Title:</label>
    <input type="title" className="form-control" id="title"></input>
    <label for="exampleFormControlTextarea1">Body:</label>
    <textarea className="form-control" id="text-body" rows="3"></textarea>
    <button type="submit" className="btn btn-outline-dark">Submit</button>
  </div>
  </div>
  )
}

export default Feed;
