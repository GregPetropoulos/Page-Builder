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
};

const downloadPage = async id => {
	console.log('downloadPage id', id)
	return await axios.get(routes.download(id), { withCredentials: true });
};

const deletePage = async (userId, id) => {
	console.log('delete page', id)
	const response = await axios.delete(routes.deletePage(userId, id), { withCredentials: true })
	console.log('deletePage response', response)
	return response
}

const pagesService = {
	createPage,
	fetchPages,
	viewPage,
	downloadPage,
	deletePage
};

export default pagesService;
