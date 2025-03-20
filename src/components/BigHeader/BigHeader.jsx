import style from './BigHeader.module.css';

export const BigHeader = ({ title, subtitle }) => {
  return (
    <section className={style.bigHeaderWrapper}>
      <div className="container">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};
