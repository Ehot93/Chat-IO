const app = require('express')(),
      http = require('http').createServer(app),
      io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', function(socket){
    /*console.log('user connected');
    socket.broadcast('hi all');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    })*/
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    })
  })

http.listen(3000, function(){
    console.log('listening on 3000');
})

