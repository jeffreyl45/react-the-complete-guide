import { useState, useEffect } from "react";

import Places from "./Places.jsx";

// access data synchronously
localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // fetch function provided by browser used to send HTTP request to another server
  // then: execute a function after fetch is finished
  //const response = await fetch('http://localhost:3000/places').then((response) => );
  // requires the function to have async but not possible with component function
  useEffect(() => {
    async function fetchPlaces() {
      // wait for the Promise to finish then get result
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json()
      setAvailablePlaces(resData.places);
    }

    fetchPlaces();
  
  
    // fetch only executes if dependencies change
    // empty array means only execute once right after the component function executes
    /*fetch("http://localhost:3000/places")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setAvailablePlaces(resData.places);
      });*/
  }, []);

  // fetch returns Promise which eventually returns another object

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
