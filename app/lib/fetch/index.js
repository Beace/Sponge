import axios from 'axios';

class Fetch {
  constructor() {
    this.url = 'http://127.0.0.1:7001/v1';
  }

  async responseHandler(options) {
    try {
      const response = await axios(options);
      console.log(response);
      if (response.data.data) {
        return Promise.resolve(response.data.data);
      }
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async get(url, option = {}) {
    const options = Object.assign({}, option, {
      method: 'get',
      url: `${this.url}/${url}`,
    });
    return this.responseHandler(options);
  }

}

const fetch = new Fetch();

export default fetch;
