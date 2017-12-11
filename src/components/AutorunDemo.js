import { observable, computed, autorun } from 'mobx';
import { observer } from 'mobx-react';

function demo1() {
    var numbers = observable([1, 2, 3]);

    var sum = computed(() => numbers.reduce((a, b) => a + b));

    var disposer = autorun(() => console.log(sum.get()));

    numbers.push(4);

    disposer();

    numbers.push(5);
}

function errorHandleDemo() {
    const age = observable(10);
    const dispose = autorun(() => {
        if (age.get() < 0) {
            throw new Error("Age should not be negative");
        }
        console.log("Age", age.get());
    });

    age.set(19);
    age.set(-10);
    age.set(5);

    dispose.onError(e => {
        alert("Please enter a valid age");
    })

    age.set(-5);
}

errorHandleDemo();