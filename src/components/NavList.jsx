function NavList() {
  return (
    <ul className="text-white text-center flex flex-col gap-4 tablet:flex-row desktop:gap-8">
      <li>
        <a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-6">
          About
        </a>
      </li>
      <li>
        <a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-6">
          Careers
        </a>
      </li>
      <li>
        <a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-6">
          Events
        </a>
      </li>
      <li>
        <a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-6">
          Products
        </a>
      </li>
      <li>
        <a href="#" className="relative after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-0 after:h-0.5 after:bg-white after:transition-all hover:after:w-6">
          Support
        </a>
      </li>
    </ul>
  );
}

export default NavList;