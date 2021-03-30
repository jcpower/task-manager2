const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lasombra@gmail.com',
        subject: 'Welcome to the App!',
        text:`Welcome to the app, ${name}.  Let me know how you like it.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lasombra@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Come on ${name}, whatever I did wrong baby it can't be that bad..come back`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}