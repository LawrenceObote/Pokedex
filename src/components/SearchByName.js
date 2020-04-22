import React, { Component } from 'react'

class SearchByName extends Component {
    render() {
        return (
            <div>
                <form>
                    <label for="name">Enter Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter Pokemon Name"></input>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        )
    }
}

export default SearchByName;
