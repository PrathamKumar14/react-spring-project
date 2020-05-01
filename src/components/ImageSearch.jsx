import React, { useState } from "react";
import "../styles.css";

function ImageSearch({ searchText }) {
  const [text, setText] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            onChange={e => setText(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ImageSearch;
