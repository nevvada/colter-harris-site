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
    <header className={`items-center mt-4 ${styles.header}`}>
      <CustomImage
        classes="w-auto"
        imageAlt={firstImage.imageAlt}
        imageSrc={firstImage.imageSrc}
      />

      <h1 className={`${styles.headerText} text-center`}>{props.headerText}</h1>

      <CustomImage
        classes={`${styles.secondImage} w-auto`}
        imageAlt={secondImage.imageAlt}
        imageSrc={secondImage.imageSrc}
      />
    </header>
  )
}

export default Header;
