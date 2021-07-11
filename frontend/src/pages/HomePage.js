import { usePages } from '../hooks/usePages';
import { PageCard } from '../components/PageCard';
import { SideNavbar } from '../components/SideNavbar';
import { Navbar } from '../components/Navbar';


export const HomePage = (props) => {
	const { pages } = usePages();
	return (
		<div className="">
			<div className="grid grid-cols-2 p-8 place-items-center mb-4">
				{ Array.isArray(pages) && pages.length > 0 ? (
					pages.map(page => (
						<PageCard
						key={page._id}
						id={page._id}
						name={page.name}
						thumbnail={page.thumbnail}
						className="bg-gray-800 rounded-md text-indigo-50"
						></PageCard>
						))
						) : (
							<div className="d-flex flex-column gap">
						<h1 className="text-center mt-5">You haven't made any pages yet!</h1>
						<a href="/templates" className="btn btn-primary ">
							CLICK HERE TO CREATE A PAGE :)
						</a>
					</div>
				)} 
			</div>
		</div>
	);
};
