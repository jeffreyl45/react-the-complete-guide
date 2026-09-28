export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  // check success or error in response
  if (!response.ok) {
    // 200, 300 status code is success, 400, 500 is error
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}
