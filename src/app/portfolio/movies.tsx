export type Movies = {
  [key: string]: {
    label: string;
    videos: {
      embed: JSX.Element;
      id: number;
      name: string;
      image: null | {
        src: string;
        alt: string;
      };
    }[];
  };
};

// TODO: move to database
export const ALL_MOVIES: Movies = {
  personalProjects: {
    label: 'Personal Projects',
    videos: [
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
          >
            {' '}
          </iframe>
        ),
        id: 100,
        name: 'Investigating the JFK Assassination, with Furries',
        image: null,
      },

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
          >
            {' '}
          </iframe>
        ),
        id: 100,
        name: 'Investigating the JFK Assassination, with Furries',
        image: null,
      },

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
          >
            {' '}
          </iframe>
        ),
        id: 100,
        name: 'Investigating the JFK Assassination, with Furries',
        image: null,
      },

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
          >
            {' '}
          </iframe>
        ),
        id: 100,
        name: 'Investigating the JFK Assassination, with Furries',
        image: null,
      },

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
          >
            {' '}
          </iframe>
        ),
        id: 100,
        name: 'Investigating the JFK Assassination, with Furries',
        image: null,
      },
    ],
  },
};
