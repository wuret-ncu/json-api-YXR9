var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json([{id: 1, title: "讀書", completed: false}, {id: 2,title: "寫作業", completed: false}, {id: 3, title: "畫畫", completed: false}])
});

module.exports = router;
