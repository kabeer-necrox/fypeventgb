import React, { useEffect, useState } from 'react';
import SigUp from './SignUp';
import Aboutus from './Aboutus';
import Contactus from './Contactus';

export default function Homepage() {
  const [displayText, setDisplayText] = useState("Elevate Your Events in the Heart of the Himalayas");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText((prevText) =>
        prevText === "Elevate Your Events in the Heart of the Himalayas"
          ? "Welcome to GB Events"
          : "Elevate Your Events in the Heart of the Himalayas"
      );
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount

  }, []);

  return (
    <>
      <div className='homepage'>
        <h1 className='check'>GB Events</h1>
        <p className='homepageText'>{displayText}</p>
        <hr className='homehr' />
      </div>
      <Aboutus />
      <SigUp />
      <Contactus />
    </>
  );
}
