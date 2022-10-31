import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FirstReactEvent from './first-react-event';
import TwoWayDataBinding from './two-way-data-binding';
import FocusBlurEvent from './focus-blur-event';

class App extends React.Component {
    render () {
        return (
            <div className='container'>
                <h1 className='text-center my-5'>Bismillah, Core React JS: Chapter Seven - What is Event</h1>
                <div>
                    <p><strong>Event: </strong>Event is an object which only triggers when something special happen and return an object to listener which contain information related to that event. <br /> Example: onClick, onMouse etc. <br /> <strong>N.B. </strong>Event is the only way to interact with users and get user feedback </p> <br />
                    <p>Every event has</p> <br />
                    <ul>
                        <li>Name</li>
                        <li>Listener function</li>
                    </ul>
                </div>
                <FirstReactEvent/>
                <TwoWayDataBinding/>
                <FocusBlurEvent/>
            </div>
        );
    }
}

export default App;