// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

data.forEach(function(ufo){
  // Step 1: Loop Through `data` and console.log each object
  console.log(ufo);
  // Step 2:  Use d3 to append one table row `tr` for each report object
  var row = tbody.append("tr");
  // Step 3:  Use `Object.entries` to console.log each  report value

  Object.entries(ufo).forEach(function([key, value]){
    console.log(key, value);
    // Step 4: Use d3 to append 1 cell per report value 
    var cell = row.append("td");

    // Step 5: Use d3 to update each cell's text with
    cell.text(value);
  });
});

