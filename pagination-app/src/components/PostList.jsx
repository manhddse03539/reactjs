import React from 'react';

const PostList = (props) => {
    const { items } = props;
    return (
        <ul className="Post-list">
            {items.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default PostList;