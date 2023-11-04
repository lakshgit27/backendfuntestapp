import express from "express";


// making our server
const app = express();

app.get('/', (req,res)=>{
    res.send("your server is ready")
});

const port  = process.env.PORT || 3000;

// get a list of 5 jokes 

app.get('/jokes',(req,res)=>{
    // making an array of objects
    const jokes = [
        {
            id: 1,
            title : 'a joke',
            content : 'this is a joke'
        },
        {
            id: 2,
            title : 'another joke',
            content : 'this is another joke'
        },
        {
            id: 3,
            title : 'another joke',
            content : 'this is another joke'
        },
        {
            id: 4,
            title : 'another joke',
            content : 'this is another joke'
        },
        {
            id: 5,
            title : 'another joke',
            content : 'this is another joke'
        },



    ];
    res.send(jokes);

    
})

app.listen(port,()=>{
    console.log(`Serve at https:localhost:${port}`);

// Our server is ready

})  