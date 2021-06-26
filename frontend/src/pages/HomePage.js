import { usePages } from '../hooks/usePages';
import { PageCard } from '../components/PageCard';
import {Login} from '../components/Login'

export const HomePage = () => {
	const { pages } = usePages();
	console.log('pages 12', pages)
	console.log(typeof pages)
	console.log(Array.isArray(pages))
	return (
		<div className="d-flex gap flex-wrap justify-content-center">
			<Login/>
			{/* {pages.length > 0 ? (
				pages.map(page => (
					<PageCard
						key={page._id}
						id={page._id}
						name={page.name}
						thumbnail={page.thumbnail}
					></PageCard>
				))
			) : (
				<div className="d-flex flex-column gap">
					<h1 className="text-center mt-5">No pages found</h1>
					<a href="/templates" className="btn btn-primary ">
						Create page
					</a>
				</div>
)} */}
		</div>
	);
};
