import React, { useState, useRef } from 'react';

const PostFilterForm = (props) => {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    // if don't use useRef ater render it will return intinial value is null
    // when use useref ater render it still keep current value
    const typingTimeOutRef = useRef(null);
    const handleSearchTermChange = e => {
        const value = e.target.value;
        setSearchTerm(value);
        if (!onSubmit) return;
        // if stop typing then after 300ms -> submit
        // if done a typing eventhought 300ms -> Clear, reset to 300ms and continue
        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef.current);
        }
        typingTimeOutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value
            };
            onSubmit(formValue);
        }, 300)
    }

    return (
        <form className="Post-filter">
            <input
                value={searchTerm}
                onChange={handleSearchTermChange}
            />
        </form>
    );
}

export default PostFilterForm;