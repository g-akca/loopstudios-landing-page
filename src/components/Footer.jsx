import logo from "/images/logo.svg";
import facebookIcon from "/images/icon-facebook.svg";
import twitterIcon from "/images/icon-twitter.svg";
import pinterestIcon from "/images/icon-pinterest.svg";
import instagramIcon from "/images/icon-instagram.svg";

function Footer() {
  return (
    <footer 
      className="
        py-14 px-10 bg-black 
        flex flex-col gap-4 items-center 
        tablet:flex-row tablet:justify-between tablet:px-20 tablet:py-11
      "
    >
      <div className="flex flex-col gap-10 mb-10 tablet:gap-6 tablet:m-0">
        <img src={logo} alt="Loopstudios logo" className="h-6 w-36" />

        <ul className="text-white text-center flex flex-col gap-4 tablet:flex-row">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="flex flex-col gap-4 tablet:gap-6">
        <ul className="h-6 flex justify-center items-center gap-4 tablet:justify-end">
          <li><img src={facebookIcon} alt="Facebook icon" /></li>
          <li><img src={twitterIcon} alt="Twitter icon" /></li>
          <li><img src={pinterestIcon} alt="Pinterest icon" /></li>
          <li><img src={instagramIcon} alt="Instagram icon" /></li>
        </ul>

        <p className="text-white opacity-50 text-center">© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;