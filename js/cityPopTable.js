<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>City Population Table</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 8px;
            text-align: left;
        }
    </style>
</head>
<body>

    <!-- This is where the table will be inserted -->
    <div id="mydiv"></div>

    <script>
        // Arrays containing city names and populations
        const cities = ["Austin", "Dallas", "Houston", "San Antonio", "Fort Worth"];
        const populations = [964254, 1341075, 2328000, 1547253, 935508];

        // Function to generate an HTML table and append it to the div with id 'mydiv'
        function generateTable(cities, populations) {
            // Create the table element
            let table = document.createElement('table');

            // Create the header row
            let headerRow = table.insertRow();
            let cityHeader = headerRow.insertCell();
            let populationHeader = headerRow.insertCell();
            cityHeader.innerHTML = "City";
            populationHeader.innerHTML = "Population";

            // Loop through the cities and populations arrays
            for (let i = 0; i < cities.length; i++) {
                // Create a new row for each city-population pair
                let row = table.insertRow();
                let cityCell = row.insertCell();
                let populationCell = row.insertCell();

                // Add the city and population to the table cells
                cityCell.innerHTML = cities[i];
                populationCell.innerHTML = populations[i];
            }

            // Get the div with id 'mydiv' and append the table
            document.getElementById("mydiv").appendChild(table);
        }

        // Call the function to generate the table
        generateTable(cities, populations);
    </script>

</body>
</html>