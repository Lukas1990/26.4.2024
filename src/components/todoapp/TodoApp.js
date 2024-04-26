import {useState, useEffect} from "react"

import AddTodo from "./AddTodo"
import ListTodo from "./ListTodo"

function TodoApp(props) {
  const {phrase} = props

  let savedItems = JSON.parse(localStorage.getItem("savedItems"))
  if (savedItems == null) savedItems = []

  const [items, setItems] = useState(savedItems)

  const handleItemSubmit = (item) => {
    setItems([...items, item])
  }

  const handleItemDelete = (id) => {
    setItems(items.filter( (item, index) => index != id ))
  }

  useEffect(() => {
    let posielam_data = JSON.stringify(items)
    localStorage.setItem("savedItems", posielam_data)
  }, [items])

  return (
    <div className="kontajner" id="zoznam_uloh">
      <ListTodo phrase={phrase} items={items} onItemDelete={handleItemDelete} />
      <AddTodo phrase={phrase} onItemSubmit={handleItemSubmit} />
    </div>
  );
}

export default TodoApp;
