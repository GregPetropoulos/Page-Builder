export const MyAwesomeTemplate = ({ pageTitle, imageDropdown, navItem1, navItem2, navItem3, navBackground, footerText }) => {
	return (
		// <div>
		// 	<h1>{pageTitle}</h1>
		// 	<img src={bannerSrc} alt="img" />
		// </div>
	<div class="container">
		<div class="row">
			<h1 className="col-11">{pageTitle}</h1>
			<nav className="nav flex-column col-2" style={{ navBackground }}>
				<ul>
					<li><a href="#">{navItem1}</a></li>
					<li><a href="#">{navItem2}</a></li>
					<li><a href="#">{navItem3}</a></li>
				</ul>
			</nav>
			<div className="col-10">
				<img src= {imageDropdown} alt="img" />	
				<p>Welcome to our site. We hope to provide you with all of your needs</p>		
			</div>
			<footer class="d-flex justify-content-center">
					<div class="inner">
						<p> {footerText} </p>
					</div>
			</footer>
		</div>

	</div>
	);
};
