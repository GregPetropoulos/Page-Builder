import axios from 'axios';

const createPage = async (name, thumbnail, html) => {
	const page = {
		name,
		thumbnail,
		html,
	};
	try {
		await axios.post('/api/page/create', page, { withCredentials: true });
	} catch (err) {
		console.log(err);
	}
};

const fetchPages = async () => {
	const response = await axios.get('/api/page/pages', {
		withCredentials: true,
	});
	return response.data;
};

const pagesService = {
	createPage,
	fetchPages,
};

export default pagesService;
