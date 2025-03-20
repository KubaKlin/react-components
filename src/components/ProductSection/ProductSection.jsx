import style from './ProductSection.module.css';
import {FormattedTitle} from "./FormattedTitle.jsx";

export const ProductSection = ({ title, description, image, reverse }) => {

  return (
    <div
      className={style.productSection}
      style={reverse ? { flexDirection: 'row-reverse' } : null}
    >
      <div className={style.productSectionContent}>
        <FormattedTitle title={title}/>
        <p className={style.paragraph}>{description}</p>
      </div>
      <div className={style.productSectionImage}>
        <img className={style.image} src={image} alt="product image" />
      </div>
    </div>
  );
};
