import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "./components/Card";
import ImageSearch from "./components/ImageSearch";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=15999269-626b46d15cba1aa1e0f2fe875&q=${term}&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageSearch searchText={text => setTerm(text)} />
      {!isLoading && images.length === 0 && <h1>Oops!! Nothing found</h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {images.map(image => (
            <Card image={image} />
          ))}
        </div>
      )}
    </div>
  );
}
