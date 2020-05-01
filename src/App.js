import React, { useState, useEffect } from "react";
import "./styles.css";
import Card from "./components/Card";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=15999269-626b46d15cba1aa1e0f2fe875&q=chess&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        console.log(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term]);

  return (
    <div className="App">
      <input type="text" placeholder="Search" />
      <br />
      <button type="submit">Submit</button>
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
