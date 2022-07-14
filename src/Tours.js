import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  console.log(removeTour);

  return (
    <>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {tours.map((item) => {
        return <Tour key={item.id} {...item} removeTour={removeTour} />;
      })}
    </>
  );
};

export default Tours;
