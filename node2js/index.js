const express = require('express')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const autheticate = require('./model/authenticate')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const middleware = require('./middleware/middleware')
const cookieParser = require('cookie-parser')
const Session = require('express-session')
const passport = require('passport')
const passportlocal = require('passport-local')
const dbConfig = require('./config/config')
const initializePassport = require('./passport-config/passport-config')



var app = express()

dbConfig.authenticate().then(()=>{
    console.log('database connected');
}).catch(err=> console.log('error' + err))

initializePassport(passport)

app.use(bodyParser.json())

app.use(cors({origin:"http://localhost:3000"}))

app.use(Session({
    secret: "secret",
    resave : true,
    saveUninitialized: true,
}))
app.use(cookieParser("secret"))
app.use(passport.initialize())
app.use(passport.session())

app.post('/signup', async function(req, res){
    var user = await autheticate.findOne({where: {username : req.body.username}})
    if(user!=null)
    {
        res.status(400).send('user already registered')
    }else{var password = await bcrypt.hash(req.body.password, 10)
    
     var username = req.body.username
     await autheticate.create({
         username,
         password
     }).then(result => console.log(result))
     res.status(200).send()}
    
    
 })

app.post("/login",function(req, res , next){
    passport.authenticate("local",(err, user, info) => {
        if(err)throw err;
        if (!user) res.send("invalid user");
        else{
            req.logIn(user, (err) => {
                if (err) throw err
            res.send("successfully authenticated")
        console.log(req.user);}
             );}
    }) (req,res,next);

    
})
app.post("/checkproduct",middleware,(req,res)=>{
    console.log("hello this is product");
    res.send("this is product window")
})
app.post("/saveproduct",checkAuthentication ,(req, res)=> {
    console.log("save product");
    if (req.user) {
                     res.send("authorized")         
    }else{
        res.send("unauthorize access")
    }
}) 
function checkAuthentication(req,res,next){
    if(req.isAuthenticated()) {
        res.send("successful")
    }
}

app.listen(9000, ()=> console.log("server is running"))