/*
  Inputs: words typed by the user
  Outputs: a collection of tutorials, which match the user search term
*/

// My Code Starts Here

function searchForTutorials(keyWord) {
  if(keyWord.length > 9) {
    return [{videoTitle: keyWord}]
  }
  return [{videoTitle: `${keyWord}: Work`}]
}

export default searchForTutorials;

// My Code Ends Here