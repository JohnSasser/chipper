  
import React from 'react'
function Search(props) {
    return (
        <React.Fragment>
            <div className="col-md-12">
                <form className="form-inline">
                    <div className="md-form my-0">
                        <input
                            onChange={props.handleInputChange}
                            value={props.searchedEmp}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Search Employee"
                            id="search"
                        />
                    </div>
                    <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit" onClick={props.handleFormSubmit}>Search</button>
                </form>
            </div>

        </React.Fragment>
    )
}

export default Search