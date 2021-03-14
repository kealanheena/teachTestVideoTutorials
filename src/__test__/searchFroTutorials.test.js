import searchForTutorials from '../functions/searchForTutorials'

describe('#getTopRatedTutorialsForTags', () => {

  test('it should be a function', () => { 
    expect(searchForTutorials).toBeInstanceOf(Function);
  });

  describe('if a keyword matches a word in the title', () => {
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
  
    test('it should return an array with the "Activity: Work" video when "Activity" is given as an argument', () => {
      const expected = searchForTutorials("Activity");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });
  
    test('it should return an array with the "Activity: Work" video when "Work" is given as an argument', () => {
      const expected = searchForTutorials("Work");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });
  });

  describe('if a keyword matches a one of the tags', () => {
    test('it should return an array with the "Practice: Places" video when "Medium" is given as an argument', () => {
      const expected = searchForTutorials("Medium");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Practice: Places');
    });

    test('it should return an array with the "Activity: Work" video when "Hard" is given as an argument', () => {
      const expected = searchForTutorials("Hard");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });

    test('it should return an array with the "Activity: Work" video when "Passive" is given as an argument', () => {
      const expected = searchForTutorials("Passive");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });
  })

});