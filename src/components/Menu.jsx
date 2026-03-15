import logo from "/images/logo.svg";
import closeIcon from "/images/icon-close.svg";

function Menu({ closeMenu }) {
  return (
    <div className="fixed inset-0 bg-black text-white flex flex-col gap-40 px-6 py-10 z-50">
      <div className="h-6 flex justify-between items-center">
        <img src={logo} alt="Loopstudios logo" className="h-full" />

        <button type="button" className="cursor-pointer" onClick={closeMenu}>
          <img src={closeIcon} alt="Close icon" className="h-full" />
        </button>
      </div>

      <nav className="flex flex-col gap-6 font-josefin font-light text-2xl uppercase">
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Events</a>
        <a href="#">Products</a>
        <a href="#">Support</a>
      </nav>
      
    </div>
  );
}

export default Menu;