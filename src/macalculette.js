import expect from "expect";

class calculator {
    add(a, b) {
        return a + b;
    }

    sub(a, b) {
        return a - b;
    }

    mul(a, b) {
        return a * b;
    }

    div(a ,b) {
        return a / b;
    }

    avg(tab) {
        return tab.reduce((pv, cv) => pv+cv, 0) / tab.length;
    }
}


class testCalculator {
    constructor() {
        this.c = new calculator();
    }
    testAdd() {
        expect(this.c.add(1, 1)).toEqual(2);
        console.log("Add test passed");
    }
    testSub() {
        expect(this.c.sub(1, 1)).toEqual(0);
        console.log("Sub test passed");
    }
    testMul() {
        expect(this.c.mul(1, 2)).toEqual(2);
        console.log("Mul test passed");
    }
    testDiv() {
        expect(this.c.div(4, 2)).toEqual(2);
        console.log("Div test passed");
    }
    testAvg() {
        expect(this.c.avg([2, 2])).toEqual(5);
        console.log("Avg test passed");
    }
}
