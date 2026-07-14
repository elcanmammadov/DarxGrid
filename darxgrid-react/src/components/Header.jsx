import logo from '../img/logo.png';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div id="logo">
          <a href="#"><img src={logo} alt="Darx logo" /></a>
        </div>
        <nav>
          <div>
            <p>Call us: +99455 123 45 67</p>
            <div id="icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fas fa-rss"></i></a>
              <a href="#"><i className="fab fa-digg"></i></a>
              <a href="#"><i className="far fa-envelope"></i></a>
              <a href="#"><i className="fas fa-user-friends"></i></a>
            </div>
          </div>
          <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
