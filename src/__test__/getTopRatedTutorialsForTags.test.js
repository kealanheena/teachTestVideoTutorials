import getTopRatedTutorialsForTags from '../functions/getTopRatedTutorialsForTags'

describe('#getTopRatedTutorialsForTags', () => {
  test('it should be a function', () => { 
    expect(getTopRatedTutorialsForTags).toBeInstanceOf(Function);
  });

  test('its should return "Practice: Places" video when "Medium" tage is given', async () => { 
    const expected = await getTopRatedTutorialsForTags("Medium");

    expect(expected[0].videoTitle).toBe('Practice: Places');
  });

  test('its should return "Activity: Work" video when "Hard" tage is given', async () => {  
    const expected = await getTopRatedTutorialsForTags("Hard");
    
    expect(expected[0].videoTitle).toBe('Activity: Work');
  });

  test('its should return an array with 2 videos when "Excitiinng" tage is given', async () => {
    const expected = await getTopRatedTutorialsForTags("Exciting");

    expect(expected.length).toBe(2); 
  });
});