
var search = $("#searchTerm");
// Need to add this functionality
var records = $("#numRecords");
var sYear = "&begin_date=" + $("#startYear") + "0101";
var eYear = "&end_date=" + String($("#endYear")) + "1231";
var searchBtn = $(".btn-outline-success");
var clearBtn = $(".btn-outline-danger");
var topArticles = $("topArticles")


var apiKey = "D3EAWzjhRflruhSt5r8LbpFpp8yuV3VA"
var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}${sYear}${eYear}&api-key=${apiKey}`


$.ajax({
    url: queryURL,
    method: "get"
}).then(function(response){
    console.log(response);
})