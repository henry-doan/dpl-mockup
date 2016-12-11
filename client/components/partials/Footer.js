import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
	let styles= {
		footer: {textAlign: "center", 
							position: "absolute",
							left: 0,
							bottom: 0,
							right: 0,
							marginTop: '15px'},
		footerCenter: {textAlign: "center", marginTop: "82px" },
		a: {textDecoration: "none", color: "#6C6C6C"},
		inputBox: {height: "38px", width: "37%", border: "1px solid #858585", },
		subscribeBtn: {display: "inline-block", 
										lineHeight: "1.25",
										textAlign: "center",
										whiteSpace: "nowrap",
										verticalAlign: "middle",
										userSelect: "none",
										border: "1px solid #858585",
										padding: ".5rem 2.5rem",
										fontSize: "1rem",
										borderRadius: "1px",
										marginBottom: "1px",
										backgroundColor: "#D1D1D1"
									}
		
	}
	
	// TODO: Makinging the footer truly sticky
	// TODO: will have to have the mailing input to be another component in order to work.
	// TODO: Have the A tag be link tags and link all pages
	return(
		<footer style={styles.footer}>
			
			<div className="row">
				<div className="footerLeft col-xs-3">
					<img className="media" src="http://photos.prnewswire.com/prn/20140306/LA78082LOGO"/>
				</div>

				<div className="col-xs-6" style={styles.footerCenter}>
					<h6 className='bold' style={{color: "black"}}>Find out about the latest news at DevPoint Labs.</h6>
	          <div>
	            <form>
	              <input className="validate" name='email' type="email" placeholder='  Your Email' style={styles.inputBox} />
	              <input className="btn" type='submit' value='Subscribe!' style={styles.subscribeBtn} />
	            </form>
	          </div>			
				</div>

				<div className="footerRight col-xs-3 row">
					<div className="col-xs-6" style={{textAlign: "left"}}>
						<h6 style={{color: "black"}}>Company</h6>
						<div>
							<a href='#' style={styles.a}>About</a>
						</div>

						<div>
							<a href='#' style={styles.a}>Courses</a>
						</div>

						<div>
							<a href='#' style={styles.a}>FAQ</a>
						</div>

						<div>
							<a href='#' style={styles.a}>Career</a>
						</div>

						<div>
							<a href='#' style={styles.a}>Press</a>
						</div>

					</div>

					<div className="col-xs-6" style={{textAlign: "left"}}>
						<h6 style={{color: "black"}}>Community</h6>
						<div>
							<a href='#' style={styles.a}>Events</a>
						</div>

						<div>
							<a href='#' style={styles.a}>Students</a>
						</div>

						<div>
							<a href='#' style={styles.a}>Alumnis</a>
						</div>

						<div>
							<a href='#' style={styles.a}>Blogs</a>
						</div>

					</div>
				</div>
			</div>

			<div className="row" style={{marginTop: "24px"}}>
				<div className="col-xs-4" style={{textAlign: "right"}}>
					<p style={{color: "#9C9C9C"}}>DevPoint Labs HQ</p>
				</div>

				<div className="col-xs-4" style={{textAlign: "center"}}>
					<p style={{color: "#9C9C9C"}}>370 South 300 East Salt Lake City, UT 84111</p>
				</div>

				<div className="col-xs-4" style={{textAlign: "left"}}>
					<p style={{color: "#9C9C9C"}}>801-448-2122</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;