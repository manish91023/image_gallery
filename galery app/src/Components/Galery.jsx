import axios from "axios";
import React, { useEffect, useState } from "react";

const Galery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query,setQuery]=useState('')

  const fetchImages = async (pageNum) => {
    // Configure Axios base URL
    try {
      const response = await axios.get(
        `http://localhost:3000/get/all-image?page=${pageNum}&limit=10`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      if (response.data.imageData.length > 0) {
        
        setImages((prevImages) => [...prevImages, ...response.data.imageData]); // Append new images
      } else {
        console.log("No more images to load");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchImages(1);
  }, []);

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setPage(nextPage); // Increment the page number
    fetchImages(nextPage); // Fetch the next page
  };

  return (
    <div className="p-8">
      <div className="mb-8 ">
        <div className="flex w-full bg-green-800 p-4 border rounded-md  justify-around shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-4 border rounded-md "
            onChange={(e)=>setQuery(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {images.filter((image) => 
    image.title.toLowerCase().includes(query) || 
    image.description.toLowerCase().includes(query)
  ).map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <img
              src={image.imageUrl}
              alt="Gallery Item"
              className="w-full h-48 object-cover hover:scale-[2] transition-transform"
            />

            <div className="p-4">
              <h5 className="text-lg font-semibold">{image.title}</h5>
              <p className="text-sm text-gray-600">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={loadMoreImages}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition-colors"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Galery;
