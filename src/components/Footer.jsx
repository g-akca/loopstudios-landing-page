import logo from "/images/logo.svg";
import facebookIcon from "/images/icon-facebook.svg";
import twitterIcon from "/images/icon-twitter.svg";
import pinterestIcon from "/images/icon-pinterest.svg";
import instagramIcon from "/images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="py-14 px-10 bg-black flex flex-col gap-4 items-center">
      <div className="w-36 flex flex-col gap-10">
        <img src={logo} alt="Loopstudios logo" className="h-6" />

        <ul className="text-white text-center flex flex-col gap-4">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>

        <ul className="h-6 flex justify-between items-center">
          <li><img src={facebookIcon} alt="Facebook icon" /></li>
          <li><img src={twitterIcon} alt="Twitter icon" /></li>
          <li><img src={pinterestIcon} alt="Pinterest icon" /></li>
          <li><img src={instagramIcon} alt="Instagram icon" /></li>
        </ul>
      </div>

      <p className="text-white opacity-50 text-center">© 2021 Loopstudios. All rights reserved.</p>
    </footer>
  )
}

export default Footer;