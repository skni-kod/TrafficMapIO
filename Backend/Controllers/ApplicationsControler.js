const db = require('./db');
const { check, validationResult } = require('express-validator')

exports.store = async (req, res) => {
    
    try {
        const result = await db.client.query(db.checkQuery(req.body.Imie));

        if (result.rows.length > 0) {
            console.log("Login w użyciu");
            req.flash('form', "Login zajęty");
        }
        else {
            console.log("Login wolny");
            //await db.client.query(db.insertQuery(req.body.Imie, req.body.Nazwisko));
            req.flash('form', "Rejestracja udana przy podanych informacjach");
            await db.client.end();
        }
    }
    catch (error) {
        console.error(error);
    }

    res.redirect('/');
};

exports.validate = [
    check('Imie').trim().isLength({ min: 1 }).withMessage('Login wymagany'),
    check('Nazwisko').trim().isLength({ min: 8 }).withMessage('Haslo nie spelnia wymagan')
];

exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);

    if (! errors.isEmpty()){
        return res.render('rejestracja', {
            validated: req.body,
            errors: errors.mapped()
        });
    }
    next();
};