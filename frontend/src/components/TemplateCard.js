import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export const TemplateCard = ({ thumbnail, name, id }) => {
	const history = useHistory();
	const [thumbnailSrc, setThumbnailSrc] = useState();

	useEffect(() => {
		import(`../images/${thumbnail}`).then(mod =>
			setThumbnailSrc(mod.default)
		);
	}, [thumbnail]);

	return (
		<div
			className="d-flex flex-column template-wrapper gradient2 pointer p-2 rounded justify-content-between rounded bg-white rounded-md mb-4 shadow-2xl divide-y divide-gray-200"
			onClick={() => history.push(`/create/${id}`)}
		>
			<img
				className="img-fluid object-scale-down"
				src={thumbnailSrc}
				alt="thumbnail"
			/>
			<p className="template-title pt-2 my-3 text-center text-gray-900 text-sm uppercase font-black items-center">{name}</p>
		</div>
	);
};
