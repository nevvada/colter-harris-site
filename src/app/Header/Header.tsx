import React from 'react';

import CustomImage from '../CustomImage/CustomImage';

import styles from './Header.module.css';

interface HeaderImage {
  imageAlt: string;
  imageSrc: string;
}

interface HeaderProps {
  headerImages: HeaderImage[];
  headerText: string;
}

function Header(props: HeaderProps) {
  // NOTE: there will only ever be two images in the header
  const [firstImage, secondImage] = props.headerImages;

  return (
    <header className="mt-4 items-center grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] justify-items-center lg:col-[span_3] lg:grid-cols-[1fr_1fr_1fr] lg:grid-rows-[1fr]">
      <CustomImage
        classes="w-auto h-[150px] lg:h-[200px]"
        imageAlt={firstImage.imageAlt}
        imageSrc={firstImage.imageSrc}
      />

      <h1 className="text-center text-[4rem] col-[1_/_span_2] row-[2] lg:col-auto lg:row-auto lg:order-2">{props.headerText}</h1>

      <CustomImage
        classes={`${styles.secondImage} w-auto h-[150px] lg:h-[200px]`}
        imageAlt={secondImage.imageAlt}
        imageSrc={secondImage.imageSrc}
      />
    </header>
  )
}

export default Header;
