export const routes = {
  //user routes
  login: () => `api/users/login`,
  register: () => `api/users/register`,
  logout: () => `api/users/logout`,
  profile: () => `api/users/profile`,
  deleteUser: (id) => `api/users/delete/${id}`,
  getUser: (id) => `api/users/${id}`,

  //page routes
  fetchPages: id => `/api/page/pages/${id}`,
  viewPage: id => `/api/page/one/${id}`,
  createPage: () => `/api/page/create`,
  download: id => `/api/page/${id}/download`,
  deletePage: (userId, id) => `/api/page/${id}/delete/${userId}`
};
