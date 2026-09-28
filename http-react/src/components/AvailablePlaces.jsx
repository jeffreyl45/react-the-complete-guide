import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import ErrorPage from './Error.jsx'

// access data synchronously
localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  // fetch function provided by browser used to send HTTP request to another server
  // then: execute a function after fetch is finished
  //const response = await fetch('http://localhost:3000/places').then((response) => );
  // requires the function to have async but not possible with component function
  useEffect(() => {


    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        // check success or error in response
        if (!response.ok) {  // 200, 300 status code is success, 400, 500 is error
          throw new Error('Failed to fetch places');
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({message: error.message || 'Could not fetch places, please try again later'});
      }
      // wait for the Promise to finish then get result
      setIsFetching(false);
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

  if (error) {
    return <ErrorPage title="An error occured!" message={error.message} />;
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
