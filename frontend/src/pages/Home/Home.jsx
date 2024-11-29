import React from 'react'
import { About, DocCourousal, FeatureCard, Header, ListPracticeBanner, SurveyBanner, Testimonial } from '../../components/component_index'

function Home() {
  return (
    <>
      <Header />
      <FeatureCard />
      <DocCourousal />
      <Testimonial />
      <About />
      <ListPracticeBanner />
      <SurveyBanner />
    </>
  )
}

export default Home