/*
  Inputs: words typed by the user
  Outputs: a collection of tutorials, which match the user search term
*/

// My Code Starts Here

import { mockData } from '../__test__/mock-data/mockData';

function searchForTutorials(keyWord) {
  const returnData = mockData.filter((video)=> {
    const videoTitle = video.videoTitle;
    const seperatedVideoTitleArray = video.videoTitle.replace(/[^a-zA-Z ]/g, "").split(" ")

    if(videoTitle === keyWord || seperatedVideoTitleArray.includes(keyWord)) {
      return [{videoTitle: keyWord}];
    }
    return false;
  })

  return returnData
  // return [{videoTitle: `${keyWord}: Work`}]
}

export default searchForTutorials;

// My Code Ends Here