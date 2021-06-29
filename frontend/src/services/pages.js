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
	const response = await axios.get('/api/page/pages', { withCredentials: true });
	console.log('response', response)
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
