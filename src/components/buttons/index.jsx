import './index.css'

export default function Button(props) {
  const { text, color, color1, onclick } = props;

  return (
    <div>
      <button onClick={onclick} style={{ background: color, color:color1 }}>{text}</button>
    </div>
  );
}
