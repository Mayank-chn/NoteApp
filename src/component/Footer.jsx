import React from 'react'

function Footer() {
    //const currentYear= new Date().getFullYear();
  return (
    <footer>
      <div className='contact'>
              <span style={{ display: "inline-block", marginTop: 5 }}>
                Contact Us
              </span>

              <ul>
                <li>
                  <i class="fa fa-envelope"></i> info@3.com
                </li>
                <li>
                  <i class="fa fa-phone"></i> +91-7291007617
                </li>
                <li>
                  <i class="fa fa-map-marker"></i> Kolkata
                </li>
              </ul>
            </div>
        <p>Copyright ⓒ {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;