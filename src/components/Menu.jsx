import '../index.css'
import aboutImg from '../assets/About-img/albert-dera-ILip77SbmOE-unsplash-removebg-preview.png'
import linkdenIcon from '../assets/icons/linkedin (1).png'
import twitterIcon from '../assets/icons/twitter (1).png'
import behanceIcon from '../assets/icons/behance (1).png'
import upworkIcon from '../assets/icons/upwork (1).png'
import designIcon from '../assets/icons/99.png'
import fiverIcon from '../assets/icons/fiverr (1).png'
import ntwrkIcon from '../assets/icons/network (2).png'
import dimension from '../assets/icons/dimensions (2).png'
import modelingIco from '../assets/icons/3d-modeling (2).png'
import serviceIco from '../assets/services_icon/layers (1).png'
import serviceIcosec from '../assets/services_icon/layers (2).png'
import usersearch from '../assets/services_icon/search-user.png'

import productIco from '../assets/services_icon/cubes (1).png'
export default function Menu(){
    return(
        <>
                <main>
          <section id="hero">
            <div className="hero">
              <div className="hero_heading">
                <h1>
                  Creative <span>Designer</span> by Abdul wahab
                </h1>
              </div>
              <div className="hero-button">
                <button>Hire Me</button>
                <a href="/#portfolio">Portfolio</a>
              </div>
              <div className="hero-cards">
                <div className="card1">
                  <div className="card1-heading">
                    <h2>Our Client Satisfy</h2>
                  </div>
                  <div className="card1-content">
                    <div className="img">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </div>
                    <div className="img">
                      <img
                        src="https://th.bing.com/th/id/OIP.9_F-ugkiZmcv1WYnbElRRwHaGM?w=195&h=180&c=7&r=0&o=5&pid=1.7"
                        alt=""
                      />
                    </div>
                    <div className="img">
                      <img
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </div>
                    <div className="img">
                      <img
                        src="https://th.bing.com/th/id/OIP.9_F-ugkiZmcv1WYnbElRRwHaGM?w=195&h=180&c=7&r=0&o=5&pid=1.7"
                        alt=""
                      />
                    </div>
                    <div className="img">
                      <div>
                        <span>20+</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card2">
                  <div className="card2-imgs">
                    <div className="card2-imgss" />
                    <div className="card2-img">
                      <img
                        src={aboutImg}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="card-btn">
                    <button>Follow Me</button>
                    <button>Top Rated</button>
                  </div>
                  <div className="card-section">
                    <div className="section1">
                      <img src={linkdenIcon} alt="" />
                      <img src={twitterIcon} alt="" />
                      <img src={behanceIcon} alt="" />
                    </div>
                    <div className="section2">
                      <img src={upworkIcon} alt="" />
                      <img src={designIcon} alt="" />
                      <img src={fiverIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className="card3">
                  <div className="card3-heading">
                    <h2>12</h2>
                    <h1>Years of Experience</h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="rating">
            <div className="rating">
              <div className="rating-cards">
                <div className="rating-card">
                  <h2>00</h2>
                  <span>Awards</span>
                </div>
                <div className="rating-card">
                  <h2>00</h2>
                  <span>Clients</span>
                </div>
                <div className="rating-card">
                  <h2>00</h2>
                  <span>Years Experience</span>
                </div>
                <div className="rating-card">
                  <h2>00</h2>
                  <span>Projects</span>
                </div>
              </div>
            </div>
          </section>
          <section id="about">
            <div className="about">
              <div className="about-img">
                <div className="about-img1" />
                <div className="about-img2">
                  <img
                    src={aboutImg}
                    alt=""
                  />
                </div>
              </div>
              <div className="about-content">
                <div className="about-heading">
                  <span>About Us</span>
                  <h2>Why Did You Choose Me ?</h2>
                </div>
                <div className="about-section">
                  <p>
                    We're your partners in crafting digital that blend innovation with
                    functionality
                  </p>
                  <p>
                    consulation discover apartments. ndulgence off under folly death
                    wrote cause for her way spite. Plan upon yet way get cold spot its
                    week
                  </p>
                </div>
                <div className="about-btn">
                  <button>Download Cv</button>
                </div>
              </div>
            </div>
          </section>
          <section id="skills">
            <div className="skills">
              <div className="skills-heading">
                <h1>Skills &amp; Experiences</h1>
                <span>
                  There are many variations of passages of Lorem Ipsum available.but the
                  majority have suffered alteration in some form . by injected humour
                </span>
              </div>
              <div className="skills-content">
                <div className="skills-content-section-1">
                  <div className="skills-content-section-1-heading">
                    <h2>Experiences</h2>
                  </div>
                  <div className="skills-content-section1-card">
                    <div className="skills-content-section1-li">
                      <span>Jun 2024 - April 2012</span>
                      <div className="skills-content-section1-para">
                        <h2>Full Time Freelancer</h2>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="skills-content-section1-li">
                      <span>Jun 2009 - April 2012</span>
                      <div className="skills-content-section1-para">
                        <h2>Product Designer</h2>
                        <p>Technonext Ltd</p>
                      </div>
                    </div>
                    <div className="skills-content-section1-li">
                      <span>Jun 2009 - April 2012</span>
                      <div className="skills-content-section1-para">
                        <h2>UI/UX Designer</h2>
                        <p>Softburgh.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="skills-content-section-2">
                  <div className="skills-content-section2-heading">
                    <h2>Skills</h2>
                  </div>
                  <div className="skills-content-section-2-card">
                    <div className="skills-content-section-2-li">
                      <img src={ntwrkIcon} alt="" />
                      <h2>User Experience Design</h2>
                    </div>
                    <div className="skills-content-section-2-li">
                      <img src={dimension} alt="" />
                      <h2>Visual Design</h2>
                    </div>
                    <div className="skills-content-section-2-li">
                      <img src={modelingIco} alt="" />
                      <h2>Prototype</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="services">
            <div className="services">
              <div className="services-heading">
                <h2>My Services</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
                  aperiam tempore, ad exercitationem quaerat minima? Facere cumque,
                  similique obcaecati fuga sed enim vero maiores dolore quis! Cumque,
                  quo incidunt? Quos.
                </p>
              </div>
              <div className="services-content">
                <div className="services-outer-card">
                  <div className="services-card">
                    <div className="services-card-img">
                      <img src={serviceIco} alt="" />
                    </div>
                    <div className="card-services-text">
                      <h2>UI/UX Design</h2>
                      <span>
                        Are you looking for information on UI/UX design principles.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="services-outer-card">
                  <div className="services-card">
                    <div className="services-card-img">
                      <img src={serviceIcosec} alt="" />
                    </div>
                    <div className="card-services-text">
                      <h2>UI Animation</h2>
                      <span>
                        {" "}
                        Are you looking for information on UI/UX design principles.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="services-outer-card">
                  <div className="services-card">
                    <div className="services-card-img">
                      <img src={usersearch} alt="" />
                    </div>
                    <div className="card-services-text">
                      <h2>User Research</h2>
                      <span>
                        Are you looking for information on UI/UX design principles.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="services-outer-card">
                  <div className="services-card">
                    <div className="services-card-img">
                      <img src={productIco}alt="" />
                    </div>
                    <div className="card-services-text">
                      <h2>Product Design</h2>
                      <span>
                        Are you looking for information on UI/UX design principles.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="portfolio">
            <div className="portfolio">
              <div className="portfolio-heading">
                <h2>My Portfolio</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sed
                  suscipit molestias reprehenderit voluptatem mollitia culpa corrupti
                  tempor a. Dolorum, minima.
                </p>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-card">
                  <div className="portfolio-card-heading">
                    <h2>App Development</h2>
                    <span>UI/UX Design</span>
                  </div>
                </div>
                <div className="portfolio-card">
                  <div className="portfolio-card-heading">
                    <h2>App Development</h2>
                    <span>UI/UX Design</span>
                  </div>
                </div>
                <div className="portfolio-card">
                  <div className="portfolio-card-heading">
                    <h2>App Development</h2>
                    <span>UI/UX Design</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="testimonal">
            <div className="testimonal">
              <div className="testimonal-card">
                <div className="testimonal-card-1">
                  <div className="testimonal-first-card">
                    <q>
                      <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Accusamus rem itaque placeat a numquam provident illum,
                        perferendis mollitia. Maxime molestias ducimus nam autem earum
                        similique praesentium aspernatur suscipit nobis dolorum?
                      </span>
                    </q>
                  </div>
                  <div className="testimonal-second-card">
                    <div className="img">
                      <img
                        src={aboutImg}
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h2>John Smith</h2>
                      <span>Product Designer</span>
                    </div>
                  </div>
                </div>
                <div className="testimonal-card-2">
                  <button>&lt;</button>
                  <button>&gt;</button>
                </div>
              </div>
            </div>
          </section>
          <section id="blogs">
            <div className="blogs">
              <div className="blog-heading">
                <h2>Latest Blog</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dicta
                  error, quibusdam ab repellat explicabo laudantium facere a repellendus
                  est ipsam, consectetur laboriosam nesciunt soluta ipsa obcaecati animi
                  quisquam necessitatibus?
                </p>
              </div>
              <div className="blog-content">
                <div className="blog-cards">
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="https://th.bing.com/th/id/R.6b960e9bfd4dfa87be3b4db9270e0f4d?rik=liZwxSywJoVtCA&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>
                    <div className="blog-text">
                      <span>JUN 27 , 2033</span>
                      <p>This Big mistake Could Cost you your job as a UX designer</p>
                    </div>
                    <div className="blog-button">
                      <button>Read More</button>
                    </div>
                  </div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="https://th.bing.com/th/id/R.6b960e9bfd4dfa87be3b4db9270e0f4d?rik=liZwxSywJoVtCA&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>
                    <div className="blog-text">
                      <span>JUN 27 , 2033</span>
                      <p>This Big mistake Could Cost you your job as a UX designer</p>
                    </div>
                    <div className="blog-button">
                      <button>Read More</button>
                    </div>
                  </div>
                  <div className="blog-card">
                    <div className="blog-img">
                      <img
                        src="https://th.bing.com/th/id/R.6b960e9bfd4dfa87be3b4db9270e0f4d?rik=liZwxSywJoVtCA&pid=ImgRaw&r=0"
                        alt=""
                      />
                    </div>
                    <div className="blog-text">
                      <span>JUN 27 , 2033</span>
                      <p>This Big mistake Could Cost you your job as a UX designer</p>
                    </div>
                    <div className="blog-button">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        </>
    )
}