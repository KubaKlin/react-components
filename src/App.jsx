import './global.css';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Banner } from './components/Banner/Banner.jsx';
import { FeatureWithIcon } from './components/FeatureWithIcon/FeatureWithIcon.jsx';
import { BigHeader } from './components/BigHeader/BigHeader.jsx';
import { ProductSection } from './components/ProductSection/ProductSection.jsx';
import { TextBox } from './components/TextBox/TextBox.jsx';
import { CompanyLogo } from './components/CompanyLogo/CompanyLogo.jsx';
import { SocialIcon } from './components/SocialIcon/SocialIcon.jsx';
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
          {featureBoxes.map((featureBox) => (
            <FeatureWithIcon
              key={featureBox.id}
              title={featureBox.title}
              subtitle={featureBox.subtitle}
              icon={featureBox.icon}
              color={featureBox.color}
            />
          ))}
        </div>
      </section>
      <BigHeader
        title={bigHeaderContent.title}
        subtitle={bigHeaderContent.subtitle}
      />
      <section>
        <div className="container">
          {productSections.map((productSection) => (
            <ProductSection
              key={productSection.id}
              title={productSection.title}
              description={productSection.description}
              image={productSection.image}
              reverse={productSection.reverse}
            />
          ))}
        </div>
      </section>
      <section className="text-box-section">
        <div className="container">
          {textBoxes.map((textBox) => (
            <TextBox
              key={textBox.id}
              title={textBox.title}
              description={textBox.description}
              blueBackground={textBox.blueBackground}
            />
          ))}
        </div>
      </section>

      <section className="logo-section">
        <h5>You will be in good company</h5>
        <div className="container">
          {logos.map((logo) => (
            <CompanyLogo key={logo.id} icon={logo.icon} />
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
                {socialIcons.map((socialIcon) => (
                  <SocialIcon
                    key={socialIcon.id}
                    icon={socialIcon.icon}
                    href={socialIcon.href}
                  />
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
