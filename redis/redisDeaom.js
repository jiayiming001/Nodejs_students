const redis = require('redis'),
    client = redis.createClient(redisOptions),
    { promisify } = require('util');
    
  
    
var redisOptions = {
    host: '127.0.0.1',
    port: '6379'
}

client.on('error', (err) => {
    console.log(err);
});

var getAsync = promisify(client.get).bind(client);


getAsync('foo').then(function (res) {
    console.log(res);
});

var a = async function () { 
    const res = await getAsync('foo');
    console.log(res);
};
a(); 


