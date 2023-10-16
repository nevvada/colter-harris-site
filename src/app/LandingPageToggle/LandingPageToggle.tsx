'use client';

import { useEffect, useState } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import LandingPage from '../LandingPage/LandingPage';
import NavBar from '../NavBar/NavBar';

interface Props {
  children: React.ReactNode;
}

function LandingPageToggle({ children }: Props) {
  const [showLandingPage, setShowLandingPage] = useState(true);

  // TODO: address flashing refresh on slower devices
  useEffect(() => {
    const shouldShowLandingPage = sessionStorage.getItem('showLandingPage');

    if (shouldShowLandingPage === '0') {
      setShowLandingPage(false);
    }
  }, []);

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
        <div className="grid lg:grid-rows-none lg:grid-cols-[25%_75%]">

          <NavBar />
          {children}
        </div>
      )}
    </GoogleReCaptchaProvider>
  );
}

export default LandingPageToggle;
