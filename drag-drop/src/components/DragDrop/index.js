import React from 'react';
import './index.css';

const index = (props) => {
    const { onDrag, handleOnDragStart, handleOnDrop, allowDrop, dragItems, dropedItems } = props;

    return (
        <div className="drag-drop">
            <div onDrop={handleOnDrop} onDragOver={allowDrop} className="drop-space">
                {dropedItems.map(item => (
                    <span key={item.id}>
                        {item.name}
                    </span>
                ))}
            </div>
            <div className="drag-items">
                {dragItems.map(item => (
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
