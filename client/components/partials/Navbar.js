import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  let styles= {
    topNav: {width: '100%', height: '100px', boxShadow: 'none'},
    navWrapper: {position: 'relative', height: '100%'},
    img: {maxWidth: '100%', height: 'auto'},
    liLinks: {display: 'inline', padding: '20px', marginTop: '20px'}

  }

  return(
  <nav className='containerFluid' style={styles.topNav}>
    <div className='row flex-items-xs-middle' style={styles.navWrapper}>
      <div className='col-md-4 media'>
        <a className='media-middle' href="/">
          <img className='media' style={{width: '350px', height: 'auto', marginLeft: '50px'}} src="http://photos.prnewswire.com/prn/20140306/LA78082LOGO" />
        </a>
      </div>
      <ul className='col-md-6'>
        <li style={styles.liLinks} className="dropdown">
          <Link to="/courses" className='navbar-btn dropdown-btn'>Courses</Link>
          <div className="dropdown-content">
            <a href='#'>Full Time</a>
            <a href='#'>Part Time</a>
            <a href='#'>UX Design</a>
          </div>
        </li>

        <li style={styles.liLinks}>
          <Link to="/courses" className='navbar-btn'>About</Link>
        </li>
        <li style={styles.liLinks}>
          <Link to="/courses" className='navbar-btn'>Students</Link>
        </li>
      </ul>
      <ul className='col-md-1'>
        <li style={styles.liLinks}>
          <a href='/' className='navbar-apply right'>Apply</a>
        </li>
      </ul>
    </div>
  </nav>
)};

export default Navbar;
