import React from 'react';
import HeaderSection from '../../user/components/HeaderSection'; // Correct relative path
import FooterSection from '../../user/components/FooterSection'; // Correct relative path
import AboutUs from '../../user/components/AboutUs';
import Brands from './Brands'
export default function Home() {
  return (
    <div>
      <HeaderSection />
      <Brands/>
      <AboutUs/>
      <FooterSection />
    </div>
  );
}
