import React from "react";

class FirstReactEvent extends React.Component {

    handleButton = (event) => {
        console.log(event.target);
    }

    render() {
        return (
            <div>
                <h1 className="">First React Event</h1>
                <hr />
                <button onClick={this.handleButton} className="btn btn-lg btn-outline-info mb-2">Click Me : & see console</button> <br />
                {/* It can be done by anonymously */}
                <button onClick={ (event) => {console.log(event.target)} } className="btn btn-lg btn-outline-danger">Click Me : & see console</button>
            </div>
        );
    }
}

export default FirstReactEvent;