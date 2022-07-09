import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='#'>
            Survey Management
          </Link>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item dropdown'>
                <Link
                  class='nav-link dropdown-toggle'
                  to='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'>
                  Features
                </Link>
                <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <Link class='dropdown-item' to='#'>
                      Survey
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='navbar-container'>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'>
              <ul className='navbar-nav  me-auto mb-2 mb-lg-0'>
                <li className='nav-item dropdown nav-link active'>
                  <Link className='nav-link' to='/signin'>
                    SignIn
                  </Link>
                </li>
                <li className='nav-item dropdown nav-link active'>
                  <Link className='nav-link' to='/signup'>
                    SignUp
                  </Link>
                </li>

                {/* <li className='nav-item dropdown'>
                  <i
                    className='nav-link dropdown-toggle ft-user bi-person-circle'
                    to='#'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'>
                    {' '}
                  </i>
                  <ul
                    className='dropdown-menu dropdown-menu-lg-end '
                    aria-labelledby='navbarDropdown'>
                    <li>
                      <Link className='dropdown-item' to='#'>
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='#'>
                        Another action
                      </Link>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <Link className='dropdown-item' to='#'>
                        Something else here
                      </Link>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
