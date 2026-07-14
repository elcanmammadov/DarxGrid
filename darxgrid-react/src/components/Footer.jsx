import a12 from '../img/a12.jpg';
import a02 from '../img/a02.jpg';
import a16 from '../img/a16.jpg';
import a11 from '../img/a11.jpg';
import a10 from '../img/a10.jpg';
import a03 from '../img/a03.jpg';
import a13 from '../img/a13.jpg';
import a04 from '../img/a04.jpg';

export default function Footer() {
  return (
    <footer>
      <div id="iconf" className="container">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-digg"></i></a>
        <a href="#"><i className="fas fa-rss"></i></a>
        <a href="#"><i className="fab fa-flickr"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-dribbble"></i></a>
      </div>
      <div id="footer2" className="container">
        <div>
          <div className="hr">
            <hr /><h1>Flickr Stream</h1><hr />
          </div>
          <div id="footerpic">
            <img src={a12} alt="" />
            <img src={a02} alt="" />
            <img src={a16} alt="" />
            <img src={a11} alt="" />
            <img src={a10} alt="" />
            <img src={a03} alt="" />
          </div>
        </div>
        <div id="ft2">
          <div className="hr">
            <hr /><h1>Popular posts</h1><hr />
          </div>
          <div className="ftpic">
            <img className="fimg" src={a13} alt="" />
            <div className="info">
              <h2>Vintage Photography of <br /> a Woman with Tools</h2>
              <span><i className="fa-regular fa-comment"></i> 12 comments</span>
            </div>
          </div>
          <div className="ftpic">
            <img className="fimg" src={a04} alt="" />
            <div className="info">
              <h2>Woman flinging her long <br /> dark Hair</h2>
              <span><i className="fa-regular fa-comment"></i> 23 comments</span>
            </div>
          </div>
        </div>
        <div>
          <div className="hr">
            <hr /><h1>stay in touch</h1><hr />
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input id="name" name="name" type="text" placeholder="Name" />
            <input id="email" name="email" type="email" placeholder="Email" />
            <input id="sub" type="submit" value="SUBSCRIBE" />
          </form>
        </div>
      </div>
      <div id="fbg">
        <div id="copyright" className="container">
          <div>
            <a href="#">Home</a>
            <a href="#">Portfolio</a>
            <a href="#">Sitemap</a>
            <a href="#">Contact</a>
          </div>
          <p>DarX @2012 by PremiumCoding | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
