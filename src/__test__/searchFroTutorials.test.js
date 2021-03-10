import searchForTutorials from '../functions/searchForTutorials'

describe('#getTopRatedTutorialsForTags', () => {

  test('it should be a function', () => { 
    expect(searchForTutorials).toBeInstanceOf(Function);
  });

  test('it should return "Practice: Places" video when "Practice: Places" is given as an argument', () => {
    const expected = searchForTutorials("Practice: Places");

    expect(expected.length).toBe(1)
    expect(expected[0].videoTitle).toBe('Practice: Places');
  });

});