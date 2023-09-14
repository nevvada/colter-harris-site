import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import StarMarquee from './StarMarquee';

import styles from './NavBar.module.css';

interface Link {
  className: string;
  id: number;
  imageAlt: string;
  imageSrc: string;
  name: string;
  href: string;
}

const SHARED_LINK_CLASS = 'items-center cursor-pointer grid justify-center m-2 p-2';

const LINKS: Link[] = [
  {
    className: `${SHARED_LINK_CLASS} ${styles.linkButton}`,
    id: 0,
    imageAlt: 'slug',
    imageSrc: 'https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711321/colter%20harris%20site/slug_jqf75h.gif',
    name: 'about',
    href: '/about',
  },
  {
    className: `${SHARED_LINK_CLASS} ${styles.linkButton}`,
    id: 1,
    imageAlt: 'slug',
    imageSrc: 'https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711280/colter%20harris%20site/email_ez3m1n.gif',
    name: 'contact',
    href: '/contact',
  },
  {
    className: `${SHARED_LINK_CLASS} ${styles.linkButton}`,
    id: 2,
    imageAlt: 'slug',
    imageSrc: 'https://res.cloudinary.com/dmfnrbrly/image/upload/v1694712862/colter%20harris%20site/cameraman_run_zg9l0k.gif',
    name: 'videos',
    href: '/videos',
  },
];

function renderLinks() {
  return (
    LINKS.map(({ className, id, imageAlt, imageSrc, name, href }) => (
      <Link
        className={className}
        href={href}
        key={id}
      >
        <Image
          alt={imageAlt}
          src={imageSrc}
          height={100}
          width={100}
        />

        <span className="text-3xl text-center">{name}</span>
      </Link>
    ))
  )
}

function NavBar() {
  return (
    <aside
      className={`
        items-center mb-5
        ${styles.navBar}
      `}
    >
      <Image
        alt="Colter Harris header"
        className={styles.colterHarrisHeader}
        height={0}
        src="/images/colter_harris_header.png"
        width={800}
      />

      <StarMarquee />

      <div className={styles.links}>
        {renderLinks()}
      </div>
    </aside>
  );
}

export default NavBar;
