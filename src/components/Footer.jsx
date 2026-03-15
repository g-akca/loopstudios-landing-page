import logo from "/images/logo.svg";
import facebookIcon from "/images/icon-facebook.svg";
import twitterIcon from "/images/icon-twitter.svg";
import pinterestIcon from "/images/icon-pinterest.svg";
import instagramIcon from "/images/icon-instagram.svg";
import NavList from "./NavList.jsx";

function Footer() {
  return (
    <footer className="py-14 px-10 bg-black flex justify-center tablet:px-20 tablet:py-11">
      <div className="w-full max-w-277.5 flex flex-col gap-4 items-center tablet:flex-row tablet:justify-between">
        <div className="flex flex-col gap-10 mb-10 tablet:gap-6 tablet:m-0">
          <img src={logo} alt="Loopstudios logo" className="h-6 w-36" />

          <NavList />
        </div>

        <div className="flex flex-col gap-4 tablet:gap-6">
          <ul className="h-6 flex justify-center items-center gap-4 tablet:justify-end">
            <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-6">
              <img src={facebookIcon} alt="Facebook icon" />
            </a></li>
            <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-6">
              <img src={twitterIcon} alt="Twitter icon" />
            </a></li>
            <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-6">
              <img src={pinterestIcon} alt="Pinterest icon" />
            </a></li>
            <li><a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-6">
              <img src={instagramIcon} alt="Instagram icon" />
            </a></li>
          </ul>

          <p className="text-white opacity-50 text-center">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;