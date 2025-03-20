import style from './BigHeader.module.css';

export const BigHeader = ({ title, subtitle }) => {
  return (
    <section className={style.bigHeaderWrapper}>
      <h3 className={style.header}>{title}</h3>
      <p className={style.paragraph}>{subtitle}</p>
    </section>
  );
};
