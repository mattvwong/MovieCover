$(document).ready(function () {
  //enter a movie title
  //click search
  //get the value of the user's search
  //pass to our api
  //clear search

  $("form").submit(function () {
    event.preventDefault();

    var usersSearch = $("#search").val();
    var options = {
      type: "GET",
      url: "https://www.omdbapi.com",
      data: {
        apikey: "54f3ec2a",
        s: usersSearch,
      },
    };

    $.ajax(options).done(displaySearches);
  });

  var displaySearches = function (data) {
    $("ul").empty();
    $("#search").val("");

    data.Search.forEach(function (movie) {
      var movieImage = $("<img>").attr("src", movie.Poster);

      var listItem = $("<li>").append(movieImage);

      $("ul").append(listItem);
    });
  };
});
