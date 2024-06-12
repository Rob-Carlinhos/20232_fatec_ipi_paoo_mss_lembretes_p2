
require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express();
app.use(express.json())

const logs = {}
let id = 1

app.post('/eventos', (req, res) => {
  try{
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    
    logs[id] = {
        type: "Observacao criada",
        data: date + "/" + time 
    }
    id++
  }
  catch(e){}
  res.status(200).end() 
})

app.get('/logs', (req, res) => res.send(logs))
  
app.listen(
  process.env.PORT,
  () => console.log(`Logs: ${process.env.PORT}`)
)