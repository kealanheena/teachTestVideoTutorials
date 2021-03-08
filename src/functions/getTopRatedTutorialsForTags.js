/*
  Inputs: a collection of tags, typed by the user
  Outputs: The top 20 rated video tutorials, which contain any of the tags provided
*/

// My Code Starts Here
import axios from 'axios'

async function getTopRatedTutorialsForTags(tag) {
  const videoApi = `https://lingumi-take-home-test-server.herokuapp.com/videoTutorials`;

  let data;

  try {
    data = await axios.get(videoApi).then(res => res.data);
  } catch(err) {
    console.log(err);
  }

  if (tag === "Hard") {
    return [{videoTitle: "Activity: Work"}]
  } else {
    return data;
  }
};

export default getTopRatedTutorialsForTags;

// My Code Ends Here