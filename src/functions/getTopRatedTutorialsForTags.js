/*
  Inputs: a collection of tags, typed by the user
  Outputs: The top 20 rated video tutorials, which contain any of the tags provided
*/

// My Code Starts Here
import axios from 'axios'

async function getTopRatedTutorialsForTags(tags) {
  const tagsArray = tags.split(',');
  const tagsObject = {};
  const videoApi = `https://lingumi-take-home-test-server.herokuapp.com/videoTutorials`;

  tagsArray.forEach((tag) => {
    tagsObject[tag] = true;
  });

  let filteredVideoData;

  try {
    filteredVideoData = await axios.get(videoApi).then((res) => {
      return res.data.filter((data) => {
        for(var i = 0; i < data.tags.length; i++) {
          if(tagsObject[data.tags[i]]) {
            return data;
          }
        }
        return false;
      })
    });
  } catch(err) {
    console.log(err);
  }

  return filteredVideoData;
};

export default getTopRatedTutorialsForTags;

// My Code Ends Here