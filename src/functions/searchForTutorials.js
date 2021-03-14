/*
  Inputs: words typed by the user
  Outputs: a collection of tutorials, which match the user search term
*/

// My Code Starts Here

import { mockData } from '../__test__/mock-data/mockData';

function searchForTutorials(keyWord) {
  const searchResult = mockData.filter((video)=> {
    const videoTagsObject = {};
    const videoTitleWordsObject = {};
    const videoTitle = video.videoTitle;
    const videoTags = video.tags;
    const videoTitleNoSpecialChars = video.videoTitle.replace(/[^a-zA-Z ]/g, "");
    const seperatedVideoTitleWordsArray = videoTitleNoSpecialChars.split(" ");

    videoTags.forEach((tag) => {
      videoTagsObject[tag] = true;
    })
    
    seperatedVideoTitleWordsArray.forEach((word) => {
      videoTitleWordsObject[word] = true;
    })

    if(videoTitle === keyWord || videoTitleWordsObject[keyWord] || videoTagsObject[keyWord]) {
      return [{videoTitle: keyWord}];
    }
    return false;
  })

  return searchResult;
}

export default searchForTutorials;

// My Code Ends Here