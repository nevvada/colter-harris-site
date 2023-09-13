import React from 'react';

import Header from '../Header/Header';

import { VIDEOS_PAGE } from '../routeConfig';

import styles from './videos.module.css';

const ALL_VIDEOS = [
  {
    embed: (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/CBebr7mtdhs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    id: 0,
    name: 'Investigating the JFK Assassination, with Furries',
  },
];

function renderVideoSection() {
  return ALL_VIDEOS.map(({ embed, id, name }) => (
    <section key={id}>
      <h2>{name}</h2>
      <div className={styles.embed}>{embed}</div>
    </section>
  ));
}

export default function VideosPage(): React.ReactElement {
  return (
      <main className="videos">
        <Header
          headerImages={VIDEOS_PAGE.headerImages}
          headerText={VIDEOS_PAGE.headerText}
        />

        <div className="content">
          {renderVideoSection()}
        </div>
      </main>
  );
}
