import './global.css';
import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { FeatureWithIcon } from './components/FeatureWithIcon/FeatureWithIcon';
import { BigHeader } from './components/BigHeader/BigHeader';
import { ProductSection } from './components/ProductSection/ProductSection';
import { TextBox } from './components/TextBox/TextBox';
import { CompanyLogo } from './components/CompanyLogo/CompanyLogo';
import { featureBoxes } from './utilities/featureBoxes';
import { productSections } from './utilities/productSections';
import { textBoxes } from './utilities/textBoxes';
import { bigHeaderContent } from './utilities/bigHeaderContent';
import { logos } from './utilities/logos';
import { Footer } from './components/Footer/Footer';
import { FeatureBoxWrapper } from './components/FeatureWithIcon/FeatureBoxWrapper.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FeatureBoxWrapper>
        {featureBoxes.map((featureBox) => (
          <FeatureWithIcon
            key={featureBox.id}
            title={featureBox.title}
            subtitle={featureBox.subtitle}
            icon={featureBox.icon}
            color={featureBox.color}
          />
        ))}
      </FeatureBoxWrapper>
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

      <Footer />
    </>
  );
}

export default App;
