// Need to add this functionality
var records = $("#numRecords").val().trim();
// Input fields
var search = $("#searchTerm").val().trim();
var sYear = "&begin_date=" + String($("#startYear")).val().trim() + "0101";
var eYear = "&end_date=" + String($("#endYear")).val().trim() + "1231";
// Buttons
var searchBtn = $(".btn-outline-success");
var clearBtn = $(".btn-outline-danger");
// Div
var topArticles = $("#topArticles")

var apiKey = "D3EAWzjhRflruhSt5r8LbpFpp8yuV3VA"
var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}${sYear}${eYear}&api-key=${apiKey}`


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})