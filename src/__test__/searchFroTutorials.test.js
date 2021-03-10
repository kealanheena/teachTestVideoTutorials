import searchForTutorials from '../functions/searchForTutorials'

describe('#getTopRatedTutorialsForTags', () => {

  test('it should be a function', () => { 
    expect(searchForTutorials).toBeInstanceOf(Function);
  });

  test('it should return an array with the "Practice: Places" video when "Practice: Places" is given as an argument', () => {
    const expected = searchForTutorials("Practice: Places");

    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Practice: Places');
  });

  test('it should return an array with the "Activity: Work" video when "Activity: Work" is given as an argument', () => {
    const expected = searchForTutorials("Activity: Work");

    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Activity: Work');
  });

});