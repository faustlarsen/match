$(document).ready(function() {
  $("#celebrity").submit(function(event) {

let music = $("#music").val();
let movies = $("#movies").val();
let books = $("#books").val();
let celeb
  
  if (music === "Heavy Metal" && movies === "Horror" && books === "Autobiography") {
  celeb = "Darth Vader";
  } else if (music === "Indy" && movies === "Comedy" && books === "Fiction") {
  celeb = "Mr. Nigma";
  } else if (music === "Downtempo" && movies === "Drama" && books === "Sci-Fi") {
  celeb = "Great Gatsby";
  } else (celeb = "Still you")
  $("#celeb").text(celeb);
  $("#result").show();

    event.preventDefault();
  });
});