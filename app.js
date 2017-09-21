var express= require('express'),
    mongoose =require('mongoose');

var db= mongoose.connect('mongodb://localhost/bookAPI');

var Book = require('./models/bookModel');

var app= express();

var port= process.env.PORT || 3000;

var bookRouter=express.Router();

bookRouter.route('/Books')
    .get(function (req, res) {

        var query={};

        if(req.query.genre){
            query.genre=req.query.genre;
        }
       //var responseJson={hello: "This is my API"};
        Book.find(query, function (err, books) {
            if(err)
                res.status(500).send(err);
            else
                res.json(books);
        });

    });


app.use('/api', bookRouter);



app.get('/', function (req, res) {
    res.send('welcome to my API!!');
});


app.listen(port, function () {
    console.log('Gulp is Running my app on PORT:' +port);
});
