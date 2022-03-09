import React from "react"

function Search( { handleSearch }) {

    function handleChange(event){
        event.preventDefault();
        const userInput = event.target.value
        handleSearch(userInput)
    }

    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={handleChange} />
        </div>
    );
}

export default Search;