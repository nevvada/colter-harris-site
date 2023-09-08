'use client';

import { useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../NavBar/NavBar';

interface Props {
  children: React.ReactNode;
}

function LandingPageToggle({ children }: Props) {
  const shouldShowLandingPage = sessionStorage.getItem('showLandingPage');
  const [showLandingPage, setShowLandingPage] = useState(
    shouldShowLandingPage !== '0'
  );

  // NOTE: do not use this approach, because `useEffect` updates async after initial render
  // useEffect(() => {
  //   const shouldShowLandingPage = sessionStorage.getItem('showLandingPage');

  //   if (shouldShowLandingPage === '0') {
  //     setShowLandingPage(false);
  //   }
  // }, []);

  function handleClick() {
    sessionStorage.setItem('showLandingPage', '0');
    setShowLandingPage(false);
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {showLandingPage ? (
        <LandingPage setShowLandingPage={handleClick} />
      ) : (
        <>
          <NavBar />
          {children}
        </>
      )}
    </GoogleReCaptchaProvider>
  );
}

export default LandingPageToggle;
