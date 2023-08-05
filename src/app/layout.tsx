import './globals.css';
import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';

import styles from './layout.module.css';
import NavBar from './NavBar/NavBar';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colter Harris Site',
  description: 'Site for Colter Harris, filmmaker, artist, and living cartoon.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inconsolata.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
