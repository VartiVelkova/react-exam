const Navigate = () => {
    return (
        <>
<div className="navbar navbar-inverse navbar-fixed-top headroom" >
		<div className="container">
			<div className="navbar-header">
				
				<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
				<a className="navbar-brand" href="index.html"><img src="/images/logo.png" alt="Progressus HTML5 template" /></a>
			</div>
			<div className="navbar-collapse collapse">
				<ul className="nav navbar-nav pull-right">
					<li className="active"><a href="#">Home</a></li>
					<li><a href="about.html">Login</a></li>
					<li><a href="about.html">Register</a></li>
					<li><a href="about.html">Logout</a></li>					
					<li><a href="contact.html">My Profile</a></li>					
				</ul>
			</div>
		</div>
	</div>         
        </>
    );
};

export default Navigate;