import { useEffect, useState } from 'react';

export const PageCard = ({ thumbnail, name, id }) => {
	const [thumbnailSrc, setThumbnailSrc] = useState("https://via.placeholder.com/200");

	useEffect(() => {
		import(`../images/${thumbnail}`).then(mod =>
			setThumbnailSrc(mod.default)
		);
	}, [thumbnail]);

	return (
		<div className="d-flex flex-column justify-content-between template-wrapper border p-2 rounded">
			<img
				className="img-fluid img img-wrapper"
				src={thumbnailSrc}
				alt="thumbnail"
			/>
			<div className="d-flex flex-column">
				<p className="template-title text-center">{name}</p>
				<div className="d-flex flex-row justify-content-center">
					<a className="btn btn-primary mx-1" href={`/page/${id}`}>
						View
					</a>
					<a
						className="btn btn-secondary"
						href={`/page/${id}/download`}
						download
					>
						Download
					</a>
				</div>
			</div>
		</div>
	);
};
