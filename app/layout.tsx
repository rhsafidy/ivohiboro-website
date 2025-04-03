import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
};

const nauryzRedkeds = localFont({
  variable: '--font-nauryz-redkeds',
  src: '../public/fonts/nauryz_redkeds/nauryzredkeds.ttf',
  display: 'swap',
});

const satoshi = localFont({
  variable: '--font-satoshi',
  src: '../public/fonts/satoshi/normal.ttf',
  display: 'swap',
});

const satoshiItalic = localFont({
  variable: '--font-satoshi-italic',
  src: '../public/fonts/satoshi/italic.ttf',
  display: 'swap',
});

const Limelight = localFont({
  variable: '--font-limelight',
  src: '../public/fonts/Limelight/Limelight-Regular.ttf',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nauryzRedkeds.variable} ${Limelight.variable} ${satoshi.variable} ${satoshiItalic.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
