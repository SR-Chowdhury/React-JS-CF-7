import React from "react";

class Problem1 extends React.Component {

    clickHandler = event => {
        console.log("i am single clicked");
        if (event.detail === 2) {
            console.log("I am double clicked");
        }
    }

    render () {
        return (
            <div className="container text-center">
                <h1 className="my-3">Core React JS: Chapter Seven - Practice Problem 1</h1>
                <button 
                    className="btn btn-lg btn-outline-success mt-5"
                    onClick={this.clickHandler}
                >
                    Click Me    
                </button>
                <h3></h3>
            </div>
        );
    }
}

export default Problem1;