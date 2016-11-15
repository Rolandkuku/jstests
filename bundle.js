"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _expect = require("expect");

var _expect2 = _interopRequireDefault(_expect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var calculator = function () {
    function calculator() {
        _classCallCheck(this, calculator);
    }

    _createClass(calculator, [{
        key: "add",
        value: function add(a, b) {
            return a + b;
        }
    }, {
        key: "sub",
        value: function sub(a, b) {
            return a - b;
        }
    }, {
        key: "mul",
        value: function mul(a, b) {
            return a * b;
        }
    }, {
        key: "div",
        value: function div(a, b) {
            return a / b;
        }
    }, {
        key: "avg",
        value: function avg(tab) {
            return tab.reduce(function (pv, cv) {
                return pv + cv;
            }, 0) / tab.length;
        }
    }]);

    return calculator;
}();

var testCalculator = function () {
    function testCalculator() {
        _classCallCheck(this, testCalculator);

        this.c = new calculator();
    }

    _createClass(testCalculator, [{
        key: "testAdd",
        value: function testAdd() {
            (0, _expect2.default)(this.c.add(1, 1)).toEqual(2);
            console.log("Add test passed");
        }
    }, {
        key: "testSub",
        value: function testSub() {
            (0, _expect2.default)(this.c.sub(1, 1)).toEqual(0);
            console.log("Sub test passed");
        }
    }, {
        key: "testMul",
        value: function testMul() {
            (0, _expect2.default)(this.c.mul(1, 2)).toEqual(2);
            console.log("Mul test passed");
        }
    }, {
        key: "testDiv",
        value: function testDiv() {
            (0, _expect2.default)(this.c.div(4, 2)).toEqual(2);
            console.log("Div test passed");
        }
    }, {
        key: "testAvg",
        value: function testAvg() {
            (0, _expect2.default)(this.c.avg([2, 2])).toEqual(2);
            console.log("Avg test passed");
        }
    }]);

    return testCalculator;
}();

var t = new testCalculator();
t.testAdd();
t.testSub();
t.testMul();
t.testDiv();
t.testAvg();
