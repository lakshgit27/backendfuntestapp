require('dotenv').config();




const express = require('express')
// The above one is a require module syntax. Similarly, we can also use 
// import { Express } from 'express'


// express ko ek variable (app ) mei store kr liya. 
const app = express()

// almost 65 k virtual ports hai ussme se yeh free port hai jaha par humara server listen karega
const port = 3000

const githubData = {
    "login": "lakshgit27",
    "id": 119226509,
    "node_id": "U_kgDOBxtAjQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/119226509?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/lakshgit27",
    "html_url": "https://github.com/lakshgit27",
    "followers_url": "https://api.github.com/users/lakshgit27/followers",
    "following_url": "https://api.github.com/users/lakshgit27/following{/other_user}",
    "gists_url": "https://api.github.com/users/lakshgit27/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/lakshgit27/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/lakshgit27/subscriptions",
    "organizations_url": "https://api.github.com/users/lakshgit27/orgs",
    "repos_url": "https://api.github.com/users/lakshgit27/repos",
    "events_url": "https://api.github.com/users/lakshgit27/events{/privacy}",
    "received_events_url": "https://api.github.com/users/lakshgit27/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 18,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2022-11-27T16:48:53Z",
    "updated_at": "2023-11-04T10:19:40Z"
  }

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

app.get('/github' , (req,res)=>{
    res.json(githubData)
})

// Listen bhi ek variable hai jisme saari power app se aati hai. Port mei hai 
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})