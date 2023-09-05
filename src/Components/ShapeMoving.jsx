import { useState } from "react";
import initialShapes from "../Data/initialShapes";

function ShapeMoving() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick(e) {
    console.log("render");
    e.stopPropagation();
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>Moving Circle</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape.x,
            top: shape.y,
            borderRadius: shape.type === "circle" ? "50%" : "",
            width: 20,
            height: 20,
          }}
        ></div>
      ))}
    </>
  );
}

export default ShapeMoving;
