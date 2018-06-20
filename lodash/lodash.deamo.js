const _ = require('lodash');


function Foo() {
    this.a = 1;
}
   
function Bar() {
    this.c = 3;
}
   
Foo.prototype.b = 2;
Bar.prototype.d = 4;
var app = {};
var rn = _.extend(app, new Foo, new Bar);
_.extend(app, {
    name: "jiayiming",
    age:12,
    tall: '178cm'
})
console.log(app);
console.log(rn);