import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import { StrictMode } from 'react';

import LandingPageToggle from './LandingPageToggle/LandingPageToggle';

import './globals.css';

const inconsolata = Inconsolata({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colter Harris Site',
  description: 'Site for Colter Harris, filmmaker, artist, and living cartoon.',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StrictMode>
        <html lang="en">
          <body className={`${inconsolata.className}`}>
            <LandingPageToggle>{children}</LandingPageToggle>
          </body>
        </html>
    </StrictMode>
  );
}
