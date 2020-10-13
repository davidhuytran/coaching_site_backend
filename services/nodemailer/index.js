const nodemailer = require("nodemailer");
const { user, pass } = require("../../configs/keys");

async function email(first, last, to, subject, text) {
    let transporter = await nodemailer.createTransport({
        service: "gmail",
        auth: {
            user,
            pass
        }
    })

    let message = {
        from: user, // sender address
        to, // list of receivers
        subject, // Subject line
        // text, // plain text body
        html: `
        <p>
            Hello, ${first} ${last}, 
            <br/> 
                We got your message regarding 
                <b>"${text}"</b>
            <br/> 
            We will get back to you soon!🚗
        </p>`, // html body
    }
    // send mail with defined transport object
    let { info, error } = await transporter.sendMail(message);
    if(error) return {
        status: 500,
        msg: error
    }
    if(info) return {
        status: 300,
        msg: info
    }
    return {
        status: 200,
        msg: "Message Sent!"
    }
    // transporter.close()
}

module.exports = email