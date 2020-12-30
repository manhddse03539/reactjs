import { useState } from 'react';

import './App.css';
import DragDrop from './components/DragDrop/index';

function App() {
  const dragItems = [
    { id: 0, name: "Drag1" },
    { id: 1, name: "Drag2" },
    { id: 2, name: "Drag3" },
    { id: 3, name: "Drag4" },
    { id: 4, name: "Drag5" },
  ];
  const cloneItems = [...dragItems];
  const [dropedItems, setDropedItems] = useState([]);

  const onDrag = () => {
  }
  const handleOnDragStart = (e) => {
    e.dataTransfer.setData("Text", e.target.id);
  }
  const handleOnDrop = (e) => {
    e.preventDefault();
    const dataID = e.dataTransfer.getData("Text");
    for (const item of cloneItems) {
      if (item.id === parseInt(dataID)) {
        setDropedItems([...dropedItems, { id: item.id, name: item.name }]);
      }
    }
  }
  const allowDrop = (e) => {
    e.preventDefault();
  }
  return (
    <div className="App">
      <DragDrop
        onDrag={onDrag}
        handleOnDragStart={handleOnDragStart}
        handleOnDrop={handleOnDrop}
        allowDrop={allowDrop}
        dragItems={dragItems}
        dropedItems={dropedItems}
      />
    </div>
  );
}

export default App;
