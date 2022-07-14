import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = (id) => {
    const newToursList = tours.filter((item) => item.id !== id);
    setTours(newToursList);
  };
  const fetchData = () => {
    setLoading(false);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTours(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (tours.length == 0) {
    return (
      <>
        <main>
          <div className="title">
            <h2>no tours left</h2>
            <button
              className="btn"
              onClick={() => {
                fetchData();
              }}
            >
              Refresh
            </button>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
