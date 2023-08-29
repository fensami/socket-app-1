const express = require('express')
const app = express();

const http = require("http")

const expressServer =  http.createServer(app)


const {Server}=require('socket.io')
const io = new Server(expressServer)


//this is broadcust system

io.on('connection', function () {
    io.sockets.emit('myBroadcast', 'hellow everyOne')
})
















//this is basic rules
// io.on('connection', function (socket){
//     console.log('user conncet ')

    // socket.on(function (msg) {
    //     console.log(msg)
    // })

// socket.on('message',function (msg) {
//     console.log(msg)
// })

    // socket.on('myEvent',function (msg) {
    //     console.log(msg)
    // })

    //this is on real time mean at a time data working real data transfer
    // setInterval(function () {
    //     let d = new Date()
    //     let time = d.getTime()
    //     socket.send(time)
    //
    // }, 10)


    //custom Event parameters
    // setInterval(function () {
    //     let d = new Date()
    //     let t = d.getTime()
    //     socket.emit('myEvent',t)
    //
    // },10)





    // setTimeout(function (){
    //    socket.send('learn with asa socket (server ---> Client)')
    // }, 5000)


    // socket.on('disconnect', function (){
    //     console.log('disconnect')
    // })
    // })

app.get('/', function (req, res){
res.sendFile(__dirname+'/index.html')
})


expressServer.listen(5000, function (){
    console.log('server run at 5000 port ')
})