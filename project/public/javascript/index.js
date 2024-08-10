// const express = require('express')
// const mongoose = require('mongoose');
// const app = express()
// const port = 3000
// //app.set('view engine','ejs')
// app.get('/', (req, res) => {

//   res.sendFile('./views/Users.html',{ root: __dirname })
 
  
// })

// app.listen(port, () => {

//   console.log(`http://localhost:${port}/`)
// })
//mongoose.connect('mongodb+srv://nYLtrsSJIg7CdUZG:rR5zJdZDljOLLUiP@cluster0.dnjw4bw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')//.then(()=>{app.listen(port, () => {
 // console.log(`http://localhost:${port}/`)
//})})//.catch((err)=>{console.log(err)});
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true}));
app.set('view engine','ejs');
app.use(express.static('public'))
const path = require("path");
const livereload=require("livereload");
const livereloadSerever=livereload.createServer();
livereloadSerever.watch(path.join(__dirname, '/public'));
const connectLive =require("connect-livereload");
app.use(connectLive());
livereloadSerever.server.once("connection", ()=> {
  setTimeout(() => {
    livereloadSerever.refresh('/');
  }, 100);
});

const MyData=require("./models/Database_Schema")
app.get('/', (req, res) => {
 MyData.find()
 .then((reslut) => {
  res.render("Home", {MyTitle: "testPage", arr: reslut})
 })




  
})
app.get('/views/LoginForm.ejs', (req, res) => {
 
   res.render("LoginForm")
  })
  app.get('/views/RegisterationForm.ejs', (req, res) => {
 
    res.render("RegisterationForm")
   })
   app.get('/views/UserPage.ejs', (req, res) => {
 
    res.render("UserPage")
   })
   app.get('/views/AdminPage.ejs', (req, res) => {
 
    res.render("AdminPage")
   })
   app.get('/views/AddDevice.ejs', (req, res) => {
 
    res.render("AddDevice")
   })
   app.get('/views/DeleteDevice.ejs', (req, res) => {
 
    res.render("DeleteDevice")
   })
   app.get('/views/Users.ejs', (req, res) => {
 
    res.render("Users")
   })
   app.get('/views/DeleteUser.ejs', (req, res) => {
 
    res.render("DeleteUser")
   })
   app.get('/views/AddanAdmin.ejs', (req, res) => {
 
    res.render("AddanAdmin")
   })
// app.listen(port, () => {
//   console.log(`http://localhost:${port}/`)
// })

 mongoose.connect('mongodb+srv://nYLtrsSJIg7CdUZG:rR5zJdZDljOLLUiP@cluster0.dnjw4bw.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
 .then(() => {
   app.listen(port, () => {
   console.log(`http://localhost:${port}/`)
 })})
 .catch((err) => {console.log(err)});


 app.post('/views/LoginForm.ejs', (req, res) => {
  //res.sendFile("./views/RegisterationForm.html",{ root: __dirname })
  console.log(req.body)
  const myData= new MyData(req.body);
  myData.save()
 // res.redirect("/views/test.html")
})
app.post('/AddDevice.ejs', (req, res)=>{
  const deviceName = req.body.Name;
  const devicePrice = req.body.Price;
  const deviceHDD = req.body.HDD;
  const deviceRAM = req.body.RAM;
  const deviceSCRNSPC = req.body.ScreenSpace;
  const devicePhoto = req.body.Photo;

  const Device = require('/Data/data');

  const newDevice = new Device({
    Name: deviceName,
    Price: devicePrice,
    HDD: deviceHDD,
    RAM: deviceRAM,
    ScreenSpace: deviceSCRNSPC,
    Photo: devicePhoto,
  });

  newDevice.save()
  .then(()=> res.send('Device saved successfully!'))
  .catch(err => res.status(400).send('Error: '+ err));

  
});

app.listen(port, () => {
  console.log('Server is running on port '+ port)});