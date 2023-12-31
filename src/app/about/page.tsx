import React from 'react';

import Header from '../Header/Header';
import CustomImage from '../CustomImage/CustomImage';

import { ABOUT_PAGE } from '../routeConfig';

const ABOUT_CONTENT_TEXT =
  '"Colter Harris is a California-born, Brooklyn-based filmmaker. A highly skilled, hard working writer, director, and editor. His work displays an unmistakable sensibility formed by his upbringing in the Bay Area: reverence for outsiders, distrust of authority figures, an absurd sense of humor, and genuine pathos for the characters he creates. On his sets, there is a communal feeling of working on something unique, a “Colter-film.” Whether it be a film, an illustration, or a song: a consummate artist. Colter Harris is always creating, he can’t help it."';

const PORTRAIT_IMAGE_STYLES = {
  border: '10px outset #9198e5',
  gridRow: 2,
  width: '500px',
};

function AboutPage(): React.ReactElement {
  return (
    <main>
      <Header
        headerImages={ABOUT_PAGE.headerImages}
        headerText={ABOUT_PAGE.headerText}
      />

      <div className="content flex flex-col items-center">
        <CustomImage
          classes="mb-8"
          imageAlt="colter portrait upclose"
          imageSrc="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711234/colter%20harris%20site/colter_upclose_i3q9xi.jpg"
          styles={PORTRAIT_IMAGE_STYLES}
        />

        <article>
          <p>{ABOUT_CONTENT_TEXT}</p>
          <p className="mt-4">- Alex Berg</p>
        </article>

        <CustomImage
          classes="mt-8"
          imageAlt="colter portrait lensflare"
          imageSrc="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711233/colter%20harris%20site/colter_lensflare_gfs4dr.jpg"
          styles={PORTRAIT_IMAGE_STYLES}
        />
      </div>
    </main>
  );
}

export default AboutPage;
