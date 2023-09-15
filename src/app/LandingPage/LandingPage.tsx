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
    <div className="flex justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <CustomImage
          classes="mt-6"
          imageAlt="skull"
          imageSrc="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711325/colter%20harris%20site/welcome_colter_zone3_k3pboi.png"
        />

        <CustomImage
          classes="w-1/4"
          imageAlt="skull"
          imageSrc="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711320/colter%20harris%20site/skullfire_vggxwe.gif"
        />

        <div onClick={handleClick}>
          <CustomImage
            classes="cursor-pointer"
            imageAlt="skull"
            imageSrc="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711304/colter%20harris%20site/enter_3_zsfppr.gif"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
