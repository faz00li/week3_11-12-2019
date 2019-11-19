


// if word starting w/ vowel concat "way" to end of word

// * if word starts w/consonant
//   * remove all letters leading up to first vowel, concat to end of word, concat ay to end of word
//   * words starting w/ are consonant
//   * letters qu travel together

/* algorithm

check if word starts w/ vowel

Y - concat() "way"

starts w/ consonant
  read up to first vowel, save each character

*/

/* UNIT TESTS

  * a
  * e
  * i
  * o
  * u
  * ab
  * abb
  ------ true

  * ba
  * bbb
  * case
  ------ false

 */
function isVowel(string) {

  if (string.charAt(0).match(/^[aeiou]$/))
  {
    return true;
  }
  else
  {
    return false;
  }
}

/* UNIT TESTS

  bob -> bobway

*/
function addWay(string) {

  return string.concat("way");

}

/* UNIT TESTS

  * bob -> bobay

 */
function addAy(string){

  return string.concat("ay");

}

/* UNIT TESTS

  presence of vowel
  * a -> 0
  * ba -> 1
  * bba -> 2
  * bbbaa -> 3
  * aaa -> 0

  absence of vowel
  * b -> -1
  * bbb -> -1

  presence of q + qu
  *q -> -1
  *qu -> -1
  *bqu -> -1
  *que -> 2
  *phrquase -> 5
  *phquery -> 4


*/
function findFirstVowel(string) {

  for (var i = 0; i < string.length; i++)
  {
    if(isVowel(string.charAt(i)))
    {
      return i;
    }

    else if(string.charAt(i).toUpperCase() === 'Q' && (string.charAt(i + 1) != null && string.charAt(i + 1).toUpperCase() === 'U'))
    {
      i = i + 1;
    }
  }
  return -1;
}

/* UNIT TESTS

  * EMPTY
  * b
  * ba
  * bba
  * bbba
  * a -> a
  * aa -> a

*/
function getSuffix(string) {

  var suffix = "";

  for (var i = 0; i < string.length; i++)
  {
    console.log("i: " + i);
    //check for QU
    if(string.charAt(i).toUpperCase() === 'Q' && (string.charAt(i + 1) != null && string.charAt(i + 1).toUpperCase() === 'U'))
    {
      console.log("char at " + (i) + " is: " + string.charAt(i).toUpperCase() );
      console.log("char at " + (i + 1) + " is: " + string.charAt(i + 1).toUpperCase() );

      suffix += string.charAt(i);
      suffix += string.charAt(i + 1);

      console.log("suffix: " + suffix);

      i = i + 1;
      console.log("added 1 to index, i: " + 1);

      if (isVowel(string.charAt(i + 1)))
        break;

      continue;
    }

    console.log(suffix);
    suffix += string.charAt(i);
    console.log(suffix);

    if (isVowel(string.charAt(i + 1)))
      break;
  }

  return suffix;
}

/* UNIT TESTS

  * ba -> abay
  * bba -> abbay
  * bbaa -> aabbay
  * bphrase -> asebphray
  * b
  * q -> qay

*/
function isCons(string) {

  var suffix = "";
  var phrase = "";


  //string length = 1
  if (string.length === 1)
  {
    phrase = addAy(string);
    return phrase;
  }
  else {

    //iterate over word to find index of first vowel
    var vowelIndex = findFirstVowel(string);

    if (vowelIndex === -1) {

      phrase = addAy(string);
      return phrase;
    }

    //copy from first vowel index to end of string
    phrase = string.substring(vowelIndex);

    console.log("the substring is: " + phrase);

    // copy each letter from start of word until vowel to suffix
    suffix = getSuffix(string);

    //combine suffix w/ pig latin
    suffix = addAy(suffix);

    //combine phrase w/ pig latin
    phrase = phrase.concat(suffix);

    return phrase;
  }
}

function translatePigLatin(string) {

  if (isVowel(string))
    return addWay(string);
  else
    return isCons(string);

}

$(function() {
  $('form#pigLatinTranslator').submit(function(event) {

    event.preventDefault();

    /* UNIT TESTS

      a -> away
      aa -> aaway
      ab -> abway
      aab -> aabway
      aabbaa -> aabbaaway

      * ba -> abay
      * bba -> abbay
      * bbaa -> aabbay
      * bphrase -> asebphray
      * b

      q -> qay
      qu -> quay
      query -> eryquay
      bquery -> erybqu

      */
    var phrase = $("#getPhrase").val();
    $("#display").text(translatePigLatin(phrase));

    // var phrase = $("#getPhrase").val();
    // $("#display").text(findFirstVowel(phrase));

  });
});
