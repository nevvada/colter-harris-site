
import React from 'react';

import CustomImage from '../CustomImage/CustomImage';

interface Props {
  setShowLandingPage: () => void;
}

function LandingPage(props: Props) {
  function handleClick() {
    props.setShowLandingPage();
  }

  return (
    <div className="flex flex-col items-center">
      <CustomImage
        imageAlt="skull"
        imageSrc="/images/welcome_colter_zone3.png"
      />

      <CustomImage
        imageAlt="skull"
        imageSrc="/images/skullfire.gif"
        styles={{ width: '15%' }}
      />

      <div onClick={handleClick}>
        <CustomImage
          imageAlt="skull"
          imageSrc="/images/enter_3.gif"
        />
      </div>
    </div>
  );
}

export default LandingPage;
