'use strcit';
const mailer = require('nodemailer');

let smtpConfig = {
    host: 'smtp.example.com',
    port: 465,
    secure: false, // upgrade later with STARTTLS
    auth: {
        user: '1220102512@qq.com',
        pass: 'jia15858830567'
    }
};
var transporter = mailer.createTransport(smtpConfig);

transporter.verify(function (err, success) {
    if(err) {
        console.log(err);
    } else {
        console.log('Server is ready to take our message');
    }
});

async function foo(num) {
  num =  await vip(num)
    console.log(num);
}

function vip(num){ return ++num;  }
foo(5);