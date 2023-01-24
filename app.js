"use strict";

require('dotenv').config()
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY
    }
  })

  // send mail with defined transport object
  await transporter.sendMail({
    from: process.env.SENDER, // sender address
    to: process.env.TO, // list of receivers
    subject: "Test using SendGrid", // Subject line
    text: "Hello world!", // plain text body
    html: "<b>Hello world!</b>"
  }, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

main().catch(console.error);