export default function Input(props) {
  const { text, type, length, value } = props;
  return (
      <>
          <label htmlFor="text">{text} <span>*</span></label><br />
          <input onChange={(e) => value(e.target.value)} maxLength={length} id='text' placeholder={text} type={type} />
      </>
  )
}
