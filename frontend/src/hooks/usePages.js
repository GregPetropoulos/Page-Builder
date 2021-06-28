import { useEffect, useState } from 'react';
import pagesService from '../services/pages';


export const usePages = () => {
	const [pages, setPages] = useState([]);
	useEffect(() => {
		pagesService.fetchPages().then(data => {
			console.log(data);
			setPages(data.pages)
		});
	}, []);

	return { pages };
};
