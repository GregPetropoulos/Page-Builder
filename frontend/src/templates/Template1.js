import { useEffect, useState } from 'react';

export const Template1 = (
	{
		pageTitle,
		pageLogoTitle,
		landingTitle,
		navItem1,
		navItem2,
		navItem3,
		landingText,
		landingText2,
		backgroundColor,
		buttonText,
		imageDropdown,
		footerText,
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
					<div class=" d-flex justify-content-between my-2">
						<h3 class="masthead-brand">{pageLogoTitle}</h3>
						<nav class="nav justify-content-center">
							<a class="nav-link active" href="#">
								{navItem1}
							</a>
							<a class="nav-link" href="#">
								{navItem2}
							</a>
							<a class="nav-link" href="#">
								{navItem3}
							</a>
						</nav>
					</div>
				</header>

				<main role="main" className="mx-auto container my-auto">
					<h1 className="fs-2 text-center mb-4">{landingTitle}</h1>
					<p className="fs-5">{landingText}</p>
					<div classNameName="d-flex content-center my-5">
						<img
							src={thumbnailSrc}
							className="img-fluid"
							alt="img"
							style={{ width: 300 }}
						/>
					</div>
					<p class="fs-5"> {landingText2} </p>
					<p class="d-flex justify-content-center">
						<a href="#" class="btn btn-lg btn-secondary">
							{buttonText}
						</a>
					</p>
				</main>

				<footer class="d-flex justify-content-center">
					<div class="inner">
						<p> {footerText} </p>
					</div>
				</footer>
			</div>
		</>
	);
};
