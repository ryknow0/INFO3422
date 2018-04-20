//$(() =>{
  //  console.log('loaded');
//});
//Will run java script once the page is loaded
//anonymous inside jquery function allows for javascript to wait until page is loaded to run

//nodemon .\server.js runs nodemon as a  monitor for saves on server.js
$(document).ready(function(){
    console.log('loaded');
    //click event from the send button adds the user input to the messages on the server
  $("#send").click(() => {
    //Javascript Object 
    //$("#name") is the JQuery selection of the html ID
    //creates the message object from the user input and assigns them to the properties name and message
    var message ={
      name:$("#name").val(), message:$("#message").val()
    };
    postMessage(message);
  }); 
  getMessages(); 
   //initializes socket.io on the client making connection to server at the same URL the pages is curretnly hosted on
   var socket = io();
   //event listener registers a function {addMessage}that is called when the event 'message' is fired
   socket.on('message', addMessage);
});

//adds messages from user input to html on messages page using javascript template literals
function addMessage(message) {
  //Adds the message objec to the div with the ID of messages
  //ie. passages the message back to the client
  $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`);
}

//Gets messages from server and displays them to the client
//Gets the messages saved at localhost:3000/messages and returns them as data
function getMessages() {
  $.get('http://localhost:3000/messages', (data) => {
    //console.log(data);
    //will write JSON from messages to html
    //takes data (a JSON array) and runs forEach on each element of the array
    //it will automatically run a forEach function to process over the array, 
    //and will pass the element to the addMessage function
    //which passes data back to the client
    data.forEach(element => {
      addMessage(element);
    });
  });
}

function postMessage(message) {
  $.post('http://localhost:3000/messages', message );
}

