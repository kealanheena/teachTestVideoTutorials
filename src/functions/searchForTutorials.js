/*
  Inputs: words typed by the user
  Outputs: a collection of tutorials, which match the user search term
*/

// My Code Starts Here

import { mockData } from '../__test__/mock-data/mockData';

function searchForTutorials(keyWords) {
  const keyWordsArray = keyWords.toUpperCase().split(',');
  const searchResult = mockData.filter((video)=> {
    const videoTagsObject = {};
    const videoTitleWordsObject = {};
    const videoTitle = video.videoTitle.toUpperCase();
    const teacherName = video.teacherName.toUpperCase();
    const videoTitleNoSpecialChars = video.videoTitle.replace(/[^a-zA-Z ]/g, "");
    const seperatedVideoTitleWordsArray = videoTitleNoSpecialChars.toUpperCase().split(" ");

    const videoTags = video.tags.map((tag) => {
      return tag.toUpperCase()
    });

    videoTags.forEach((tag) => {
      videoTagsObject[tag] = true;
    })
    
    seperatedVideoTitleWordsArray.forEach((word) => {
      videoTitleWordsObject[word] = true;
    })

    for(var i = 0; i < keyWordsArray.length; i++) {
      const keyWord = keyWordsArray[i];
      if(videoTitle === keyWord || teacherName === keyWord || videoTitleWordsObject[keyWord] || videoTagsObject[keyWord]) {
        return [{videoTitle: keyWords}];
      }
    }
    return false;
  })

  return searchResult;
}

export default searchForTutorials;

// My Code Ends Here