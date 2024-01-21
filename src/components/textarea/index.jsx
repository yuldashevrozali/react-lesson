import './index.css'

export default function Textarea(props) {
  const { value } = props;
  
  return (
    <div>
        <label htmlFor="textarea">Izoh <span>*</span></label>
        <textarea onChange={(e) => value(e.target.value)} placeholder='Kompaniya haqida izoh qoldiring...' id='textarea' cols="50" rows="10"></textarea>
    </div>
  )
}
