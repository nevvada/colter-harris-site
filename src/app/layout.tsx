import type { Metadata } from 'next';
import { Inconsolata, VT323 } from 'next/font/google';
import { StrictMode } from 'react';

import LandingPageToggle from './LandingPageToggle/LandingPageToggle';

import './globals.css';

const inconsolata = Inconsolata({ subsets: ['latin'] });
const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
});

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
            <div className={`${vt323.className} text-black bg-white text-[25px] leading-5 fixed z-[1000] p-0.5`}>
              Unregistered HyperCam 2
            </div>
            <LandingPageToggle>{children}</LandingPageToggle>
          </body>
          <link rel="icon" href="/images/favicon.ico" sizes="any" />
        </html>
    </StrictMode>
  );
}
