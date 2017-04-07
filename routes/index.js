var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({dest: 'uploads/'});

var users = require('../public/mock_data/users');

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'});
});

router.get('/kim', function (req, res) {
  res.json(users);
});

router.get('/users', function (req, res) {
  res.json(users.getAll());
});

router.get('/user/:id', function (req, res) {
  var id = req.params.id;
  res.json(users.findById(id));
});

router.post('/mobile-phone-login', function (req, res) {
  var body = req.body;
  (body.username == 'kim' && body.password == '123') ? res.json({token: '123123123123213'}) : res.json({error: 'พาสผิด'});
});


router.post('/excel', upload.single('excel'), function (req, res, next) {
  console.log('log', req.file || 'file not found');
  req.file == undefined ? res.json({res: 'file not found'}) : res.json({res: 'work'});
});


module.exports = router;
