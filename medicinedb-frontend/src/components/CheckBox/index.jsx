/* eslint-disable react/prop-types */
import React from 'react';
import CheckBox from 'rc-checkbox';

function Checkbox({ checked, onChange}) {
    return (
        <CheckBox
            checked = {checked}
            onChange={onChange}
        />
    )
}

export default Checkbox;
