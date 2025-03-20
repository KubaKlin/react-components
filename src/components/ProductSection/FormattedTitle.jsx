import style from './ProductSection.module.css';

export const FormattedTitle = ({ title }) => {
  const [firstWord, ...restWords] = title.split(' ');
  return (
    <h4 className={style.header}>
      <span className={style.highlighted}>{firstWord}</span>{' '}
      {restWords.join(' ')}
    </h4>
  );
};
