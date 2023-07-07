import axios from 'axios';

class UserServices {
  login(user) {
    return axios.post('https://rich-ray-shawl.cyclic.app/login', user);
  }
}

export default new UserServices();
