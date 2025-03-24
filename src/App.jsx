import './global.css';
import { Navbar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { BigHeader } from './components/BigHeader/BigHeader';
import { ProductSection } from './components/ProductSection/ProductSection';
import { TextBox } from './components/TextBox/TextBox';
import { CompanyLogo } from './components/CompanyLogo/CompanyLogo';
import { productSections } from './utilities/productSections';
import { textBoxes } from './utilities/textBoxes';
import { bigHeaderContent } from './utilities/bigHeaderContent';
import { logos } from './utilities/logos';
import { Footer } from './components/Footer/Footer';
import { FeatureBoxWrapper } from './components/FeatureBoxWrapper/FeatureBoxWrapper';
import { TextBoxWrapper } from './components/TextBox/TextBoxWrapper';
import { CompanyLogoWrapper } from './components/CompanyLogo/CompanyLogoWrapper';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <FeatureBoxWrapper />
      <BigHeader
        title={bigHeaderContent.title}
        subtitle={bigHeaderContent.subtitle}
      />
      <section>
        {productSections.map((productSection) => (
          <ProductSection
            key={productSection.id}
            title={productSection.title}
            description={productSection.description}
            image={productSection.image}
            reverse={productSection.reverse}
          />
        ))}
      </section>
      <TextBoxWrapper>
        {textBoxes.map((textBox) => (
          <TextBox
            key={textBox.id}
            title={textBox.title}
            description={textBox.description}
            blueBackground={textBox.blueBackground}
          />
        ))}
      </TextBoxWrapper>

      <CompanyLogoWrapper>
        {logos.map((logo) => (
          <CompanyLogo key={logo.id} icon={logo.icon} />
        ))}
      </CompanyLogoWrapper>

      <Footer />
    </>
  );
}

export default App;
