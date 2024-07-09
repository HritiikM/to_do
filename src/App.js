import './App.css';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState('');
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setFirst(e.target.value);
  };

  const removeToList = (e) => {
    const result = items.filter((word) => word.id !== e);
    console.log(result);
    setItems(result);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (first) {
      setItems([...items, { id: items.length, listitem: first, done: false }]);
      setFirst('');
    }
  };

  const doneHandler = (e) => {
    const result = items.map((item) =>
      item.id === e ? { ...item, done:!item.done} : item
    );
    console.log(result);
    setItems(result);
  };

  return (
    <>
      <div className="App">
        <form onSubmit={addHandler}>
          <input type="text" value={first} onChange={handleChange} />
          <input type="submit" value="Add" />
        </form>

        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Item</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td style={ item.done ? {  textDecoration:  'line-through' ,background:'#4CAF50' } :{}}>
                  {item.listitem}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={item.done}
                    onChange={() => doneHandler(item.id)}
                  />
                </td>
                <td>
                  <button onClick={() => removeToList(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
