const express = require('express');
const morgan = require('morgan')
const app = express();
const dbConnection = require('./config/db')
const userModel = require('./models/user')

app.use(morgan('dev'))

//built in middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.set("view engine",'ejs');

// Custom Middleware 

// app.use((req ,res, next) => {
//     console.log("This is a middleware")
//     const a = 2;
//     const b = 3;
//     console.log(a+b)
//     return next()
// })


app.get('/', (req,res) => {
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})
app.get('/Profile',(req,res)=>{
    res.send("Profile Page")
})


app.get('/register', (req,res) => {
    res.render('register')
})


app.post('/register', async (req,res)=>{
    
    const{username, email, password} = req.body //destructuring
    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(newUser)
})

app.get('/get-users',(req,res) => {
    // userModel.find({
    //     username: 'b'
    // }).then((users)=>{
    //     res.send(users)
    // })

    // userModel.findOne({
    //     username: 'a'
    // }).then((user) => {
    //     console.log(user)
    //     res.send(user)
    // })
})

app.get('/update-user',async(req,res) =>{
    await userModel.findOneAndUpdate({
        username: 'nikhil'
    },{
        email:'c@cgmail.com'
    })

    res.send("user Updated")
})

app.get('/delete-user', async (req,res) =>{
    await userModel.findOneAndDelete({
        username:'nikhil'
    })
    res.send("User Deleted")
})

app.post('/get-form-data',(req,res) => {
    console.log(req.body)
    res.send('Data received')
})


app.listen(3000)