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

const SHARED_LINK_CLASS = 'items-center cursor-pointer grid h-40 justify-center m-2 p-2 w-40';

const LINKS: Link[] = [
  {
    className: `${SHARED_LINK_CLASS} ${styles.linkButton}`,
    id: 0,
    imageAlt: 'slug',
    imageSrc: '/images/slug.gif',
    name: 'ABOUT',
    href: '/about',
  },
  {
    className: `${SHARED_LINK_CLASS} ${styles.linkButton}`,
    id: 1,
    imageAlt: 'slug',
    imageSrc: '/images/email.gif',
    name: 'CONTACT',
    href: '/contact',
  },
  {
    className: `${SHARED_LINK_CLASS} ${styles.linkButton}`,
    id: 2,
    imageAlt: 'slug',
    imageSrc: '/images/cameraman_run.gif',
    name: 'VIDEOS',
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
        items-center flex flex-col h-screen justify-center mb-5 fixed w-1/5
        ${styles.navBar}
      `}
    >
      <Image
        alt="Colter Harris header"
        height={0}
        src="/images/colter_harris_header.png"
        style={{ height: 'auto' }}
        width={800}
      />

      <StarMarquee />

      {renderLinks()}
    </aside>
  );
}

export default NavBar;
