import '../index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
export default function Header(){
    return(
        <>
            <header id="header">
        <nav  id="navbar" className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Portfolio
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse nav-links" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item li-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item li-item">
          <a className="nav-link" href="/#about">
         About Us
          </a>
        </li>
    
    
        <li className="nav-item li-item">
          <a className="nav-link" href="/#services">Service</a>
        </li>
    
        <li className="nav-item li-item">
          <a className="nav-link" href="/#portfolio">Portfolio</a>
        </li>
    
        <li className="nav-item li-item">
          <a className="nav-link" href='/#blogs'>Blog</a>
        </li>
      </ul>
      <form className="d-flex nav-button"   role="search" onClick={(e)=>e.preventDefault()}>
        <button type="submit">
          Contact
        </button>
      </form>
    </div>
  </div>
</nav>
</header>

        </>
    )
}