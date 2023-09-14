
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
    <div className="flex flex-col items-center justify-center h-screen">
      <CustomImage
        classes="mt-6"
        imageAlt="skull"
        imageSrc="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711325/colter%20harris%20site/welcome_colter_zone3_k3pboi.png"
      />

      <CustomImage
        imageAlt="skull"
        imageSrc="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711320/colter%20harris%20site/skullfire_vggxwe.gif"
        styles={{ width: '15%' }}
      />

      <div onClick={handleClick}>
        <CustomImage
          classes="cursor-pointer"
          imageAlt="skull"
          imageSrc="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711304/colter%20harris%20site/enter_3_zsfppr.gif"
        />
      </div>
    </div>
  );
}

export default LandingPage;
