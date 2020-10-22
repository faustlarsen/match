$(document).ready(function() {
  $("#celebrity").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const music = $("#music").val();
    const movies = $("#movies").val();
    const books = $("#books").val();
    const results = $("#boom");
    let score = 0;
  //Music condition 
  if (music === "Heavy Metal") {
    score += 2;
  } else {
    score += 1;
  }

  //Movies condition 
  if (movies === "Horror") {
    score += 2;
  } else {
    score += 1;
  }

  //Books condition 
  if (books === "Autobiography") {
    score += 2;
  } else {
    score += 1;
  }



  if (score % 2 == 0) {
    results.text("Pokemon");
  } else {
    results.text("Pikachu");
  }


  });
});




/*
  if (music === "Heavy Metal" && movies === "Horror" && books === "Autobiography") {
  celeb = "Darth Vader";
  } else if (music === "Indy" && movies === "Comedy" && books === "Fiction") {
  celeb = "Mr. Nigma";
  } else if (music === "Downtempo" && movies === "Drama" && books === "Sci-Fi") {
  celeb = "Great Gatsby";
  } else (celeb = "YOU")

  $(".name").text(name);
  $("#celeb").text(celeb);
  $("#result").show();
*/
