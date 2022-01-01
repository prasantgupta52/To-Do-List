const mongoose = require('mongoose');

const usertodo = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
    default: "Sample Todo"
  },
  Description: {
    type: String,
    required: true,
    default: "This is a simple sample Todo"
  },
  modifiedOnDate: {
    type: Date,
    default: Date.now
  }
});
//  mongoose.model(userid, usertodo);

module.exports = function (userid) {
  const collectionName = `${userid}`;
  const model = mongoose.model(collectionName, usertodo);
  return model;
}
// module.exports = todoSchema;