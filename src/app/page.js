// import { NextSeo } from 'next-seo';

import Hero from '../components/hero';
import SEO from '../../next-seo.config';
import CallToAction from '../components/CallToAction';
import Contact from '../components/Contact';
import Events from '../components/Events';
import ImageCarousel from '../components/ImageCarousel';
import JobApplication from '../components/JobApplication';
import Reservation from '../components/Reservation';
import Menu from '../components/Menu';

export default function Home() {
  const isHiring = true;
  return (
    <>
      {/* <NextSeo {...SEO} /> */}
      <Hero />
      <CallToAction />
      <ImageCarousel />
      <Reservation />
      <section className="bg-gray-100 p-8 text-center">
        <Events />
        <Menu />
      </section>
      <Contact />
      {isHiring && <JobApplication />}
    </>
  );
}
