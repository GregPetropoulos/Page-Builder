import { usePages } from '../hooks/usePages';
import { PageCard } from '../components/PageCard';
import { SideNavbar } from '../components/SideNavbar';

export const HomePage = (props) => {
	const { pages } = usePages();
	return (
		<div className="grid grid-cols-5 grid-rows-4 p-8 space-x-4">
			<div className="col-span-1 row-span-4">
				<SideNavbar currentUser={props.currentUserProp} signOut={props.signOutFunc} menuItems={{newBtn: 'new page', yourBtn: 'your pages'}}/>
			</div>
			<div className="">
				{ Array.isArray(pages) && pages.length > 0 ? (
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
				)} 
			</div>
		</div>
	);
};
