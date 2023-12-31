import React from 'react';
import Image from 'next/image';

import styles from './Star.module.css';

function Star() {
  return (
    <Image
      alt="star"
      height={0}
      src="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711320/colter%20harris%20site/star_nhwwir.gif"
      style={{ height: 'auto' }}
      width={50}
    />
  );
}

function StarMarquee() {
  return (
    <div className="w-full">
      <div className={`items-center flex text-3xl justify-center ${styles.marqueeContent}`}>
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
}

export default StarMarquee;
