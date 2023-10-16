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

const SHARED_LINK_CLASS = 'items-center cursor-pointer m-2 p-2 flex flex-col justify-around';

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
    imageAlt: 'email mailbox',
    imageSrc: 'https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711280/colter%20harris%20site/email_ez3m1n.gif',
    name: 'contact',
    href: '/contact',
  },
  {
    className: `${SHARED_LINK_CLASS} ${styles.linkButton}`,
    id: 2,
    imageAlt: 'person running with camera',
    imageSrc: 'https://res.cloudinary.com/dmfnrbrly/image/upload/v1697481167/colter%20harris%20site/spinny_camera_fmbyuf.gif',
    name: 'portfolio',
    href: '/portfolio',
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
        ${styles.navBar}
        items-center mb-5 bg-fixed
        flex flex-col m-[5%] px-5 py-2.5 border-[10px] border-[#9198e5] lg:grid-rows-none lg:grid-cols-[25%_75%] lg:max-h-[1100px] lg:w-4/5 lg:ml-[5%] lg:mt-[15%]
        `}
    >
      <Image
        alt="Colter Harris header"
        className="w-[350px] lg:w-[400px]"
        height={0}
        src="https://res.cloudinary.com/dmfnrbrly/image/upload/v1694711239/colter%20harris%20site/colter_harris_header_qua3sx.png"
        width={800}
      />

      <StarMarquee />

      <div className="flex flex-col lg:flex-col lg:justify-center">
        {renderLinks()}
      </div>

      <StarMarquee />
    </aside>
  );
}

export default NavBar;
