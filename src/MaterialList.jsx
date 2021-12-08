import React, { useRef, useState } from "react";
import Typography from "@material-ui/core/Typography"; // Please note that these components are MUI v4.1, using v5 components will not work correctly.

import materials from "./materials.json";

import Cart from "./components/Cart";

import "./MaterialList.css";

export default function MaterialList() {
  // Utilities

  const materialsArray = [...materials.materials];

  const selectedItemArray = [];

  // Content State

  const [propsData, setPropsData] = useState([]);

  // Effects

  // Functions

  const handleClick = (id, img, name) => {
    const selectedItem = {
      id: id,
      img: img,
      name: name,
      quantity: 1,
    };

    setPropsData((selectedItemArray) => {
      const newArray = [...selectedItemArray, selectedItem];

      const uniqueArray = Array.from(
        new Set(newArray.map((item) => item.id))
      ).map((id) => {
        return newArray.find((item) => item.id === id);
      });

      return uniqueArray;
    });
  };

  const handleDelete = (id) => {
    setPropsData((prevItems) => {
      return prevItems.filter((item) => id !== item.id);
    });
  };

  // Render
  return (
    <div className="page-container">
      <div className="display-container">
        {materialsArray.map((material) => (
          <div key={material.id} className="item">
            <img src={`./img/${material.imageName}`} alt={material.imageName} />
            <div className="item-right-side">
              <h2 name={material.displayName}>{material.displayName}</h2>
              <button
                onClick={() =>
                  handleClick(
                    material.id,
                    material.imageName,
                    material.displayName
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <Cart propsData={propsData} handleDelete={handleDelete} />
    </div>
  );
}
