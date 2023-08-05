import React from 'react';
import Image from 'next/image';

import Header from '../Header/Header';

import styles from './about.module.css';
import CustomImage from '../CustomImage/CustomImage';

const ABOUT_HEADER_IMAGES = [
  {
    imageAlt: 'rotating cow',
    imageSrc: '/images/cow.gif',
  },
  {
    imageAlt: 'dancing troupe',
    imageSrc: '/images/dancing_dudes.gif',
  },
];

const ABOUT_HEADER_TEXT = 'ABOUT ME';

const ABOUT_CONTENT_TEXT =
  '"Colter Harris is a California-born, Brooklyn-based filmmaker. A highly skilled, hard working writer, director, and editor. His work displays an unmistakable sensibility formed by his upbringing in the Bay Area: reverence for outsiders, distrust of authority figures, an absurd sense of humor, and genuine pathos for the characters he creates. On his sets, there is a communal feeling of working on something unique, a “Colter-film.” Whether it be a film, an illustration, or a song: a consummate artist. Colter Harris is always creating, he can’t help it."';

const PORTRAIT_IMAGE_STYLES = {
  border: '10px outset #9198e5',
  gridRow: 2,
  width: '400px',
};

function Page(): React.ReactElement {
  return (
    <>
      <main className="content flex flex-col items-center">
        <Header
          headerImages={ABOUT_HEADER_IMAGES}
          headerText={ABOUT_HEADER_TEXT}
        />

        <CustomImage
          imageAlt="colter portrait upclose"
          imageSrc="/images/colter_upclose.jpeg"
          styles={PORTRAIT_IMAGE_STYLES}
        />

        <article>
          <p>{ABOUT_CONTENT_TEXT}</p>
          <p>- Alex Berg</p>
        </article>

        <CustomImage
          imageAlt="colter portrait lensflare"
          imageSrc="/images/colter_lensflare.jpeg"
          styles={PORTRAIT_IMAGE_STYLES}
        />
      </main>
    </>
    // <main className="content flex flex-col items-center">
    //   <div className={`items-center grid` ${styles.aboutHeader}}>
    //     <Image
    //       className="about-header-gif"
    //       src="images/cow.gif"
    //     />
    //     <h1 className="about-header-h1">ABOUT ME</h1>
    //     <Image
    //       className="about-header-gif"
    //       src="images/dancing_dudes.gif"
    //     />
    //   </div>

    //   <img
    //     className="about-portrait"
    //     src="images/colter_upclose.jpeg"
    //   />
    //   <div className="about-text">
    //     <div>{aboutText}</div>
    //     <div>- Alex Berg</div>
    //   </div>
    //   <img
    //     className="about-portrait"
    //     src="images/colter_lensflare.jpeg"
    //   />
    // </main>
    // </Layout>
  );
}

export default Page;
