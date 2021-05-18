var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'Acerca de EQUBOT' });
});

module.exports = router;
