import axios from 'axios';
import { routes } from './routes'

const createPage = async (name, thumbnail, html) => {	
	const page = {
		name,
		thumbnail,
		html,
	};
	try {
		await axios.post(routes.createPage(), page, { withCredentials: true });
	} catch (err) {
		console.log(err);
	}
};

const fetchPages = async () => {
	const response = await axios.get(routes.fetchPages(), { withCredentials: true });
	return response.data;
	
};

const viewPage = async id => {
	console.log('ID', id)
	const response = await axios.get(routes.viewPage(id), { withCredentials: true });
	console.log('sss', response)
	return response.data
	// window.location.reload();
};

const downloadPage = async id => {
	// await axios.get(`/page/${id}/download`, { withCredentials: true });
	await axios.get(routes.download(), { withCredentials: true });
};

const pagesService = {
	createPage,
	fetchPages,
	viewPage,
	downloadPage,
};

export default pagesService;
