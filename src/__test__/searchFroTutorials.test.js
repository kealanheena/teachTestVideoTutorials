import searchForTutorials from '../functions/searchForTutorials';
import { mockData } from '../__test__/mock-data/mockData';

describe('#getTopRatedTutorialsForTags', () => {

  test('it should be a function', () => { 
    expect(searchForTutorials).toBeInstanceOf(Function);
  });

  test('it should return an empty array when not data is given', () => {
    const expected = searchForTutorials("");

    expect(expected).toStrictEqual([]);
  });

  describe('if a keyword matches a word in the title', () => {
    test('it should return an array with the "Practice: Places" video when "Practice: Places" is given as an argument', () => {
      const expected = searchForTutorials("Practice: Places", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Practice: Places');
    });
  
    test('it should return an array with the "Activity: Work" video when "Activity: Work" is given as an argument', () => {
      const expected = searchForTutorials("Activity: Work", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });
  
    test('it should return an array with the "Activity: Work" video when "Activity" is given as an argument', () => {
      const expected = searchForTutorials("Activity", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });
  
    test('it should return an array with the "Activity: Work" video when "Work" is given as an argument', () => {
      const expected = searchForTutorials("Work", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });

    test('it should still return correct response when capitalization is inconsistent', () => {
      const expected = searchForTutorials("PrActIce: plaCEs", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Practice: Places', mockData);
    });
  });

  describe('if a keyword matches a one of the tags', () => {
    test('it should return an array with the "Practice: Places" video when "Medium" is given as an argument', () => {
      const expected = searchForTutorials("Medium", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Practice: Places');
    });

    test('it should return an array with the "Activity: Work" video when "Hard" is given as an argument', () => {
      const expected = searchForTutorials("Hard", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });

    test('it should return an array with the "Activity: Work" video when "Passive" is given as an argument', () => {
      const expected = searchForTutorials("Passive", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });

    test('it should still return correct response when capitalization is inconsistent', () => {
      const expected = searchForTutorials("PaSSiVe", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });
  });

  describe('if a keyword matches the teachers name', () => {
    test('it should return an array with the "Practice: Places" video when "Katy" is given as an argument', () => {
      const expected = searchForTutorials("Katy", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Practice: Places');
    });

    test('it should return an array with the "Activity: Work" video when "Sam" is given as an argument', () => {
      const expected = searchForTutorials("Sam", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });

    test('it should return an array with the "Learn: Vehicles" video when "Trevor" is given as an argument', () => {
      const expected = searchForTutorials("Trevor", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });

    test('it should still return correct response when capitalization is inconsistent', () => {
      const expected = searchForTutorials("TRevOr", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });
  });

  describe('if multiple comma seperated inputs are given', () => {
    test('it should return an array with the "Practice: Places" video when "Medium,Katy" is given as an argument', () => {
      const expected = searchForTutorials("Medium,Katy", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Practice: Places');
    });

    test('it should return an array with the "Activity: Work" video when "Sam,Hard" is given as an argument', () => {
      const expected = searchForTutorials("Sam,Hard", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Activity: Work');
    });

    test('it should return an array with the "Activity: Work" video when "Trevor,Passive" is given as an argument', () => {
      const expected = searchForTutorials("Trevor,Passive", mockData);
  
      expect(expected.length).toBe(1)
      expect(expected[0].videoTitle).toBe('Learn: Vehicles');
    });

    test('it should return an array with the "Activity: Work" & "Learn: Vehicles" video when "Trevor,Work" is given as an argument', () => {
      const expected = searchForTutorials("Trevor,Work", mockData);
  
      expect(expected.length).toBe(2)
      expect(expected[0].videoTitle).toBe('Activity: Work');
      expect(expected[1].videoTitle).toBe('Learn: Vehicles');
    });

    test('it should still return correct response when capitalization is inconsistent', () => {
      const expected = searchForTutorials("TrEVor,WoRK", mockData);
  
      expect(expected.length).toBe(2)
      expect(expected[0].videoTitle).toBe('Activity: Work');
      expect(expected[1].videoTitle).toBe('Learn: Vehicles');
    });
  });
});