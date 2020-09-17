// from data.js
var tableData = data;
var tbody = d3.select("tbody");

var filterbutton = d3.select("#submitbutton");

var filterenter = d3.select("#form-control");

filterbutton.on("click", runValue);
filterenter.on("submit", runValue);
 
function runValue() {
    tbody.html("");
    d3.event.preventDefault();
    var inputElement = d3.select("#datebox");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    d1 = Date.parse(inputValue)
    data.forEach(function(sighting) {
        d2 = Date.parse(sighting.datetime)
        if (d1 === d2) {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(function([key, value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
        })}
    })
};