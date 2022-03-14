import "./Buttons.scss";

const Buttons = ({ text, variant }) => {
  return <button className={`buttons ${variant}`}>{text}</button>;
};

export default Buttons;
