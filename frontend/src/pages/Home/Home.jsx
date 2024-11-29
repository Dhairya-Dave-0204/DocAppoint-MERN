import React from 'react'
import { FeatureCard, Header, ListPracticeBanner, SurveyBanner, Testimonial } from '../../components/component_index'

function Home() {
  return (
    <>
      <Header />
      <FeatureCard />
      <Testimonial />
      <ListPracticeBanner />
      <SurveyBanner />
    </>
  )
}

export default Home