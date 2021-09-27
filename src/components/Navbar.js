import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            GLFP
            <i className="fas fa-arrows-alt-h"></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Landing'
                className='nav-links'
                onClick={closeMobileMenu}>
                채팅
              </Link>
            </li>

            <li>
              <Link
                to='/List'
                className='nav-links'
                onClick={closeMobileMenu}>
                게시판
              </Link>
            </li>

            <li>
              <Link
                to='/Mypage'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                마이페이지
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline' >
          <Link 
              to='/Log-in'
              onClick={closeMobileMenu}>
                  로그인
              </Link>
            </Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;