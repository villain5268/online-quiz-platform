import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = ({ onTimeUp }) => {
  const [time, setTime] = useState(60); 

  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }
    const timerId = setInterval(() => setTime(t => t - 1), 1000);
    return () => clearInterval(timerId);
  }, [time, onTimeUp]);

  return (
    <div className='timer'>
      Time Remaining: {time}s
    </div>
  );
};

export default Timer;
