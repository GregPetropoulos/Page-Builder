import axios from 'axios';

const createPage = async (name, thumbnail, html) => {
	const page = {
		name,
		thumbnail,
		html,
	};
	try {
		await axios.post('/api/create', page, { withCredentials: true });
	} catch (err) {
		console.log(err);
	}
};

const fetchPages = async () => {
	const response = await axios.get('/api/page/pages', { withCredentials: true });
	return response.data;
};

const viewPage = async id => {
	await axios.get(`/page/${id}`, { withCredentials: true });
	// window.location.reload();
};

const donwloadPage = async id => {
	await axios.get(`/page/${id}/download`, { withCredentials: true });
};

const pagesService = {
	createPage,
	fetchPages,
	viewPage,
	donwloadPage,
};

export default pagesService;
