const router = require("express").Router();
const email = require('../services/nodemailer')

router.post("/sendMail", async (req, res) => {
    const { firstName, lastName, to, subject, text } = req.body;
    const response = await email(firstName, lastName, to, subject, text);
    res.status(response.status).send(response.msg)
})

module.exports = router;