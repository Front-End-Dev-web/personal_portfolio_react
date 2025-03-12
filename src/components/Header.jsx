import '../index.css'
export default function Header(){
    return(
        <>
                <header id="header">
  <nav id="navbar" className="navbar">
    <div className="nav_logo">
      <img src="application.png" alt="" />
      <h4> Portfolio</h4>
    </div>
    <div className="nav-links">
      <ul>
        <li className="li-item">
          <a href="/#">Home</a>
        </li>
        <li className="li-item">
          <a href="/#about">About Us</a>
        </li>
        <li className="li-item">
          <a href="/#services">Service</a>
        </li>
        <li className="li-item">
          <a href="/#portfolio">Portfolio</a>
        </li>
        <li className="li-item">
          <a href="/#blogs">Blog</a>
        </li>
      </ul>
    </div>
    <div className="nav-button">
      <button>Contact</button>
    </div>
  </nav>
</header>
        </>
    )
}