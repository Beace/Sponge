import axios from "axios";

class Fetch {
  constructor() {
    this.url = "http://127.0.0.1:7001/v1";
  }

  async responseHandler(options) {
    try {
      const response = await axios(options);
      if (response.data.data) {
        return Promise.resolve(response.data.data);
      }
      return Promise.reject(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async get(url, option = {}) {
    const options = Object.assign({}, option, {
      method: "get",
      url: `${this.url}/${url}`
    });
    return this.responseHandler(options);
  }

  async post(url, option = {}) {
    console.log('be', option);
    const options = Object.assign({}, {
      data: option,
      method: "post",
      url: `${this.url}/${url}`
    });
    return this.responseHandler(options);
  }
}

const fetch = new Fetch();

export default fetch;
