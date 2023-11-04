const express = require('express')
// The above one is a require module syntax. Similarly, we can also use 
// import { Express } from 'express'


// express ko ek variable (app ) mei store kr liya. 
const app = express()

// almost 65 k virtual ports hai ussme se yeh free port hai jaha par humara server listen karega
const port = 3000

// app aap ko request aati hai agar slash par toh usse handle karna hai. Ek call back fire hoga jisme 2 parameter honge (request, response) jo bhi req. aati hai uska res. hum hello world send kar denge
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('laksh yadav')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login here</h1>')
})

app.get('/youtube' , (req,res)=>{
    res.send("<h2>Chai aur Laksh</h2>")
})

// Listen bhi ek variable hai jisme saari power app se aati hai. Port mei hai 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})