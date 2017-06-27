const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  id: String,
  title: String,
  content: String,
  done: Boolean,
  labels: String,
})

mongoose.model('todo', TodoSchema);
