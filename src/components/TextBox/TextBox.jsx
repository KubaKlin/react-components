import style from './TextBox.module.css';

export const TextBox = ({ title, description, blueBackground }) => {
  return (
    <div
      className={`${style.textBox} ${blueBackground ? style.blueBackground : ''}`}
    >
      <h4
        className={`${style.header} ${blueBackground ? style.blueBackground : ''}`}
      >
        {title}
      </h4>
      <p
        className={`${style.paragraph} ${blueBackground ? style.blueBackground : ''}`}
      >
        {description}
      </p>
    </div>
  );
};
