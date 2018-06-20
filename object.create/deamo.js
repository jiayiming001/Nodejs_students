const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

function per() { 
  this.a = 5;
}

var f = new per();
const me = Object.create(person, {
  app: {configurable: true, writable: true, enumerable: true, value: 123}
});

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));
app.get("/", (req, res, next) => {
  res.send("Hello World!");
});
app.listen(3000);

