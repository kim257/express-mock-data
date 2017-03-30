var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.post('/kim', function (req, res) {
  res.json({title: 'Express', res: 'work !!'});
});

router.post('/excel', upload.single('excel'), function (req, res, next) {
  console.log('log', req.file || 'file not found');
  req.file == undefined ? res.json({res: 'file not found'}) : res.json({res: 'work'});
});


module.exports = router;
