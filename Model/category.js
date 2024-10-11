// E:\ImageGallery\Model\Category.js

import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;