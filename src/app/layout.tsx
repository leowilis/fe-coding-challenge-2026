import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: {
    default: 'Luma - Online Learning Platform',
    template: '%s | Luma',
  },
  description: 'Build skills that actually move you forward.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body className='antialiased'>{children}</body>
    </html>
  );
}
