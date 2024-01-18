"use strict";

require('dotenv').config()
const nodemailer = require("nodemailer");

async function main() {

  let transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY
    }
  })

  await transporter.sendMail({
    from: process.env.SENDER,
    to: process.env.TO,
    subject: "Test using SendGrid",
    text: "Sample body",
    html: "<b>Sample body</b>"
  }, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

main().catch(console.error);
