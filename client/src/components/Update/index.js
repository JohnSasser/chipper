import React from "react";

function Update() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">
            Current Email:(olduseremailhere)
          </label>
          <br></br>
          <label for="exampleInputEmail1">New Email address:</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter New Email Here"
          ></input>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">
            Current Phone Number: 555555555{" "}
          </label>
          <br></br>
          <label for="exampleInputPassword1">New Phone Number Here</label>
          <input
            type="phone"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter New Phone Number Here"
          ></input>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Update;
