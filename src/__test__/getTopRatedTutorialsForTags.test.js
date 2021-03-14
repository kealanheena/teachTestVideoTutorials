import testConfig from '../__test__/testConfig';
import getTopRatedTutorialsForTags from '../functions/getTopRatedTutorialsForTags'

describe('#getTopRatedTutorialsForTags', () => {

  beforeEach(() => {
    testConfig.isDataOver20Videos = false;
  });

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

  test('it should return all the mock data when "Medium,Hard,Passive" is passed', async () => {
    const expected = await getTopRatedTutorialsForTags("Medium,Hard,Passive");

    expect(expected.length).toBe(3);
    expect(expected[0].videoTitle).toBe('Activity: Work');
    expect(expected[1].videoTitle).toBe('Practice: Places');
    expect(expected[2].videoTitle).toBe('Learn: Vehicles');
  });

  test('it should only return the top 20 videos as a default', async () => {
    testConfig.isDataOver20Videos = true;
    const expected = await getTopRatedTutorialsForTags("Medium,Hard,Passive");

    expect(expected.length).toBe(20);
  });

  test('it should take a secound argumanet that is the number of videos you want returned', async () => {
    testConfig.isDataOver20Videos = true;
    const expected = await getTopRatedTutorialsForTags("Medium,Hard,Passive", 15);

    expect(expected.length).toBe(15);
  });

  test('it should return a string asking the user to enter some tags if an empty string is entered', async () => {
    const expected = await getTopRatedTutorialsForTags("");

    expect(expected).toBe(`Opps Seems you didn't input any tags`);
  });

  test('it should still return correct response when capitalization is inconsistent', async () => { 
    const expected = await getTopRatedTutorialsForTags("MEdIum");

    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Practice: Places');
  });
});