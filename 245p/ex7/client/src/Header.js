import "./Header.css";

function Header() {
  return (
    <>
    {/* className is used instead of class */}
      <div className="header">
        <a href="https://www.nba.com/lakers/" className="logo">
            Los Angeles Lakers
        </a>
        <div className="headerRight">
          <a className="active" href="#home">Home</a>
          <a href="#contact">Location</a>
          <a href="#about">Job</a>
        </div>
      </div>
    </>
  );
}

export default Header;