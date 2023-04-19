const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public'));

// Login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/login.html');
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Perform login validation logic here

    // Redirect to form page
    res.redirect('/form');
});

// Form page
app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/pages/form.html');
});

app.post('/submit', (req, res) => {
    const data = req.body.data;
    const validity = req.body.validity;
    const cost = req.body.cost;
    const name = req.body.name;
    const creditCardInfo = req.body.creditCardInfo;
    const ccv = req.body.ccv;
    // --------------------------------------------------------------


    // const formData = {
    //         creditCardInfo,
    //         date: "11/2023",
    //         ccv,
    //         name,
    //     };

    //     request.post(
    //         'https://sandbox.sslcommerz.com/EasyCheckOut/testcdee2448d188712dd10c327b64762afbf91',
    //         { form: formData },
    //         (error, response, body) => {
    //           if (error) {
    //             // console.error(error);
    //             res.sendStatus(500);
    //           } else {
    //             // console.log('Response:', body);
    //             res.sendFile(__dirname + '/thankyou.html');
    //           }
    //         }
    //     );


    // -----------------------------------------------------------------------
    // Perform form submission logic here

    // Redirect to thank you page
    res.redirect('/thankyou');
});

// Thank you page
app.get('/thankyou', (req, res) => {
    res.send('<h1>Thank You for Submitting the Form!</h1>');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
