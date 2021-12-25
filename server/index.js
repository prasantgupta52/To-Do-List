const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
// importing user model schema from user.js
const userModel = require("./models/user")
const userTodo = require("./models/usertodo")

const app = express();

app.use(express.json());
app.use(cors());

// connecting to cluster in mogodb atlas inserting password and database name
mongoose.connect("mongodb+srv://ToDoList:managedata@cluster0.81bae.mongodb.net/DataForToDo?retryWrites=true&w=majority",{
  useNewUrlParser: true,
})

app.post('/insert', async (req,res)=>{

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

app.get('/fetchaccount/:email', async (req,res)=>{

  const getemail = req.params.email;

  try {
    await userModel.find({email:getemail},(err,result) => {
      if (err) {
        res.send(err)
      } else {
        res.send(result);
      }
    }).clone();
  } catch (err) {
    console.log( "error in usermodel.find"+err);
  }
})

app.post('/usertodo/:userid', async (req,res)=>{

  const userid = req.params.userid;

  var userTodoSchema = userTodo(userid);
  const user = new userTodoSchema({});
  try {
    await user.save();
    res.send("inserted data into database ")
    console.log("inserted succesfullly in new user todo ");
  } catch (err) {
    console.log("error found error details: "+err);
  }
})

app.post('/addtodo/:userid', async (req,res)=>{
  
  const userid = req.params.userid;
  const Title = req.body.Title;
  const Description = req.body.Description;
  
  var userTodoSchema = userTodo(userid);
  const user = new userTodoSchema({
    Title: Title,
    Description: Description
  });
  try {
    await user.save();
    res.send("inserted data into database ")
    console.log("inserted succesfullly in new todo ");
  } catch (err) {
    console.log("error found error details: "+err);
  }
})

app.delete('/deletetodo/:userid/:todoid', async (req,res)=>{
  
  const todoid = req.params.todoid;
  const userid = req.params.userid;
  var userTodoSchema = userTodo(userid);
  try{
    await userTodoSchema.findByIdAndDelete(todoid, (error, data) => {
      if (error) {
          console.log('error in deleting!');
          throw error;
      } else {
          console.log('todo has been deleted', data);
          res.status(204).json(data);
      }
    }).clone();
  } catch (err) {
    console.log("prblm in dlt "+err);
  }
})

app.put('/updatetodo/:userid/:todoid', async (req,res)=>{
  
  const todoid = req.params.todoid;
  const userid = req.params.userid;
  const date = new Date();
  const newTitle = req.body.Title;
  const newDescription = req.body.Description;
  var userTodoSchema = userTodo(userid);
  try{
    await userTodoSchema.updateOne({_id:todoid},{
      Title: newTitle,
      Description: newDescription,
      modifiedOnDate: date
    });
  } catch (err) {
    console.log("prblm in update "+err);
  }
})

app.get('/fetchtodos/:userid', async (req,res)=>{
  
  const userid = req.params.userid;
  var userTodoSchema = userTodo(userid);

  try {
    await userTodoSchema.find({},(err,result) => {
      if (err) {
        res.send(err)
      } else {
        res.send(result);
      }
    }).clone();
  } catch (err) {
    console.log( "error in usermodel.find"+err);
  }
})

// database server running on port 3001
app.listen(3001,()=>{
  console.log('server running on port http://localhost:3001 ..!');
})