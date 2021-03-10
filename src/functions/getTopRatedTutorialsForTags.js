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

  // This is not my own code
  function compare(itemA, itemB) {
    const videoRatingA = itemA.averageUserRating;
    const videoRatingB = itemB.averageUserRating;
  
    let comparison = 0;
    if (videoRatingA > videoRatingB) {
      comparison = -1;
    } else if (videoRatingA < videoRatingB) {
      comparison = 1;
    }
    return comparison;
  }
  // end here
  

  tagsArray.forEach((tag) => {
    tagsObject[tag] = true;
  });

  try {
    const filteredVideoData = await axios.get(videoApi).then((res) => {
      return res.data.filter((data) => {
        for(var i = 0; i < data.tags.length; i++) {
          if(tagsObject[data.tags[i]]) {
            return data;
          }
        }
        return false;
      })
    });

    const filteredOrderedVideoData = filteredVideoData.sort(compare);
    console.log(filteredOrderedVideoData)
    return filteredOrderedVideoData;
  } catch(err) {
    console.log(err);
  }
};

export default getTopRatedTutorialsForTags;

// My Code Ends Here