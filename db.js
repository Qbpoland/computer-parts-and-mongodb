const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://qbpoland:qb123456@parts.q3iy541.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp', {useNewUrlParser: true, useUnifiedTopology: true});

const partSchema = new mongoose.Schema({
    Part: String,
    price: Number
  });
  
  const Part = mongoose.model('Part', partSchema);

  function connect() {
    return mongoose.connect('mongodb+srv://qbpoland:qb123456@parts.q3iy541.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp', {useNewUrlParser: true, useUnifiedTopology: true});
  }
  
  async function addPart(Part, price) {
    const part = new Part({
      part_name,
      price
    });
    return await part.save();
  }
  
  async function deletePart(id) {
    return await Part.findByIdAndRemove(id);
  }
  
  async function listParts() {
    return await Part.find();
  }
  
  module.exports = {
    connect,
    addPart,
    deletePart,
    listParts
  };
  