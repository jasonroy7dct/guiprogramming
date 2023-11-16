import "./Header.css";

function Header() {
  return (
    <>
    {/* className is used instead of class */}
      <div className="header">
        <a href="https://github.com/jasonroy7dct" className="logo">
            Jason Hsieh
        </a>
        <div className="headerRight">
          <a className="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    </>
  );
}

export default Header;