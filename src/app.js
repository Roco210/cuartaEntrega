import express  from "express";
import { __dirname } from "./utils.js";
import { engine } from 'express-handlebars';
import productsRouter from './routes/products.router.js';
import cartsRouter from "./routes/carts.router.js";
import viewsRouter from "./routes/views.router.js"
import { Server } from "socket.io";
import {prodManager} from "./utils.js"

const app= express()
const PORT =8080
const prod=prodManager()
const allProds = await prod.getProducts()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))
app.use('/api/products',productsRouter)
app.use('/api/carts',cartsRouter)
app.use('/',viewsRouter)

app.engine('handlebars', engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

const httpServer= app.listen(PORT,()=>{
    console.log(`listening port ${PORT}`)
})

const socketServer= new Server(httpServer)

socketServer.on('connection', (socket)=>{
    console.log(`Se conecto ${socket.id}`)

    socket.on('disconnect',()=>{console.log(`Se desconecto ${socket.id}`)})
    socketServer.emit('allProds',allProds)
    
})


