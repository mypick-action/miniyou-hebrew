import React from 'react'
import Hero from './components/Hero'
import CTAButton from './components/CTAButton'

const App = () => {
  return (
    <div dir="rtl" style={{ padding: "2rem", textAlign: "right" }}>
      <Hero />
      <p>אתר זה מציג את הרעיון של מארז דמות אישי – בעברית מלאה.</p>
      <CTAButton />
    </div>
  )
}

export default App

