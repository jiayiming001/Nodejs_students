var fetch = require('node-fetch');

function* gen() {
    var url = "https://api.github.com/users/github";
    var result = yield fetch(url);
}

var g = gen();
var result = g.next();

console.log(result);
result.value.then((data)=>{
    console.log(data);
    return data.json();
}).then(function (data) {
    console.log(data);
    console.log(g.next());
});