import React, { useState } from 'react';
import CheckBox from 'rc-checkbox';

function Checkbox() {
    const [checked, setChecked] = useState(false);
    const onChange = (e) => {
        setChecked(!checked);
        console.log(e.target.checked);
    }

    return (
        <CheckBox
            checked = {checked}
            onChange={onChange}
        />
    )
}

export default Checkbox;
