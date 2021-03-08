import { mockData } from '../__test__/mock-data/data'

const axios = {
  get: (url) => {
    switch (url) {
      case "https://lingumi-take-home-test-server.herokuapp.com/videoTutorials":
        return Promise.resolve({ data: mockData });
      default:
        throw new Error(`UNMATCHED URL: ${url}`);
    }
  },
};

export default axios;
