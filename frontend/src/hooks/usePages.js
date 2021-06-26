import { useEffect, useState } from 'react';
import pagesService from '../services/pages';

// const dummyPage = {
// 	_id: 123,
// 	name: "test page",
// 	thumbnail: "logopb.png"
// }


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
