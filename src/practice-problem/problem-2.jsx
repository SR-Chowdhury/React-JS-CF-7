import React from "react";

class Problem2 extends React.Component {

    state = {
        name: '',
        h1Var: '',
        h3Var: ''
    }

    changeHandler = event => {
        this.setState({name: event.target.value});
    }

    focusHandler = (event) => {
        this.setState({h1Var: event.target.value, h3Var: ''});
    }

    blurHandler = event => {
        this.setState({h1Var: '', h3Var: event.target.value});
    }

    render () {
        return (
            <div className="container">
                <h1 className="text-center my-3">Core React JS: Chapter Seven - Practice Problem 2</h1>
                <input 
                    type="text"
                    placeholder="Please type your name"
                    className="form-control"
                    value={this.state.name}
                    onChange = {this.changeHandler}
                    onFocus = {this.focusHandler}
                    onBlur = {this.blurHandler}
                />
                {this.state.h1Var && <h1>{this.state.h1Var}</h1>}
                {this.state.h3Var && <h3>{this.state.h3Var}</h3>}
            </div>
        );
    }
}

export default Problem2;