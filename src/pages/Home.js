import React from "react";
import HeroSection from '../components/HomeSection'
import Features from "../components/Features"
import FAQ from "../components/FAQ"
import Membership from "../components/Membership"
import Teams from "../components/Teams"
import ContactForm from '../components/ContactForm';



export default function Home() {

  return (
    <>
      <HeroSection/>
      <Features/>
      <Membership/>
      <Teams/>
      <FAQ/>
      <ContactForm/> 



    </>
  );
}