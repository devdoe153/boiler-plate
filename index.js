const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { User } = require('./models/User')
const config = require('./config/key')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:false
}).then(()=> console.log('MongoDB Connected....'))
.catch(err => console.log(err , ' Error ...'));

app.get('/', (req, res) => res.send('Hello world!'))

app.post('/register', (req, res) => {
console.log('/register')
    const user = new User(req.body);
    user.save((err, userInfo)=>{
        if(err) return res.json({success: false, err});
        return res.status(200).json({
            success: true
        });


    });
});

app.listen(port, ()=> console.log(`Example app listeing on port  ${port}`))