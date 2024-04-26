import {useRef} from "react"

function AddTodo(props) {

  const {onItemSubmit, phrase} = props

  const textarea = useRef()
  const checkbox = useRef()

  const handleSubmit = () => {
    onItemSubmit([textarea.current.value, checkbox.current.checked])

    textarea.current.value = ""
    textarea.current.focus()
    checkbox.current.checked = false
  }


  return (
    <div id="pridanie_ulohy">
      <h2>{phrase["Add a task"]}:</h2>
      <textarea ref={textarea}></textarea>
      <label> <input type="checkbox" ref={checkbox} /> {phrase["Important task"]} </label>
      <button type="submit" className="btn" onClick={handleSubmit}> {phrase["Save the task"]}</button>
    </div>
  );
}

export default AddTodo;
