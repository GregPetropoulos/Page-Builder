import { useEffect, useState } from 'react';
import pageServices from '../services/pages';
import download from 'downloadjs'

export const PageCard = ({ userId, thumbnail, name, id }) => {
	const [thumbnailSrc, setThumbnailSrc] = useState("https://via.placeholder.com/200");
	useEffect(() => {
		console.log('thumbnail', thumbnail)
		import(`../images/${thumbnail}`).then(mod =>
			setThumbnailSrc(mod.default)
		);
	}, [thumbnail]);

	const handleDownload = async () => {
		const response = await pageServices.downloadPage(id)
		download(response.data, `${name}.html`);
	}

	const handleDelete = async () => {
		console.log(userId, id)
		const response = await pageServices.deletePage(userId, id)
		console.log('response', response)
		if (response.status === 200) window.location.reload();
	}

	return (
		<div className="d-flex flex-column justify-content-between template-wrapper border p-2 rounded bg-gray-800 rounded-md">
			<img
				className="img-fluid object-scale-down"
				src={thumbnailSrc}
				alt="thumbnail"
			/>
			<div className="d-flex flex-column">
				<p className="template-title text-center">{name}</p>
				<div className="d-flex flex-row justify-content-center">
					<a className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" href={`/page/${id}`}>
						View
					</a>
					<a className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleDownload}>
						<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
						<span>Download</span>
					</a>
					<a className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleDelete}>
						<img src="https://img.icons8.com/ios-filled/50/000000/trash.png" width="17px"/>
						Delete
					</a>
				</div>
			</div>
		</div>
	);
};
