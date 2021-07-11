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
		bannerSrc,
		footerText,
	},
	ref
) => {
	const [thumbnailSrc, setThumbnailSrc] = useState();

	// useEffect(() => {
	// 	import(`../images/${imageDropdown}`).then(mod =>
	// 		setThumbnailSrc(mod.default)
	// 	);
	// }, [imageDropdown]);
	return (
		<div>
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
				style={{ backgroundColor }}>
				<header>
					{/* <div class=" d-flex justify-content-between my-2">
						<h3 class="masthead-brand"></h3>
						<nav class="nav justify-content-center">
							<a class="nav-link active" href="#">
								{navItem1}
							</a>
							<a className="nav-link" href="#">
								{navItem2}
							</a>
							<a className="nav-link" href="#">
								{navItem3}
							</a>
						</nav>
					</div> */}
				<nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-900 mb-3">
					<div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
						<div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
						<a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
						{pageLogoTitle}
						</a>
						<button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
							<span class="block relative w-6 h-px rounded-sm bg-white"></span>
							<span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
							<span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
						</button>
						</div>
						<div class="lg:flex flex-grow items-center" id="example-navbar-warning">
						<ul class="flex flex-col lg:flex-row list-none ml-auto">
							<li class="nav-item">
								<a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
								{navItem1}
								</a>
							</li>
							<li class="nav-item">
								<a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
								{navItem2}
								</a>
							</li>
							<li class="nav-item">
								<a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
								{navItem3}
								</a>
							</li>
						</ul>
						</div>
					</div>
				</nav>
</header>
<main>
	<div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{ minHeight: "75vh" }}>
    <div
        class="absolute top-0 w-full h-full bg-center bg-cover"
        style={{ }}>
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-indigo-900">
			</span>
    </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
					<h1 class="text-white font-semibold text-5xl">
					{landingTitle}
					</h1>
					<p class="mt-4 text-lg text-gray-300">
					{landingText}
					</p>
					<div class="flex items-center justify-center">
						<button href="#" class="btn btn-active bg-gray-900 px-2 py-2 rounded text-sm">
							{buttonText}
						</button>
					</div>
              </div>
            </div>
          </div>
        </div>
		</div>
		</main>

				{/* <main role="main" className="mx-auto container my-auto">
					<h1 className="fs-2 text-center mb-4">{landingTitle}</h1>
					<p className="fs-5"></p>
					<div className="d-flex content-center my-5">
						<img
							src={thumbnailSrc}
							className="img-fluid"
							alt="img"
							style={{ width: 300 }}
						/>
					</div>
					<p className="fs-5"> {landingText2} </p>
					<p className="d-flex justify-content-center">
						<a href="#" className="btn btn-lg btn-secondary">
							{buttonText}
						</a>
					</p>
				</main> */}

				<footer class="flex items-center justify-center text-indigo-900">
					<div class="items-center">
						<p> {footerText} </p>
					</div>
				</footer>
			</div>
		</div>
	);
};
