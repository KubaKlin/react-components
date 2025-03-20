import style from './TextBox.module.css';

export const TextBox = ({ title, description, blueBackground }) => {
  return (
    <div
      className={style.textBox}
      style={
        blueBackground
          ? { backgroundColor: '#1090CB' }
          : { backgroundColor: '#F4F4F4' }
      }
    >
      <h4 style={blueBackground ? { color: '#FFFFFF' } : { color: '#252525' }}>
        {title}
      </h4>
      <p style={blueBackground ? { color: '#FFFFFF' } : { color: '#252525' }}>
        {description}
      </p>
    </div>
  );
};
