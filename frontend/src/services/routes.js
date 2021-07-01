export const routes = {
	//user rouets
	login: () => `api/users/login`,
	register: () => `api/users/register`,
	logout: () => `api/users/logout`,

	//page routes
	fetchPages: () => `/api/page/pages`,
	viewPage: (id) => `/api/page/one/${id}`,
	createPage: () => `/api/page/create/60d4430eb6c160b2a5b26c5a`,
	download: () => `/api/page/60da6a107866aa6a7f87c108/download`
};
