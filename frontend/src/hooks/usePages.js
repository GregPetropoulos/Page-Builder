import { useEffect, useState } from 'react';
import pagesService from '../services/pages';


export const usePages = (id) => {
	const [pages, setPages] = useState([]);
	useEffect(() => {
		pagesService.fetchPages(id).then(data => {
			console.log('fetch pages data',data);
			setPages(data.pages)
		});
	}, []);

	return { pages };
};
