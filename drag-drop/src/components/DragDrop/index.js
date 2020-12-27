import React from 'react';
import './index.css';

const index = (props) => {
    const { onDrag, handleOnDragStart, handleOnDrop, allowDrop } = props;
    const DragItems = [
        { id: 0, name: "Drag1" },
        { id: 1, name: "Drag2" },
    ];
    return (
        <div className="drag-drop">
            <div onDrop={handleOnDrop} onDragOver={allowDrop} className="drop-space">
                <p>Drop here! Man</p>
            </div>
            <div className="drag-items">
                {DragItems.map(item => (
                    <span
                        id={item.id}
                        key={item.id}
                        draggable={true}
                        onDrag={onDrag}
                        onDragStart={handleOnDragStart}
                    >
                        {item.name}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default index;
