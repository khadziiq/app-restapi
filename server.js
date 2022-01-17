const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

//parse application/json

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'))
//panggil routes

let routes = require('./routes')
routes(app)

//dafterkan menu routes dari index
app.use('/auth', require('./middleware'))


app.listen(3000, ()=>{
    console.log(`Server started on port`)
})