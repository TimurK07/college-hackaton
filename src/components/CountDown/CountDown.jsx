import { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('2024-11-07T00:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className='header__two__title'>
      <p>к 125-летию Каныша Сатпаева и дню цифровизации</p>
      <div className='hedaer__time'>
        <div className='header__time__info'>
          <span>{timeLeft.days || 0}</span>
          <span>дней</span>
        </div>
        <div className='header__time__info'>
          <span>{timeLeft.hours || 0}</span>
          <span>часов</span>
        </div>
        <div className='header__time__info'>
          <span>{timeLeft.minutes || 0}</span>
          <span>минут</span>
        </div>
        <div className='header__time__info'>
          <span>{timeLeft.seconds || 0}</span>
          <span>секунд</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;