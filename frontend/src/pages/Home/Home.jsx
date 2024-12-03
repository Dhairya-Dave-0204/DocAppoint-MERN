import React from 'react'
import { AboutShort, DocCourousal, FeatureCard, Header, ListPracticeBanner, SurveyBanner, Testimonial } from '../../components/component_index'

function Home() {
  return (
    <>
      <Header />
      <FeatureCard />
      <DocCourousal />
      <Testimonial />
      <AboutShort />
      <ListPracticeBanner />
      <SurveyBanner />
    </>
  )
}

export default Home