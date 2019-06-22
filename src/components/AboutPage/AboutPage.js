const AboutPage = () => {
  return (
    <div className="main">
      <section className="about-content">
        <h1>Who We Are</h1>
        <div className="about-imgs">
          <img
            src="../imgs/about/compass-image-one@2x.png"
            alt="Rebecca and Devon working on their laptops at Compass Coffee"
          />
          <img
            src="../imgs/about/wtcss-hiking.jpg"
            alt="Devon, Brittany and Nathan posing at the top of a peak at Shenandoah National Park"
          />
          <img
            src="../imgs/about/board-games.jpg"
            alt="Brittany, Devon, Nathan and Rebecca posting for an image at a Boardgame event"
          />
        </div>
        <p>
          Our team is a Washington, DC based group of quirky creatives that have
          a genuine love for web development. We are three coding bootcamp grads
          and one clutch graphic designer taking on the challenge of making CSS
          more approachable and fun, even for those that declare “I can’t CSS!”.
        </p>
        <a href="" className="btn red-btn" target="_blank">
          Read More About Us
        </a>
        <section className="half-confetti-layer right-confetti">
          <img src="../imgs/other/half-confetti-dark.svg" />
        </section>
        <h2>Our Team</h2>
        <div className="about-profiles">
          <div className="profile brittany-profile">
            <div className="profile-img-container">
              <img
                className="profile-img-mascot"
                src="../imgs/about/brittany.png"
                alt="Illustrated headshot of a black cat wearing a sweater"
              />
            </div>
            <h2 className="profile-name">Brittany Walker</h2>
            <p className="profile-title">Founder & Developer</p>
            <p className="profile-pronouns">she/her</p>
            <div className="profile-bio">
              I like theater more than you
              <img
                src="../imgs/about/woman-tipping-hand-emoji.png"
                alt="woman tipping hand emoji"
              />
            </div>
            <div className="profile-icons">
              <a href="https://musicalwebdev.com" target="_blank">
                <i className="fas fa-link" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/musicalwebdev?lang=en"
                target="_blank"
              >
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a href="www.linkedin.com/in/brittanyrwalker" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="profile rebecca-profile">
            <div className="profile-img-container">
              <img
                className="profile-img-mascot"
                src="../imgs/about/rebecca-2.png"
                alt="Illustrated headshot of a flamingo wearing a blue t-shirt"
              />
            </div>
            <h2 className="profile-name">Rebecca Price</h2>
            <p className="profile-title">Graphic Designer</p>
            <p className="profile-pronouns">she/her</p>
            <div className="profile-bio">
              Unironic La Croix lover
              <img
                src="../imgs/about/grapefruit.png"
                alt="grapefruit la croix can"
              />
            </div>
            <div className="profile-icons">
              <a href="http://rebeccaprice.me/" target="_blank">
                <i className="fas fa-link" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/rebeccuhhhh?lang=en" target="_blank">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/rebeccuhhhhh/?hl=en"
                target="_blank"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="profile devon-profile">
            <div className="profile-img-container">
              <img
                className="profile-img-mascot"
                src="../imgs/about/devon.png"
                alt="Illustrated headshot of a fox wearing a monocle and a stripped t-shirt"
              />
            </div>
            <h2 className="profile-name">Devon Charles</h2>
            <p className="profile-title">Founder & UX Designer</p>
            <p className="profile-pronouns">he/him</p>
            <div className="profile-bio">
              Unamused but patient
              <img
                src="../imgs/about/sunglasses-emoji.png"
                alt="face with sunglasses emoji"
              />
            </div>
            <div className="profile-icons">
              <a href="https://twitter.com/devoncharles22" target="_blank">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/devoncharles22/"
                target="_blank"
              >
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="profile nathan-profile">
            <div className="profile-img-container">
              <img
                className="profile-img-mascot"
                src="../imgs/about/nathan.png"
                alt="Illustrated headshot of a bunny wearing a bowtie and glasses"
              />
            </div>
            <h2 className="profile-name">Nathan León</h2>
            <p className="profile-title">Front-End Developer</p>
            <p className="profile-pronouns">he/him</p>
            <div className="profile-bio">
              <img
                src="../imgs/about/hand-sign-emoji.png"
                alt="rock hand emoji"
              />
              Eat, cry, love
              <img
                src="../imgs/about/hand-sign-emoji.png"
                alt="rock hand emoji"
              />
            </div>
            <div className="profile-icons">
              <a href="https://nathancleon.com/" target="_blank">
                <i className="fas fa-link" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/nathancleon" target="_blank">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com" target="_blank">
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="profile renly-profile">
            <div className="profile-img-container">
              <img
                className="profile-img-mascot"
                src="../imgs/about/renly-headshot@2x.png"
                alt="Illustrated headshot Renly, Nathan's dog"
              />
            </div>
            <h2 className="profile-name">Renly León</h2>
            <p className="profile-title">Bork of Directors</p>
            <div className="profile-bio">
              First of his name
              <img src="../imgs/about/crown-emoji.png" alt="crown emoji" />
            </div>
          </div>
          <div className="profile ipa-profile">
            <div className="profile-img-container">
              <img
                className="profile-img-mascot"
                src="../imgs/about/ipa-headshot@2x.png"
                alt="Illustrated headshot of Ipa, Rebeccas dog"
              />
            </div>
            <h2 className="profile-name">Ipa Price</h2>
            <p className="profile-title">Bork of Directors</p>
            <div className="profile-bio">Shy but loud</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
