import logo from "/images/logo.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";
import NavList from "./NavList.jsx";

function Header({ openMenu }) {
  return (
    <header className="flex justify-between items-center h-6 relative z-1 tablet:h-8 desktop:items-start">
      <img src={logo} alt="Loopstudios logo" className="h-full" />
      
      <nav className="hidden desktop:block">
        <NavList />
      </nav>

      <button type="button" className="h-4 cursor-pointer desktop:hidden" onClick={openMenu}>
        <img src={hamburgerIcon} alt="Menu icon" className="h-full" />
      </button>
    </header>
  )
}

export default Header;