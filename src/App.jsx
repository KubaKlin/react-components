import './global.css';
import { Navbar } from './components/navbar/navbar.jsx';
import { Banner } from './components/banner/banner.jsx';
import { FeatureWithIcon } from './components/featureWithIcon/featureWithIcon.jsx';
import { BigHeader } from './components/bigHeader/bigHeader.jsx';
import { ProductSection } from './components/productSection/productSection.jsx';
import { TextBox } from './components/textBox/textBox.jsx';
import { CompanyLogo } from './components/companyLogo/companyLogo.jsx';
import { SocialIcon } from './components/socialIcon/socialIcon.jsx';
import { featureBoxes } from './utilities/featureBoxes.jsx';
import { productSections } from './utilities/productSections.jsx';
import { textBoxes } from './utilities/textBoxes.jsx';
import { bigHeaderContent } from './utilities/bigHeaderContent.jsx';
import { logos } from './utilities/logos.jsx';
import { socialIcons } from './utilities/socialIcons.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <section className="feature-boxes">
        <div className="container">
          {featureBoxes.map((featureBox, index) => (
            <FeatureWithIcon key={index} {...featureBox} />
          ))}
        </div>
      </section>
      <BigHeader {...bigHeaderContent} />
      <section>
        <div className="container">
          {productSections.map((productSection, index) => (
            <ProductSection key={index} {...productSection} />
          ))}
        </div>
      </section>
      <section className="text-box-section">
        <div className="container">
          {textBoxes.map((textBox, index) => (
            <TextBox ey={index} {...textBox} />
          ))}
        </div>
      </section>

      <section className="logo-section">
        <h5>You will be in good company</h5>
        <div className="container">
          {logos.map((logo, index) => (
            <CompanyLogo key={index} {...logo} />
          ))}
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <a href="/" className="logo">
              Logo
            </a>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>@Lorem</p>
          </div>

          <div className="footer-content">
            <h4>Contact us</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="footer-socials">
              <p>+908 89097 890</p>
              <div className="social-icons">
                {socialIcons.map((socialIcon, index) => (
                  <SocialIcon key={index} {...socialIcon} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
