import getTopRatedTutorialsForTags from '../functions/getTopRatedTutorialsForTags'

describe('#getTopRatedTutorialsForTags', () => {
  test('it should be a function', () => {  
    expect(getTopRatedTutorialsForTags).toBeInstanceOf(Function);
  });

  test('its should return "Practice: Places" video when "Medium" tage is given', () => {  
    expect(getTopRatedTutorialsForTags("medium")[0].videoTitle).toBe('Practice: Places');
  });

  test('its should return "Activity: Work" video when "Hard" tage is given', () => {  
    expect(getTopRatedTutorialsForTags("Hard")[0].videoTitle).toBe('Activity: Work');
  });
});