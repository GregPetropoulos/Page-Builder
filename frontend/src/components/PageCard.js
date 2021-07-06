import { useEffect, useState } from 'react';
import pageServices from '../services/pages';

export const PageCard = ({ thumbnail, name, id }) => {
	const [thumbnailSrc, setThumbnailSrc] = useState("https://via.placeholder.com/200");
	console.log({id})
	useEffect(() => {
		import(`../images/${thumbnail}`).then(mod =>
			setThumbnailSrc(mod.default)
		);
	}, [thumbnail]);

	const handleDownload = async id => {
		console.log('handleDownload id', id)
		const response = await pageServices.downloadPage(id)
		console.log('download response', response.data)
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
					<a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" href={`/page/${id}`}>
						View
					</a>
					{/* <a
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						href={`/page/${id}/download`}
						onClick={handleDownload}
					>download
					</a> */}
					{/* <a ></a> */}
					<a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => handleDownload(id)}>
						<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
						<span>Download</span>
					</a>
				</div>
			</div>
		</div>
	);
};
