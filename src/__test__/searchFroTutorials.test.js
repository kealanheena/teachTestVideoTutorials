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

    test('it should still return correct response when capitalization is inconsistent', () => {
      const expected = searchForTutorials("PrActIce: plaCEs");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Practice: Places');
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

    test('it should still return correct response when capitalization is inconsistent', () => {
      const expected = searchForTutorials("PaSSiVe");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });
  });

  describe('if a keyword matches the teachers name', () => {
    test('it should return an array with the "Practice: Places" video when "Katy" is given as an argument', () => {
      const expected = searchForTutorials("Katy");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Practice: Places');
    });

    test('it should return an array with the "Activity: Work" video when "Sam" is given as an argument', () => {
      const expected = searchForTutorials("Sam");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });

    test('it should return an array with the "Learn: Vehicles" video when "Trevor" is given as an argument', () => {
      const expected = searchForTutorials("Trevor");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });

    test('it should still return correct response when capitalization is inconsistent', () => {
      const expected = searchForTutorials("TRevOr");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });
  });

  describe('if multiple comma seperated inputs are given', () => {
    test('it should return an array with the "Practice: Places" video when "Medium,Katy" is given as an argument', () => {
      const expected = searchForTutorials("Medium,Katy");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Practice: Places');
    });

    test('it should return an array with the "Activity: Work" video when "Sam,Hard" is given as an argument', () => {
      const expected = searchForTutorials("Sam,Hard");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });

    test('it should return an array with the "Activity: Work" video when "Trevor,Passive" is given as an argument', () => {
      const expected = searchForTutorials("Trevor,Passive");
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });

    test('it should return an array with the "Activity: Work" & "Learn: Vehicles" video when "Trevor,Work" is given as an argument', () => {
      const expected = searchForTutorials("Trevor,Work");
  
      expect(expected.length).toBe(2)
      expect(expected[0].videoTitle).toBe('Activity: Work');
      expect(expected[1].videoTitle).toBe('Learn: Vehicles');
    });

    test('it should still return correct response when capitalization is inconsistent', () => {
      const expected = searchForTutorials("TrEVor,WoRK");
  
      expect(expected.length).toBe(2)
      expect(expected[0].videoTitle).toBe('Activity: Work');
      expect(expected[1].videoTitle).toBe('Learn: Vehicles');
    });
  })
});