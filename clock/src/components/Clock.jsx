import React, { useState, useEffect } from 'react';

const Clock = (props) => {
    const [timer, setTimer] = useState('');
    const formatDate = (date) => {
        const hours = `0${date.getHours()}`.slice(-2);
        const minute = `0${date.getMinutes()}`.slice(-2);
        const seconds = `0${date.getSeconds()}`.slice(-2);
        return `${hours}:${minute}:${seconds}`;
    }
    useEffect(() => {
        const timerInterval = setInterval(() => {
            const now = new Date();
            const timerString = formatDate(now)
            setTimer(timerString);
        }, 1000);
        return () => {
            clearInterval(timerInterval);
        };
    }, []);
    return (
        <div className="Clock">
            <p style={{ fontsize: '2em' }}>{timer}</p>
        </div>
    );
}

export default Clock;