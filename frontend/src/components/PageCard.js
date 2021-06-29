import { useEffect, useState } from 'react';
import pageServices from '../services/pages';

export const PageCard = ({ thumbnail, name, id }) => {
	const [thumbnailSrc, setThumbnailSrc] = useState("https://via.placeholder.com/200");

	useEffect(() => {
		import(`../images/${thumbnail}`).then(mod =>
			setThumbnailSrc(mod.default)
		);
	}, [thumbnail]);

	const handleDownload = async () => {
		const response = await pageServices.downloadPage()
		console.log('download response', response)
	}

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
						onClick={handleDownload}
					>
						Download
					</a>
				</div>
			</div>
		</div>
	);
};
