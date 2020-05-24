const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (name, email) => {
  const msg = {
    to: email,
    from: "shubhamk848513@gmail.com",
    subject: "Thanks For Joining Us",
    text: "Welcome",
    html: `<strong>Welcome Mr. ${name}</strong>`,
  };

  sendgrid.send(msg);
};

const sendDeleteEmails = (name, email) => {
  const msg = {
    to: email,
    from: "shubhamk848513@gmail.com",
    subject: "Thanks For Being with Us",
    html: `<strong> Mr. ${name}, We will meet soon, Bye</strong>`,
  };

  sendgrid.send(msg);
};

module.exports = {
  sendWelcomeEmail,
  sendDeleteEmails,
};
