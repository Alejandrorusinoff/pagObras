const { text } = require('body-parser')
const {Router} = require('express')
const nodemailer = require('nodemailer')
const router =  Router()


router.post('/email', async(req, res) => {
    const {name, lastName, phone, email, msj} = req.body
    contenHTML = `
    <h4>${name} ${lastName} quiere contactarte</h4>
    <ul>
        <li>Nombre: ${name}</li>
        <li>Apellido: ${lastName}</li>
        <li>Telefono: ${phone}</li>
        <li>Email: ${email}</li>
    </ul>
    <p>${msj}</p>
    `

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'alejandrorusinoff@gmail.com',
          pass: 'isorwiapakyweegc'
        }
    });

    const mailOptions = {
        from: 'alejandrorusinoff@gmail.com',
        to: 'ale_rusinoff13@hotmail.com',
        subject: `${name} ${lastName} quiere contactarte`,
        html: contenHTML
    };

    transporter.sendMail(mailOptions, (error, info) => {
        error? res.status(500).send("error ---> ",error.message) :
        res.status(200).json('Email enviado exitosamente')
    })
})

router.get('/', (req, res) => {
    res.send('email recibido')
})

module.exports = router