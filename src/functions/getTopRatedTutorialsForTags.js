/*
  Inputs: a collection of tags, typed by the user
  Outputs: The top 20 rated video tutorials, which contain any of the tags provided
*/

// My Code Starts Here
import axios from 'axios'

async function getTopRatedTutorialsForTags(tags) {
  const tagsArray = tags.split(',');
  const videoApi = `https://lingumi-take-home-test-server.herokuapp.com/videoTutorials`;

  let filteredVideoData;

  try {
    filteredVideoData = await axios.get(videoApi).then((res) => {
      return res.data.filter((data) => {
        for(var i = 0; i < tagsArray.length; i++) {
          if(data.tags.includes(tagsArray[i])) {
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