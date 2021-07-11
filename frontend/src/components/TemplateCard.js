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
			className="d-flex flex-column template-wrapper pointer p-2 rounded justify-content-between bg-gray-900 rounded-md"
			onClick={() => history.push(`/create/${id}`)}
		>
			<img
				className="img-fluid object-scale-down"
				src={thumbnailSrc}
				alt="thumbnail"
			/>
			<p className="template-title text-center text-indigo-50">{name}</p>
		</div>
	);
};
