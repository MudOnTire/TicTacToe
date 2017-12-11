import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class Timer extends Component {

    @observable secondPassed = 0;

    componentWillMount() {
        setInterval(() => {
            this.secondPassed++;
        }, 1000);
    }

    componentWillReact() {
        console.log("I will re-render, timer counted");
    }

    render() {
        return (
            <div>
                <span>Seconds passed: {this.secondPassed}</span>
                <DevTools />
            </div>
        )
    }
}

ReactDOM.render(<Timer />, document.getElementById('root'));