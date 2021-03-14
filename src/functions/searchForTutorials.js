/*
  Inputs: words typed by the user
  Outputs: a collection of tutorials, which match the user search term
*/

// My Code Starts Here

import { mockData } from '../__test__/mock-data/mockData';

function searchForTutorials(keywords) {
  const keywordsArray = keywords.toUpperCase().split(',');
  const keywordsObject = {};

  keywordsArray.forEach((keyword) => {
    keywordsObject[keyword] = true;
  });
  
  const searchResult = mockData.filter((video)=> {
    const videoTags = video.tags
    const videoTitle = video.videoTitle.toUpperCase();
    const videoTitleNoSpecialChars = video.videoTitle.replace(/[^a-zA-Z ]/g, "");
    const teacherName = video.teacherName.toUpperCase();
    const seperatedVideoTitleWordsArray = videoTitleNoSpecialChars.toUpperCase().split(" ");

    let i;

    // Checks for mathcing tags
    for(i = 0; i < videoTags.length; i++) {
      const tag = videoTags[i];
      if(keywordsObject[tag.toUpperCase()]) {
        return video;
      }
    }

    // Checks for mathcing title words
    // e.g. Practice: Places will check for both Practice and Places
    for(i = 0; i < seperatedVideoTitleWordsArray.length; i++) {
      const titleWord = seperatedVideoTitleWordsArray[i];
      if(keywordsObject[titleWord.toUpperCase()]) {
        return video;
      }
    }

    // Checks for mathcing title and teacher name
    for(i = 0; i < keywordsArray.length; i++) {
      if(keywordsObject[videoTitle] || keywordsObject[teacherName]) {
        return video;
      }
    }
    return false;
  })

  return searchResult;
}

export default searchForTutorials;

// My Code Ends Here