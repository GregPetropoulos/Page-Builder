import { useEffect, useState } from 'react';
import pagesService from '../services/pages';

export const usePages = () => {
	const [pages, setPages] = useState([]);
	useEffect(() => {
		pagesService.fetchPages()
		.then( (item) => {
			console.log('item', item)
			pages.push(item)
			return pages
		});
	});
	console.log('pages', pages)
	return { pages };
};
