import React from "react";

class TwoWayDataBinding extends React.Component {

    state = {
        name: ''
    }

    inputHandler = (event) => {
        this.setState({name: event.target.value});
    }

    render () {
        return (
            <div className="mt-3">
                <h1>Two Way Data Binding</h1> <hr />
                <input className="form-control" type="text" placeholder="Type here..." value={this.state.name} onChange={this.inputHandler}/><br />

                {this.state.name && <h3>Welcome, {this.state.name}</h3>}
            </div>
        );
    }
}

export default TwoWayDataBinding;
