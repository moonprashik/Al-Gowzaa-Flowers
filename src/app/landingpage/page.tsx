import React, { Suspense } from 'react'
import HomeScreen from "./LandingPage"

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <HomeScreen/>
    </Suspense>
  )
}
