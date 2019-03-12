//from data.js
var tableData = data;

filterData.forEach(function(ufo){

 d3.select("#ufo-table").html("");

 var row = tbody.append("tr");

 Object.entries(ufo).forEach(function([key, value]){

   var cell = row.append("td");

   cell.text(value);
 });
   function handleClick() {

     d3.event.preventDefault();

     var text = d3.select("#datetime").property("value");

     if (datetime){
       filterData = tableData.filter(event => event.datetime === text)
     }
     tableData(filterData);
   };

});

// some code that only executes when the input line is changed

d3.selectAll("#filter-btn").on("click", handleClick);