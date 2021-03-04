import getTopRatedTutorialsForTags from '../functions/getTopRatedTutorialsForTags'

describe('#getTopRatedTutorialsForTags', () => {
  test('getTopRatedTutorialsForTags function should be a function', () => {  
    expect(getTopRatedTutorialsForTags).toBeInstanceOf(Function);
  });
});