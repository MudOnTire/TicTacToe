import { observable, computed } from 'mobx';

class OrderLine {
    @observable price = 0;
    @observable amount = 1;

    @computed get total() {
        return this.price * this.amount;
    }
}

const line = new OrderLine();
console.log("price" in line);
console.log(line.hasOwnProperty("price"));
line.amount = 2;
console.log(line.hasOwnProperty("price"));