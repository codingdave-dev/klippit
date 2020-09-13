const functions = require("firebase-functions");
const admin = require("firebase-admin");
const config = functions.config();
const cors = require("cors")({ origin: true });
const nodemailer = require("nodemailer");

admin.initializeApp();


const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: { user: config.user.email, pass: config.user.password },
});

// firebase functions:config:set user.email="codingdave.dev.nodemailer"
// firebase functions:config:set user.password="password"


// SEND WELCOME EMAIL
exports.sendWelcomeMail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const { email} = request.query;

        const mailOptions = {
            from: "Klippit <codingdave.dev.nodemailer@gmail.com>",
            to: `${email}`,
            subject: "Welcome To Klippit",
            html: `<p style="font-size: 16px">Hello ${email}, Welcome To Klippit</p>`,
        };


        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                response.send(error);
            } else {
                response.send("Message Sent Succesfully");
            }
        });
    });
});

// SEND NEW CAMPAIGN EMAIL
exports.sendNewCampaignEmail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const { email, fullName, describeAService, discount} = request.query;

        const mailOptions = {
            from: "Klippit <codingdave.dev.nodemailer@gmail.com>",
            to: `${email}`,
            subject: "New Campaign - Klippit",
            html: `<p style="font-size: 16px">Hello ${fullName}, Thank you for creating a new campaign</p><br><p style="font-size: 16px">${describeAService}</p><br><p style="font-size: 16px">${discount}</p>`,
        };


        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                response.send(error);
            } else {
                response.send("Message Sent Succesfully");
            }
        });
    });
});

// SEND RESET PASSWORD EMAIL
// exports.sendNewResetPasswordEmail = functions.https.onRequest((request, response) =>  {
//     cors(request, response, async () => {
//         const { email, fullName} = request.query;
//
//         // const link = await admin.auth().generatePasswordResetLink(`${email}`)
//         const link = 'link here'
//         const mailOptions = {
//             from: "Klippit <codingdave.dev.nodemailer@gmail.com>",
//             to: `${email}`,
//             subject: "Reset Password Request - Klippit",
//             html: `<p style="font-size: 16px">Hello ${fullName}, You have reset your password.  If this wasn't you please reset your password.</p><p>${link}</p>`,
//         };
//
//
//
//         transporter.sendMail(mailOptions, (error) => {
//             if (error) {
//                 response.send(error);
//             } else {
//                 response.send("Message Sent Succesfully");
//             }
//         });
//
//     });
// });