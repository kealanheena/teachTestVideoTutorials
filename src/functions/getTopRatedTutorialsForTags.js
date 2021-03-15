/*
  Inputs: a collection of tags, typed by the user
  Outputs: The top 20 rated video tutorials, which contain any of the tags provided
*/

// My Code Starts Here
import axios from 'axios'

async function getTopRatedTutorialsForTags(tags, amountOfVideos = 20) {
  const videoApi = `https://lingumi-take-home-test-server.herokuapp.com/videoTutorials`;
  const tagsObject = {};

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
    
    const videoData = await axios.get(videoApi).then((res) => {
      const data = res.data;

      if(tags) {
        const tagsArray = tags.replace(/[^a-zA-Z,]/g, "").toUpperCase().split(',')
     
        tagsArray.forEach((tag) => {
          tagsObject[tag] = true;
        });

        return data.filter((data) => {
          const dataTags = data.tags;
  
          for(var i = 0; i < dataTags.length; i++) {
            const capitalizedTags = dataTags[i].toUpperCase();
            if(tagsObject[capitalizedTags]) {
              return data;
            }
          }
          return false;
        });
      } else {
        return data;
      }
    });

    const orderedVideoData = videoData.sort(compare);
    
    return orderedVideoData.slice(0, amountOfVideos);
  } catch(err) {
    console.log(err);
  }
};

export default getTopRatedTutorialsForTags;

// My Code Ends Here