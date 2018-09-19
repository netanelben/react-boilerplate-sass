import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="app">
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
