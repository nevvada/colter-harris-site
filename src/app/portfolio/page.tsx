import Image from 'next/image';
import React from 'react';

import Header from '../Header/Header';
import { Movies, ALL_MOVIES } from './movies';
import { VIDEOS_PAGE } from '../routeConfig';

import styles from './movies.module.css';

// TODO: update grid
// function renderMoviePosters(videos: Movies[keyof Movies]['videos']) {
//   return videos.map(({ id, image, name }) => (
//     <a href={`/videos/${id}`} key="id">
//       <div className="shadow-[0_0_0_rgba(255,255,255,0)] transition-shadow duration-[0.3s] ease-[ease] hover:shadow-[0_0_10px_10px_rgba(255,255,255,0.5)] hover:scale-105">
//         {image ? (
//           <Image alt={`${name} movie poster`} src={image.src} />
//         ) : (
//           <div
//             className="h-[500px] w-full bg-[black] flex items-center justify-center text-center p-3"
//           >
//             COMING SOON
//           </div>
//         )}
//       </div>

//       <div className="mx-0 my-[50px]">{name}</div>
//     </a>
//   ));
// }

// function renderPortfolio() {
//   const moviesUI = [];

//   for (const category in ALL_MOVIES) {
//     const { label, videos } = ALL_MOVIES[category];

//     const movieCategory = (
//       <section>
//         <h2 className="h-[100px] text-5xl">{label}</h2>
//         <div className="grid grid-cols-[repeat(4,1fr)] gap-[50px]">{renderMoviePosters(videos)}</div>
//       </section>
//     );

//     moviesUI.push(movieCategory);
//   }

//   return moviesUI;
// }

// export default function VideosPage(): React.ReactElement {
//   return (
//     <main className="videos">
//       <Header
//         headerImages={VIDEOS_PAGE.headerImages}
//         headerText={VIDEOS_PAGE.headerText}
//       />
//       <div className="content">{renderPortfolio()}</div>
//     </main>
//   );
// }

function renderVideoSection() {
  const { embed, id, name } =  ALL_MOVIES.personalProjects.videos[0];

  return (
    <section key={id}>
      <h2>{name}</h2>
      <div className={styles.embed}>{embed}</div>
    </section>
  );
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