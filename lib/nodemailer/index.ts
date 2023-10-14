"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  pool: true,
  port: 2525,
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_OUTLOOK,
    pass: process.env.EMAIL_PASSWORD,
  },
  maxConnections: 1,
});

export async function sendEmail(name: string, email: string, message: string) {
  const subject = "Email from Portfolio";
  const body = `<div>
      <h1>Email de : ${name} </h1>
      <br/>
      <p>Message : <br/> ${message} </p>
      <br/>
      <h1>Pour répondre : ${email} </h1>`;

  const mailOptions = {
    from: process.env.EMAIL_OUTLOOK,
    to: process.env.MAIN_EMAIL,
    html: body,
    subject: subject,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) throw new Error("Error sending email");
    console.log("Email sent : ", info);
  });
}
