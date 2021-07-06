export const routes = {
	//user routes
	login: () => `api/users/login`,
	register: () => `api/users/register`,
	logout: () => `api/users/logout`,
	profile: () => `api/users/:id/profile`,
	// ---Do I need this?


	//page routes
	fetchPages: () => `/api/page/pages`,
	viewPage: id => `/api/page/one/${id}`,
	createPage: () => `/api/page/create/60d4430eb6c160b2a5b26c5a`,
	download: id => `/api/page/${id}/download`
};
