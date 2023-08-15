'use client';

import { useState } from 'react';

import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../NavBar/NavBar';

interface Props {
  children: React.ReactNode;
}

function LandingPageToggle({ children }: Props) {
  const [showLandingPage, setShowLandingPage] = useState(true);

  function handleClick() {
    setShowLandingPage(false);
  }

  return (
    <>
      {showLandingPage ? (
        <LandingPage setShowLandingPage={handleClick} />
      ) : (
        <>
          <NavBar />
          {children}
        </>
      )}
    </>
  );
}

export default LandingPageToggle;
