const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config();
const taskRoutes = require("./routes/task")
const cors = require('cors')

const app = express()
const port = 3001

//middleware

app.use(cors());

//convierte los request json en js objects
app.use(express.json());
//añade /api a todas las rutas
app.use("/api/",taskRoutes);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("conected to MongoDB atlas!!!")
}).catch((error) =>{
    console.log("error")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
