import searchForTutorials from '../functions/searchForTutorials'

describe('#getTopRatedTutorialsForTags', () => {

  test('it should be a function', () => { 
    expect(searchForTutorials).toBeInstanceOf(Function);
  });

});