<body>

<script>
function jsAjax(){
    // Step 1: Define the data request
    var request = new Request('data/airports.geojson');
    //Step 2: define Fetch parameters 
    var init = {
        method: 'GET'
    }
     //Step 3: use Fetch to retrieve the data
     fetch(request, init)
       .then(callback) //Step 4 Send retrieved data to a callback function
};

//define conversion callback function
function conversion(response){
  //convert data to usable form
  return response.json();
}

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response)
}

window.onload = jsAjax();
</script>
</body>