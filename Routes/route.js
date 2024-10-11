import express from "express";
export const router = express.Router();
import { Gallery } from "../Model/galery.js";

router.get("/get/all-image", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default limit of 10 images
    const skip = (page - 1) * limit; // Skip images based on the page number

     // Fetch images with pagination
     const imageData = await Gallery.find().skip(skip).limit(limit);
     res.set('Content-Type', 'application/json');
     res.status(200).json({ imageData });


  } catch (error) {
    console.log(error)
  }
 
});

router.post("/addImage", async (req, res) => {
  res.send("image added");
});
