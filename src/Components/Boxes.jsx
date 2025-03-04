import React from "react";
import Box from "./Box";

const Boxes = ({ boxes, activeBoxes }) => {
  return (
    <div>
      {boxes.map(
        (box) =>
          activeBoxes.includes(box.id) && (
            <div key={box.id}>
              {box.title} <strong>on</strong>
            </div>
          )
      )}
    </div>
  );
};

export default Boxes;
