import { useEffect, useState } from 'react';

export const Template1 = (
	{
		pageTitle,
		pageLogoTitle,
		landingTitle,
		landingText,
		backgroundColor,
		buttonText,
		imageDropdown,
	},
	ref
) => {
	const [thumbnailSrc, setThumbnailSrc] = useState();

	useEffect(() => {
		import(`../images/${imageDropdown}`).then(mod =>
			setThumbnailSrc(mod.default)
		);
	}, [imageDropdown]);
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
					__html: `
					body{
						margin:0;
					}
					.screen{
						height:calc(100vh - 56px) !important;
					}
    `,
				}}
			/>
			<div
				className="cover-container d-flex h-100 p-3 mx-auto flex-column text-white screen align-content-center"
				style={{ backgroundColor }}
			>
				<header>
					<div className=" d-flex justify-content-between my-2">
						<h3 className="masthead-brand">{pageLogoTitle}</h3>
						<nav className="nav justify-content-center">
							<a className="nav-link active" href="#">
								Home
							</a>
							<a className="nav-link" href="#">
								Features
							</a>
							<a className="nav-link" href="#">
								Contact
							</a>
						</nav>
					</div>
				</header>

				<main role="main" className="mx-auto container my-auto">
					<h1 className="fs-2 text-center mb-4">{landingTitle}</h1>
					<p className="fs-5">{landingText}</p>
					<div classNameName="d-flex justify-content-center my-5">
						<img
							src={thumbnailSrc}
							alt="img"
							style={{ width: 300 }}
						/>
					</div>
					<p className="d-flex justify-content-center">
						<a href="#" className="btn btn-lg btn-secondary">
							{buttonText}
						</a>
					</p>
				</main>

				<footer className="d-flex justify-content-center">
					<div className="inner">
						<p>Cover template </p>
					</div>
				</footer>
			</div>
		</>
	);
};
