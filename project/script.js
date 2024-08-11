const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const Mydata=require("./models/MydataShema")
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res) => {
  res.sendFile('./project/views/shared/Home.html', { root: __dirname });
})
//post method
app.post('/', (req, res) => {
    console.log(req.body)
   const data=new Mydata(req.body)
   data.save()
   .then(()=>{res.redirect('./views/succes.html')})
   .catch((err)=>{console.log(err)})
  })

mongoose.connect('mongodb+srv://Ahmed_Khaled_Maher:kQ76WlGphJE2vlEU@cluster0.atljk.mongodb.net/collection?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
  })   }).catch((err)=>{console.log(err) }) 