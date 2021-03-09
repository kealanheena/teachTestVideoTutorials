import getTopRatedTutorialsForTags from '../functions/getTopRatedTutorialsForTags'

describe('#getTopRatedTutorialsForTags', () => {
  test('it should be a function', () => { 
    expect(getTopRatedTutorialsForTags).toBeInstanceOf(Function);
  });

  test('its should return "Practice: Places" video when "Medium" tage is given', async () => { 
    const expected = await getTopRatedTutorialsForTags("Medium");

    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Practice: Places');
  });

  test('its should return "Activity: Work" video when "Hard" tage is given', async () => {  
    const expected = await getTopRatedTutorialsForTags("Hard");
    
    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Activity: Work');
  });

  test('its should return "Learn: Vehicles" video when "Passive" tage is given', async () => {  
    const expected = await getTopRatedTutorialsForTags('Passive');
    
    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Learn: Vehicles');
  });

  test('its should return an array with 2 videos when "Exciting" tage is given', async () => {
    const expected = await getTopRatedTutorialsForTags("Exciting");

    expect(expected.length).toBe(2);
    expect(expected[0].videoTitle).toBe('Practice: Places');
    expect(expected[1].videoTitle).toBe('Activity: Work');
  });

  test('its should be able to take a comma seperated string and return videos for each item', async () => {
    const expected = await getTopRatedTutorialsForTags("Medium,Hard");

    expect(expected.length).toBe(2);
    expect(expected[0].videoTitle).toBe('Practice: Places');
    expect(expected[1].videoTitle).toBe('Activity: Work');
  });
});