import React from "react";

class FocusBlurEvent extends React.Component {

    state = {
        data: ''
    }

    changeHandler = event => {
        this.setState({data: event.target.value});
    }

    focusHandler = event => {
        console.log('Please write something');
    }

    blurHandler = event => {
        if (!this.state.data) {
            alert("Please Enter your name");
        }
    }

    render () {
        return (
            <div>
                <h1>onFocus & onBlur Event</h1> <hr />
                <input type="text" 
                    value={this.state.data} 
                    onChange={this.changeHandler} 
                    onFocus={this.focusHandler}
                    onBlur={this.blurHandler} 
                    placeholder="Type here"
                    className="form-control"
                />
                {this.state.data && <h3>Welcome, {this.state.data}</h3>}    
            </div>
        );
    }
}

export default FocusBlurEvent;