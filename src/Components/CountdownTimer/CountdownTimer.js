import React, { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils';
import './CountdownTimer.css';

const defaultRemainingTime = {
  seconds: '0',
  minutes: '0',
  hours: '0',
  days: '0',
};

const CoundownTimer = ({ countdownTimestamp }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestamp);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestamp]);

  function updateRemainingTime(countdown) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  return (
    <div className="countdown-timer">
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span>{remainingTime.hours}</span>
      <span>hours</span>
      <span>{remainingTime.minutes}</span>
      <span>minutes</span>
      <span>{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CoundownTimer;
