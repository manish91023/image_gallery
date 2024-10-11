// E:\ImageGallery\Model\galery.js

import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String
    }
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    }
  ]
});

export const Gallery = mongoose.model('Gallery', imageSchema);

