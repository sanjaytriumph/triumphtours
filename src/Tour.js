import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  console.log(id);
  const [readMore, setReadMore] = useState(false);
  const readMoreClick = () => {
    setReadMore(!readMore);
  };
  return (
    <>
      <section>
        <div>
          <div className="single-tour">
            <img src={image} alt={name} />
            <footer>
              <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
              </div>
              <p>
                {readMore ? info : `${info.substring(0, 200)}...`}
                <button onClick={readMoreClick}>
                  {readMore ? "Show Less" : "Read More"}
                </button>
              </p>
              <button
                className="delete-btn"
                onClick={() => {
                  removeTour(id);
                }}
              >
                Not interested
              </button>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tour;
