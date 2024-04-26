
function ListTodo(props) {

  const {items, onItemDelete, phrase} = props

  const handleDelete = (evt) => {
    evt.preventDefault()
    onItemDelete(evt.target.dataset.iditem)
  }

  return (
    <div>
      <h2>{phrase["List of all tasks"]}:</h2>
      <table>
        <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td className={item[1] ? "strong" : ""} >{item[0]}</td>
            <td> <a href="" data-iditem={index} onClick={handleDelete}>{phrase["Delete"]}</a> </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListTodo;
