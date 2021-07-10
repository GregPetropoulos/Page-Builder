export const MyAwesomeTemplate = ({ pageTitle, bannerSrc, navItem1, navItem2, navItem3, footerText }) => {
	return (
		// <div>
		// 	<h1>{pageTitle}</h1>
		// 	<img src={bannerSrc} alt="img" />
		// </div>
	<div class="container" style={{marginTop: "3", alignItems: "center",
	justifyContent: "center"}}>
		<div class="row" style={{height:"200vh"}}>
			<nav className="nav flex-column col-2" style={{backgroundColor: "black"}}>
				<ul className="nav nav-tabs nav-stacked" style={{height: "100%", width: "100%"}}>
					<li class="nav-item mx-auto">
						<a class="nav-link" href="#">{navItem1}</a>
					</li>
					<li class="nav-item mx-auto">
						<a class="nav-link" href="#">{navItem2}</a>
					</li>
					<li class="nav-item mx-auto">
						<a class="nav-link" href="#">{navItem3}</a>
					</li>
				</ul>
			</nav>
			<div className="d-flex align-items-stretch col-10" 
			style={{
				backgroundImage: `url(${bannerSrc}`,
				// backgroundSize: "cover",
			}}>
				{/* <img src= {bannerSrc} alt="img" />	 */}
				<h1 className="" style={{alignItems: "center", justifyContent: "center"}}>{pageTitle}</h1>
		
				<p>Welcome to our site. We hope to provide you with all of your needs</p>		
			</div>
			<footer class="col-11 justify-content-center">
					<div class="inner">
						<p> {footerText} </p>
					</div>
			</footer>
		</div>
	</div>

	);
};
