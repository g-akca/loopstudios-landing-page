import logo from "/images/logo.svg";
import hamburgerIcon from "/images/icon-hamburger.svg";

function Header() {
  return (
    <header className="flex justify-between items-center h-6">
      <img src={logo} alt="Loopstudios logo" className="h-full" />

      <button className="h-4 cursor-pointer">
        <img src={hamburgerIcon} alt="Menu icon" className="h-full" />
      </button>
    </header>
  )
}

export default Header;