
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
    <>
      <CustomImage
        imageAlt="skull"
        imageSrc="/images/welcome_colter_zone3.png"
        styles={{}}
      />

      <CustomImage imageAlt="skull" imageSrc="/images/skullfire.gif" />

      <div onClick={handleClick}>
        <CustomImage
          imageAlt="skull"
          imageSrc="/images/enter_3.gif"
        />
      </div>
    </>
  );
}

export default LandingPage;
