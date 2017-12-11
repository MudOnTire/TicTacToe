import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';
import demoCss from '../css/computedDemo.css';

class OrderLine {
    @observable price = 0;
    @observable amount = 1;

    constructor(price, amount) {
        this.price = price;
        this.amount = amount;
    }

    @computed get total() {
        return this.price * this.amount;
    }
}

@observer
class OrderLineView extends Component {

    minusOne = () => {
        if (this.props.orderline.amount > 0) {
            this.props.orderline.amount--;
        }
    }

    plusOne = () => {
        this.props.orderline.amount++;
    }

    render() {
        const orderline = this.props.orderline;
        return (
            <div>
                <p>
                    <span>Price:</span>
                    <span>{orderline.price}</span>
                </p>
                <p>
                    <span>Amount:</span>
                    <span>{orderline.amount}</span>
                </p>
                <p>
                    <span>Total Price:</span>
                    <span>{orderline.total}</span>
                </p>
                <div>
                    <button onClick={() => { this.minusOne() }}>-</button>
                    <button onClick={() => { this.plusOne() }}>+</button>
                </div>
            </div>
        )
    }
}

const orderline = new OrderLine(10, 10);

ReactDOM.render(<OrderLineView orderline={orderline} />, document.getElementById("root"))