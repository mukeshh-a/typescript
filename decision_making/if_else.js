"use strict";
class example {
    sample() {
        var a = 10;
        var b = 20;
        if (b > a) {
            console.log("b is greater than a");
        }
        else {
            console.log("a is greater than b");
        }
    }
    sample1() {
        var a = 10;
        // var b = 20;
        if (a >= 0) {
            console.log("value is positive");
        }
        else {
            console.log("negative");
        }
    }
}
let oa = new example();
oa.sample1();
