import { useState } from "react"
export default function Form(props) {
 
  let [text,setText] = useState({top:"",bottom:""})

  function handleInputChange(event){
    setText(prev => {
      return (
        {
          ...prev,
          [event.target.name] :event.target.value
        }
      )
    })
  }

  return (
    <div className="form">
      
      <input type="text" name="top" id=""  value={text.top}      onChange={handleInputChange}/>
      <input type="text" name="bottom" id="" value={text.bottom} onChange={handleInputChange}/>
      <button  onClick={props.func}> get a new meme image </button>

     <div className="memeCon">
      <h2 className="top meme--text">{text.top}</h2>
      <h2 className="bottom meme--text">{text.bottom}</h2>
     <img src={props.url} />
     </div>
    </div>
  )
  
};
