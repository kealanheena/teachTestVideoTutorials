import getTopRatedTutorialsForTags from '../functions/getTopRatedTutorialsForTags'

describe('#getTopRatedTutorialsForTags', () => {
  test('it should be a function', () => { 
    expect(getTopRatedTutorialsForTags).toBeInstanceOf(Function);
  });

  test('its should return "Practice: Places" video when "Medium" tag is given', async () => { 
    const expected = await getTopRatedTutorialsForTags("Medium");

    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Practice: Places');
  });

  test('its should return "Activity: Work" video when "Hard" tag is given', async () => {  
    const expected = await getTopRatedTutorialsForTags("Hard");
    
    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Activity: Work');
  });

  test('its should return "Learn: Vehicles" video when "Passive" tag is given', async () => {  
    const expected = await getTopRatedTutorialsForTags('Passive');
    
    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Learn: Vehicles');
  });

  test('its should return an array with 2 videos when "Exciting" tag is given', async () => {
    const expected = await getTopRatedTutorialsForTags("Exciting");

    expect(expected.length).toBe(2);
    expect(expected[0].videoTitle).toBe('Activity: Work');
    expect(expected[1].videoTitle).toBe('Practice: Places');
  });

  test('its should be able to take a comma seperated string and return videos for each item', async () => {
    const expected = await getTopRatedTutorialsForTags("Medium,Passive");

    expect(expected.length).toBe(2);
    expect(expected[0].videoTitle).toBe('Practice: Places');
    expect(expected[1].videoTitle).toBe('Learn: Vehicles');
  });

  test('its should only return the video one even if it matches multiple tags', async () => {
    const expected = await getTopRatedTutorialsForTags("Medium,Energetic");

    expect(expected.length).toBe(1);
    expect(expected[0].videoTitle).toBe('Practice: Places');
  });

  test('its should order items highest to lowest by their "averageUserRating"', async () => {
    const expected = await getTopRatedTutorialsForTags("Medium,Hard");

    expect(expected.length).toBe(2);
    expect(expected[0].videoTitle).toBe('Activity: Work');
    expect(expected[1].videoTitle).toBe('Practice: Places');
  });
});