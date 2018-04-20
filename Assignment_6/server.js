var express = require('express');
var bodyParser = require('body-parser');
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);
//connects mongo db
var mongoose = require('mongoose');
//
var dbUrl = 'mongodb://user:user@ds111648.mlab.com:11648/messages';
app.use(express.static(__dirname));

//allows us to use json and parse it properly
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//mongoos connect, once the db connectoin takes place
mongoose.connect(dbUrl, (err) => {
    console.log('mongodb connection', err);
});
//allows for listening to messages from http instead of app
var server = http.listen(3000, () =>{
    console.log('server is listening on port', server.address().port);
});
//Message model for the message object
//passes javascript object to model and schema definition name: mesage:
//this will accept the object that we will send to it from the UI
var Message = mongoose.model('Message', {
    name: String,
    message: String
});
//array of messages on the server
//var messages = [
  //  {name:'Tim', message: 'Hi'},
    //{name:'Jane', message: 'Hello'},
    //{name:'Ryan', message: 'Bye'}
//];

//app.get endpoint creates a route to the endpoint of '/messages' and registers a callback
//to send the data back to the client
app.get('/messages', (req,res) => {
   //no longer acessing static message array res.send(messages);
   //Searche Message object for any/all messages
   Message.find({}, (err, messages) => {
       //will grab all messages
       res.send(messages);
   });
});

//app.post endpoint for post from client
app.post('/messages', (req,res) => {
    //creates new message object from the Message model above ^
    var message = new Message(req.body);// now is a mongoose data model
    message.save((err) => {
        if(err){//if error send error status messate
            sendStatus(500);
        }
        else{
            //callback function calls all connected clients and registers a 'message' event and passes the jSON
            io.emit('message', req.body);
            res.sendStatus(200);
        }
    });//saves message to the db, tries to save if not calls (err)=>{}
    //console.log(req.body);
    //Logs the messages
    //messages.push(req.body); no longer pushing message to static array rather sending to db
    
});

//check user login connection event to ocket.io server
io.on('connection', (socket) => {
    console.log('A user connected');
});