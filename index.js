const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://devdoe153:qwe123@cluster0.h7zum.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected....'))
.catch(err => console.log(err+ ' Error ...'));

app.get('/', (req, res) => res.send('Hello world!'))

app.listen(port, ()=> console.log(`Example app listeing on port  ${port}`))