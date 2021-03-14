import { mockData } from '../__test__/mock-data/mockData';
import { mockDataOver20Videos } from '../__test__/mock-data/mockDataOver20Videos';
import testConfig from '../__test__/testConfig';

const axios = {
  get: (url) => {
    switch (url) {
      case "https://lingumi-take-home-test-server.herokuapp.com/videoTutorials":
        if(testConfig.isDataOver20Videos) {
          return Promise.resolve({ data: mockDataOver20Videos });
        }
        return Promise.resolve({ data: mockData });
      default:
        throw new Error(`UNMATCHED URL: ${url}`);
    }
  },
};

export default axios;
