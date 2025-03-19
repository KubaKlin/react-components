import style from './productSection.module.css';

export const ProductSection = ({ title, description, image, reverse }) => {
  const [firstWord, ...restWords] = title.split(' ');
  const formattedTitle = (
    <>
      <span className={style.highlighted}>{firstWord}</span>{' '}
      {restWords.join(' ')}
    </>
  );

  return (
    <div
      className={style.productSection}
      style={reverse ? { flexDirection: 'row-reverse' } : null}
    >
      <div className={style.productSectionContent}>
        <h4>{formattedTitle}</h4>
        <p>{description}</p>
      </div>
      <div className={style.productSectionImage}>
        <img src={image} alt="product image" />
      </div>
    </div>
  );
};
