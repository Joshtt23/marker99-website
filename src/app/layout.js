// src/app/layout.js
import { Inter } from 'next/font/google';
import '../styles/globals.css';
// import { DefaultSeo } from 'next-seo';
// import metaData from '../../next-seo.config';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* <DefaultSeo {...metaData} /> */}</head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
