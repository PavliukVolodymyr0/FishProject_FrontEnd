import './Input.css'

const Input=({title,type})=> {
  return (
    <>
        <div className="Input">
            <input type={type} placeholder={title}/>
        </div>
    </>
  )
}

export default Input