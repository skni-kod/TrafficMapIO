exports.rejestracja = (req, res) => {
    res.render('rejestracja', {
        formMessage: req.flash('form')
    });
};