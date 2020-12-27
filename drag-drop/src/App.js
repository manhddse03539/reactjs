import './App.css';
import DragDrop from './components/DragDrop/index';

function App() {
  const onDrag = () => {
  }
  const handleOnDragStart = (e) => {
    e.dataTransfer.setData("Text", e.target.id);
  }
  const handleOnDrop = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("Text");
    const item = document.getElementById(data);
    e.target.appendChild(item.cloneNode(true));
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
      />
    </div>
  );
}

export default App;
