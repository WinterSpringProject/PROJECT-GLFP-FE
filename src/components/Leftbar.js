
import React from 'react';
import './css/Leftbar.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';



function Leftbar() {
    return (
        <div className='left-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              LOL
            </Link>
          </div>
          </div>

          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              OVERWATCH
            </Link>
          </div>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              STARCRAFT
            </Link>
          </div>
          
        
          <div className='social-icons-l'>
            <Link
              className='social-icon-link-l steam'
              to='/'
              target='_blank'
              aria-label='Steam'
            >
              <i className='fab fa-steam' />
            </Link>
            
        </div>

      </section>
    </div>
  );
}

export default Leftbar;


{/* <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              STEAM
            </Link>
          </div> */}

          {/* <div class='social-icons'>
            <Link
              class='social-icon-link ghost'
              to='/'
              target='_blank'
              aria-label='Ghost'
            >
              <i class="fas fa-gamepad"></i>
            </Link>
        </div>

        <div class='social-icons'>
            <Link
              class='social-icon-link steam'
              to='/'
              target='_blank'
              aria-label='Steam'
            >
              <i class="fab fa-playstation"></i>
            </Link>
        </div> */}