import React, { useState } from 'react';

function SeasonList() {
  // State to hold the list of items
  const [items, setItems] = useState(['Autumn', 'Spring', 'Summer', 'Winter']);
  // State to hold the current value of the input field
  const [inputValue, setInputValue] = useState('');

  // Function to add a new item to the list
  const addItem = () => {
    if (inputValue.trim() === '') return; // Prevent adding empty items
    setItems([...items, inputValue]);
    setInputValue('');
  };

  // Function to remove an item by index
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1>Season Names</h1>
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          value={inputValue}
          placeholder="Add a new season"
          onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={addItem} style={{ marginLeft: 8 }}>Add</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ marginBottom: 6 }}>
            {item}
            <button
              onClick={() => removeItem(index)}
              style={{ marginLeft: 12 }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SeasonList;
