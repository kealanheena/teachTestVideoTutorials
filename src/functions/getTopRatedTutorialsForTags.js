/*
  Inputs: a collection of tags, typed by the user
  Outputs: The top 20 rated video tutorials, which contain any of the tags provided
*/

// My Code Starts Here
import axios from 'axios'

async function getTopRatedTutorialsForTags(tags, amountOfVideos = 20) {
  if (!tags) {
    return [];
  }
  
  const tagsArray = tags.toUpperCase().split(',')
  const tagsObject = {};
  const videoApi = `https://lingumi-take-home-test-server.herokuapp.com/videoTutorials`;


  tagsArray.forEach((tag) => {
    tagsObject[tag] = true;
  });

  function compare(itemA, itemB) {
    const videoRatingA = itemA.averageUserRating;
    const videoRatingB = itemB.averageUserRating;

    // So reviewed the previous code and checked the docs to make sure I understood it
    // after checking doc I seen a cleaner way and refactored
    // If result is negative b is before a
    // If result is positive b is after a
    // If result is 0 b & a's position doesn't change

    return videoRatingB - videoRatingA
  }
  
  try {
    const filteredVideoData = await axios.get(videoApi).then((res) => {
      return res.data.filter((data) => {
        const dataTags = data.tags;

        for(var i = 0; i < dataTags.length; i++) {
          const capitalizedTags = dataTags[i].toUpperCase();
          if(tagsObject[capitalizedTags]) {
            return data;
          }
        }
        return false;
      })
    });

    const filteredOrderedVideoData = filteredVideoData.sort(compare);
    
    return filteredOrderedVideoData.slice(0, amountOfVideos);
  } catch(err) {
    console.log(err);
  }
};

export default getTopRatedTutorialsForTags;

// My Code Ends Here