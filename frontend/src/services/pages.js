import axios from 'axios';
import { routes } from './routes'

const createPage = async (name, thumbnail, html) => {	
	const page = {
		name,
		thumbnail,
		html,
	};
	try {
		const response= await axios.post(routes.createPage(), page, { withCredentials: true });
		console.log('RESPONSE API',response)
	} catch (err) {
		console.log(err);
	}
};

const fetchPages = async () => {
	const response = await axios.get(routes.fetchPages(), { withCredentials: true });
	console.log('response', response)
	return response.data;
	
};

const viewPage = async id => {
	await axios.get(`/page/${id}`, { withCredentials: true });
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
