var mongoose  =  require('mongoose');

function todoSchema(userid) {
    var usertodo = new mongoose.Schema({
        todo : {
          type : String, 
          required : true,
          default: "this is a simple sample todo"
        },
        modifiedOnDate : {
          type : Date,
          default: Date.now
        }
    });
    return mongoose.model(userid, usertodo);
}

module.exports = todoSchema;