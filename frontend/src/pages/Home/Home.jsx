import React from 'react'
import { DocCourousal, FeatureCard, Header, ListPracticeBanner, SurveyBanner, Testimonial } from '../../components/component_index'

function Home() {
  return (
    <>
      <Header />
      <FeatureCard />
      <DocCourousal />
      <Testimonial />
      <ListPracticeBanner />
      <SurveyBanner />
    </>
  )
}

export default Home