import { routes } from './routes';
import axios from 'axios';

const ApiLogin = async (userInfo) => {
  try {
    const response = await axios.post(routes.login(), userInfo);
    return response.data;
  } catch (err) {
    const error = err;
    if (error.response && error.response.status !== 404) {
      const data = error.response.data;
      if (data) {
        return { error: data.error };
      }
    }
    return { error: 'Something went wrong, try again later' };
  }
};
const ApiLogOut = async (userInfo) => {
  try {
    const response = await axios.post(routes.logout(), userInfo);
    console.log('logout response', response);
    return response.data;
  } catch (err) {
    const error = err;
    if (error.response && error.response.status !== 404) {
      const data = error.response.data;
      if (data) {
        return { error: data.error };
      }
    }
    return { error: 'Something went wrong, try again later' };
  }
};

const ApiRegister = async (email, username, password) => {
  try {
    const response = await axios.post(routes.register(), {
      email,
      username,
      password,
    });
    return response.data;
  } catch (err) {
    const error = err;
    if (error.response && error.response.status !== 404) {
      const data = error.response.data;
      if (data) {
        return { error: data.error };
      }
    }
    return { error: 'Something went wrong, try again later' };
  }
};

const ApiProfileForm = async (firstName, lastName, about, github, email) => {
  console.table([firstName, lastName, about, github, email]);
  try {
    const response = await axios.post(routes.profile(), {
      firstName,
      lastName,
      about,
      github,
      email,
    });
    console.log('api form response', response);
    return response;
  } catch (e) {
    console.error({ e });
    return { error: `Error: ${e}` };
  }
};

const ApiDeleteUser = async (id) => {
  try {
    const response = await axios.delete(routes.deleteUser(id));
    console.log('delete response', response);
    return response;
  } catch (e) {
    console.error({ e });
    return { error: `Error: ${e}` };
  }
};

const ApiGetUser = async (id) => {
  try {
    const response = await axios.get(routes.getUser(id));
    console.log('get response', response);
    return response;
  } catch (e) {
    console.error({ e });
    return { error: `Error: ${e}` };
  }
};

const accountService = {
  ApiLogin,
  ApiLogOut,
  ApiRegister,
  ApiProfileForm,
  ApiDeleteUser,
  ApiGetUser,
};

export default accountService;
