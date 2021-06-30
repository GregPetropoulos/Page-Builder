import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import pageService from '../services/pages';

export const TemplateCard = ({ thumbnail, name, id }) => {
	const history = useHistory();
	const [thumbnailSrc, setThumbnailSrc] = useState();

	useEffect(() => {
		import(`../images/${thumbnail}`).then(mod =>
			setThumbnailSrc(mod.default)
		);
	}, [thumbnail]);

	// const handleSubmit = async ev => {
	// 	ev.preventDefault();
	// 	const [emailInput, passwordInput] = ev.target.elements;
	// 	const email = emailInput.value;
	// 	const password = passwordInput.value;
	// 	if (email.length > 0 && password.length > 0) {
	// 		const userInfo = await accountService.ApiLogin({ email, password });
	// 		if (userInfo.error) {
	// 			setError(userInfo.error);
	// 		} else {
	// 			auth(userInfo);
	// 		}
	// 	} else {
	// 		setError('Email or password too short');
	// 	}
	// };

	return (
		<div
			className="d-flex flex-column template-wrapper pointer border p-2 rounded justify-content-between"
			onClick={() => history.push(`/create/${id}`)}
		>
			<img
				className="img-fluid img img-wrapper"
				src={thumbnailSrc}
				alt="thumbnail"
			/>
			<p className="template-title text-center">{name}</p>
		</div>
	);
};
