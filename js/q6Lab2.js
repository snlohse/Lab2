// Step 1: Create the data request
// Make sure you update the path to your data JSON file correctly
var request = new Request('https://raw.githubusercontent.com/snlohse/Lab2/refs/heads/main/data/airports.json'); // Modify with your correct file location

// Step 2: Define Fetch parameters (not necessary for this simple request, but included for clarity)
var init = {
  method: 'GET' // Default GET method is sufficient
};

// Step 3: Use Fetch to retrieve the data and set up callback functions
fetch(request, init)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();  // Convert the response to JSON format
  })
  .then(callback) // Send the converted data to the callback function
  .catch(error => {
    console.error('Error fetching the data:', error);
    alert('Error: ' + error.message);  // Show the error message in an alert for easier debugging
  });

// Callback function to process the data
function callback(response) {
  // Access the 'features' array from the response
  const airports = response.features;  // 'features' contains the list of airport objects

  // Step 4: Count the total number of airports
  const totalAirports = airports.length;

// Step 5: Count the number of civilian airports
// Here, we are assuming that airports with type 'small', 'mid', and 'major' are civilian
const civilianAirports = airports.filter(airport => 
  ['small', 'mid', 'major'].includes(airport.properties.type)
).length;


  // Step 6: Output the results to the console
  console.log('Total Airports: ' + totalAirports);
  console.log('Civilian Airports: ' + civilianAirports);
}
