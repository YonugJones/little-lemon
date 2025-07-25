import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <nav className='footer-columns'>
        <div className='picture-column-footer'>
          <img
            src='https://placehold.co/120x180'
            alt='will show food at footer'
          />
        </div>
        <div className='doormat-navigation-column'>
          <h4>Doormat Navigation</h4>
          <ul>
            <li>
              <a href='/home'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/menu'>Menu</a>
            </li>
            <li>
              <a href='/reservation'>Reservation</a>
            </li>
            <li>
              <a href='/order-online'>Order Online</a>
            </li>
            <li>
              <a href='/login'>Login</a>
            </li>
          </ul>
        </div>
        <div className='contact-column'>
          <h4>Contact</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className='social-media-links-column'>
          <h4>Social Media Links</h4>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
