import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className='footer-area'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <a href='index.html' className='d-inline-block logo'>
                  {/*<img src='/images/logo.png' alt='logo' />*/}
                </a>
                <div className='newsletter-form'>
                  <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                  <form data-toggle='validator'>
                    <input
                      type='email'
                      className='input-newsletter'
                      placeholder='Enter your email'
                      name='EMAIL'
                      required
                      autoComplete='off'
                    />
                    <button type='submit'>
                      Subscribe Now <i className='bx bx-paper-plane'></i>
                    </button>
                    <div
                      id='validator-newsletter'
                      className='form-result'
                    ></div>
                  </form>
                </div>
                <ul className='social-links'>
                  <li>
                    <a href='#' target='_blank' className='facebook'>
                      <i className='bx bxl-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='twitter'>
                      <i className='bx bxl-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='linkedin'>
                      <i className='bx bxl-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#' target='_blank' className='instagram'>
                      <i className='bx bxl-instagram'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-2 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Cryptocurrency</h3>
                <ul className='services-links'>
                  <li>
                    <Link href='/buy'>Buy Bitcoin</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy BNB</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy Ethereum</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy Ripple</Link>
                  </li>
                  <li>
                    <Link href='/buy'>Buy Litecoin</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget pl-5'>
                <h3>Resources</h3>
                <ul className='quick-links'>
                  <li>
                    <Link href='/trade'>Trade</Link>
                  </li>
				  
                  <li>
                    <Link href='/guides'>Guides</Link>
                  </li>
                  <li>
                    <Link href='/wallet'>Wallets</Link>
                  </li>
                  <li>
                    <Link href='/faq'>FAQ</Link>
                  </li>
                  <li>
                    <Link href='/contact'>Contact</Link>
                  </li>
				  <li>
				  	<Link href='/leadership'>Leadership Team</Link>
                  </li>
                  <li>
                     <Link href='/privacy-policy'>Privacy Policy</Link>
                  </li>
                  <li>
                          <Link href='/terms-condition'>Terms & Conditions</Link>
					</li>
                </ul>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6 col-md-6'>
              <div className='single-footer-widget'>
                <h3>Contact Info</h3>
                <ul className='footer-contact-info'>
                  <li>
                    <div className='icon'>
                      <i className='bx bx-support'></i>
                    </div>
                    <p>
                      <a href='tel:+41767755555'>Call support</a>
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='bx bx-globe'></i>
                    </div>
                    <p>
                      <a href='mailto:hello@novis.com'>Email us</a>
                    </p>
                  </li>
                  <li>
                    <div className='icon'>
                      <i className='bx bx-map'></i>
                    </div>
                    <p>Place Cornavin 14, CH-1201 Genève, Switzerland</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='copyright-area'>
          <div className='container'>
            <p>
              Copyright 2021 <strong>TWIST SWAP</strong>. All Rights Reserved by{' '}
              <Link href='https://twist-swap.com/'>
                <a target='_blank'>TWIST SWAP</a>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
