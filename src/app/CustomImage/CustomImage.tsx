import React from 'react';
import Image from 'next/image';

interface CustomImageProps {
  classes?: string;
  imageAlt: string;
  imageSrc: string;
  styles?: Record<string, string | number>;
}

function CustomImage(props: CustomImageProps): React.ReactElement {
  return (
    <Image
      alt={props.imageAlt}
      className={props.classes}
      height={1000}
      src={props.imageSrc}
      style={props.styles}
      width={1000}
    />
  )
}

export default CustomImage;
