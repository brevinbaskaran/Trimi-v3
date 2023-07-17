import React from 'react';
import HeroSection from '../components/HomeSection';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Membership from '../components/Membership';
import Teams from '../components/Teams';
import ContactForm from '../components/ContactForm';
import Transform from '../components/HealthInfo';
import HeroSectionFrench from '../components_fr/HomeSection_fr';
import FeaturesFrench from '../components_fr/Features_fr';
import FAQFrench from '../components_fr/FAQ_fr';
import MembershipFrench from '../components_fr/Membership_fr';
import TeamsFrench from '../components_fr/Teams_fr';
import ContactFormFrench from '../components_fr/ContactForm_fr';
import TransformFrench from '../components_fr/HealthInfo_fr';

export default function Home({ language = 'EN' }) {
  const renderComponents = () => {
    if (language === 'EN') {
      return (
        <>
          <HeroSection />
          <Features />
          <Membership />
          <Teams />
          <FAQ />
          <Transform />
          <ContactForm />
        </>
      );
    } else if (language === 'FR') {
      return (
        <>
          <HeroSectionFrench />
          <FeaturesFrench />
          <MembershipFrench />
          <TeamsFrench />
          <FAQFrench />
          <TransformFrench />
          <ContactFormFrench />
        </>
      );
    }
  };

  return <>{renderComponents()}</>;
}
