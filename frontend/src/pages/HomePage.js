import { usePages } from '../hooks/usePages';
import { PageCard } from '../components/PageCard';
import { SideNavbar } from '../components/SideNavbar';

export const HomePage = () => {
	const { pages } = usePages();
	return (
		<div className="grid grid-cols-5 grid-rows-4 p-8 space-x-4">
			<div className="col-span-1 row-span-4">
				<SideNavbar/>
			</div>
			<div className="">
				{/* { pages.length > 0 ? (
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
					<PageCard
							key={1}
							id={1}
							name='test'
							thumbnail='bootstrap.png'
						></PageCard>

			</div>
				<div className="">
				Template 1 Placeholder
			</div>
			<div className="">
				Template 2 Placeholder
			</div>
			<div className="">
				Template 3 Placeholder
			</div>
			<div className="">
				Template 4 Placeholder
			</div>
			<div className="">
				Template 5 Placeholder
			</div>
			<div className="">
				Template 6 Placeholder
			</div>
			<div className="">
				Template 7 Placeholder
			</div>
			<div className="">
				Template 8 Placeholder
			</div>      
			<div className="">
				Template 9 Placeholder
			</div>
			<div className="">
				Template 10 Placeholder
			</div>
			<div className="">
				Template 11 Placeholder
			</div>

		</div>
	);
};
