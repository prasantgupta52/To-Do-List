const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");

const app = express();

// importing user model schema from user.js
const userModel = require("./models/user")  

app.use(express.json());
app.use(cors());
// connecting to cluster in mogodb atlas inserting password and database name
mongoose.connect("mongodb+srv://ToDoList:managedata@cluster0.81bae.mongodb.net/DataForToDo?retryWrites=true&w=majority",{
  useNewUrlParser: true,
})




app.post('/insert', async (req,res)=>{
  // get email variable
  
  const email = req.body.email;
  const password = req.body.password;
  const cpassword = req.body.cpassword;
  
  const user = new userModel({
    email: email,
    password: password,
    cpassword: cpassword
  });
  try {
    await user.save();
    res.send("inserted data into database ")
  } catch (err) {
    console.log("error found error details: "+err);
  }
})





app.get('/fetch/:email', async (req,res)=>{
  const getemail = req.params.email

  try {
    await userModel.find({email:getemail},(err,result) => {
      if (err) {
        res.send(err)
      }
      res.send(result);
    })
  } catch (err) {
    console.log(err);
  }
})




app.put('/update', async (req,res)=>{
  // get email variable
  
  const email = req.body.email;
  const password = req.body.password;
  const cpassword = req.body.cpassword;

  
  const user = new userModel({
    email: email,
    password: password,
    cpassword: cpassword
  });
  try {
    await user.save();
    res.send("inserted data into database ")
    console.log(email+" "+password+" "+cpassword);
  } catch (err) {
    console.log("error found error details: "+err);
  }
})




// database server running on port 3001
app.listen(3001,()=>{
  console.log('server running on port 3001...!');
})