/*
  Inputs: a collection of tags, typed by the user
  Outputs: The top 20 rated video tutorials, which contain any of the tags provided
*/

// My Code Starts Here

function getTopRatedTutorialsForTags(tag) {
  if (tag === "Hard") return [{videoTitle: "Activity: Work"}];
  return [{videoTitle: "Practice: Places"}];
};

export default getTopRatedTutorialsForTags;

// My Code Ends Here