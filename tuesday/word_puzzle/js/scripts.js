


/*
  collect phrase from text area
  store in string

  cycle through string
    match char to list of vowels (a,e,i,o,u)
    if match replace w/ -
*/

var secretPhrase = [];

$(document).ready(function() {

  $("form#collectPhrase").submit(function(event) {

    event.preventDefault();

    var phrase = $("#phraseInput").val();

    $("#cypher").html(phrase);

    for (var i = 0; i < phrase.length; i++)
    {
      console.log("Letter: " + i + " : " + phrase.charAt(i));

      if ( phrase.charAt(i).match(/^[aeiou]$/) )
      {
        console.log("match");
        secretPhrase[i] = " - ";
        // console.log("Letter: " + i + " : " + phrase.charAt(i));
        //console.log("Letter: " + i + " : " + phrase.charAt(i));
      }
      else
      {
        secretPhrase[i] =  phrase.charAt(i);
      }

      console.log(secretPhrase);

    }

    $("#cypher").html(secretPhrase.toString());

  });
});



// function getVowels(str) {
//   var m = str.match(/[aeiou]/gi);
//   return m === null ? 0 : m.length;
//
//
//   function getVowels(str) {
//     var vowelsCount = 0;
//
//     //turn the input into a string
//     var string = str.toString();
//
//     //loop through the string
//     for (var i = 0; i <= string.length - 1; i++) {
//
//     //if a vowel, add to vowel count
//       if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
//         vowelsCount += 1;
//       }
//     }
//     return vowelsCount;
//   }
