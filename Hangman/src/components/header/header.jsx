import logo from "../../assets/Images/nav_image.png";

function Header() {
  return (
  <header className="w-screen h-[25vh] bg-white/70  grid place-items-center">
    <img src={logo} className=" py-5" alt="game logo" />

  </header>
  
  )
}

export default Header;
