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
    <header className={`items-center grid ${styles.header}`}>
      <CustomImage
        imageAlt={firstImage.imageAlt}
        imageSrc={firstImage.imageSrc}
        styles={{ maxContent: '120px', width: 'auto' }}
      />

      <h1>{props.headerText}</h1>

      <CustomImage
        imageAlt={secondImage.imageAlt}
        imageSrc={secondImage.imageSrc}
        styles={{ maxContent: '120px', width: 'auto' }}
      />
    </header>
  )
}

export default Header;
