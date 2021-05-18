var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/evaluate-expresion', function(req, res, next) {
    var expected = req.body.evalue;
    var expresion = req.body.expresion;
    var limMax = req.body.max;
    var limMin = req.body.min;
    var evaluation;
    var formatedExpresion;
    var data = [];
    var counter = 0;
    for(x = limMin; x <= limMax; x++){
        for(y = limMin; y <= limMax; y++){
            for(z = limMin; z <= limMax; z++){
                evaluation = eval(expresion);
                if(evaluation == expected){
                    newe = expresion.replace("*x", "("+x+")");
                    newe = newe.replace("*y", "("+y+")");
                    newe = newe.replace("*z", "("+z+")");

                    counter ++;    
                    data.push({exp: newe, x: x, y: y, z: z, result: evaluation});
                    
                }
            }
        }
    }
    
    res.render('test', {title: "Resultados | Mathdo", data: data, founded: counter, expresion: expresion, min: limMin, max: limMax});
});

module.exports = router;
