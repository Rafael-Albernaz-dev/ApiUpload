const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const PostSchema = new mongoose.Schema({
  name: String,
  size: String,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now
  }

});

PostSchema.pre('save', function() {
  if(!this.url) {
    this.url = `https://api-image-upload.herokuapp.com//files/${this.name}`
  }
})

PostSchema.pre('remove', function() {
  
});

module.exports = mongoose.model("Post", PostSchema);