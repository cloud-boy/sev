var app     = require('express')(),
	morgan  = require('morgan'),
	cors    = require('cors'),
	body    = require('body-parser'),
	port    = process.env.port || 3030;


	var users = [
		{fname: 'Houssem', lname: 'Yahiaoui', age: '21'},
		{fname: 'Jhon', lname: 'Doe', age: '121'},
		{fname: 'Jane', lname: 'Doe', age: '1'}
	];

	app.use(body.json());
	app.use(function(req, res, next){
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    });
	app.use(morgan('dev'));
	//app.use(cors());

	app.get('/api/users', function(req,res){
		res.status(200).json(users);
	});

	app.post('/api/users', function (req, res) {
		console.log(req.body);
		var newUser = {
			fname: req.body.fname,
			lname: req.body.lname,
			age  : req.body.age
		};
		users.push(newUser);
		res.status(301).json({message: "done saving ..."});
	});

	app.listen(port, function(req, res){
		console.log('Listing ...');
	});