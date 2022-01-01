// from data.js
var tableData = data;

// console.log(data); //Printing data in console

// Use a form
// Define a function (filterFunction) that will search through the date/time column to find rows that match user input
// Find the tag to the button and linked it to the function

var unique_datetime = [];
var unique_city = [];
var unique_state = [];
var unique_country = [];
var unique_shape = [];

tableData.forEach((sighting) => {
    if (unique_datetime.includes(sighting.datetime) == false){
        unique_datetime.push(sighting.datetime);
    };
    if (unique_city.includes(sighting.city) == false){
        unique_city.push(sighting.city);
    };
    if (unique_state.includes(sighting.state) == false){
        unique_state.push(sighting.state);
    };
    if (unique_country.includes(sighting.country) == false){
        unique_country.push(sighting.country);
    };
    if (unique_shape.includes(sighting.shape) == false){
        unique_shape.push(sighting.shape);
    };
});

console.log(unique_datetime);
console.log(unique_city);
console.log(unique_state);
console.log(unique_country);
console.log(unique_shape);

function filterFunction(){

    d3.event.preventDefault(); //To avoid refreshing the page after hitting ENTER.

    var tbody = d3.select("tbody"); // Get a reference to the table body

    tbody.selectAll("tr").remove() // Clearing the table before rendering again

    var inputDate = Date.parse(d3.select("#datetime").property("value"));
    // d3.select("h1").text(inputDate);
    // console.log(inputDate);

    var filterData = tableData.filter(function(sighting){
        return Date.parse(sighting.datetime) == inputDate
    });

    
    filterData.forEach((date) => {
        var row = tbody.append("tr");
        row.append("td").text(date.datetime);
        row.append("td").text(date.city);
        row.append("td").text(date.state);
        row.append("td").text(date.country);
        row.append("td").text(date.shape);
        row.append("td").text(date.durationMinutes);
        row.append("td").text(date.comments);
    });
    
};


// Button id is "#filter-btn"
d3.select("#filter-btn").on("click", filterFunction); // Call filterFunction when clicking the button.
d3.select("form").on("submit", filterFunction); // Call filterFunction when hitting enter.
