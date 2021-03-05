import getTopRatedTutorialsForTags from '../functions/getTopRatedTutorialsForTags'

describe('#getTopRatedTutorialsForTags', () => {
  test('it should be a function', () => {  
    expect(getTopRatedTutorialsForTags).toBeInstanceOf(Function);
  });

  test('its should return "Practice: Places" video when "Medium" tage is given', () => {  
    expect(getTopRatedTutorialsForTags("medium")[0].videoTitle).toBe('Katy');
  });
});