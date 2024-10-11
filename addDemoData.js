import mongoose  from "mongoose";
import {Gallery} from './Model/galery.js'
import dotenv from "dotenv"
dotenv.config()
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

async function addDocuments() {
  try {
    const categories = ['Nature', 'Cityscapes', 'Portraits', 'Landmarks', 'Abstract'];
    
    for (let i = 0; i < 50; i++) {
      const galleryItem = new Gallery({
        title: `Image ${i+1}`,
        description: `This is a beautiful image of ${categories[Math.floor(Math.random() * categories.length)]}.`,
        imageUrl: `https://picsum.photos/200/300?random=${Math.random()}`,
        tags: Array.from({length: Math.floor(Math.random() * 5) + 1}, (_, index) => `tag${index + 1}`),
        categories: [
          new mongoose.Types.ObjectId(),
          new mongoose.Types.ObjectId(),
          new mongoose.Types.ObjectId()
        ]
      });
      
      await galleryItem.save();
      console.log(`Added document ${i+1}`);
    }
    
    console.log('All documents added successfully');
  } catch (error) {
    console.error('Error adding documents:', error);
  } finally {
    mongoose.disconnect();
  }
}

addDocuments();