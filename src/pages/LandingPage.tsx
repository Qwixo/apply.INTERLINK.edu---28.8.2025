import Hero from '../components/Hero'
import Steps from '../components/Steps'
import CTA from '../components/CTA'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Hero />
      <Steps />
      <CTA />
    </div>
  )
}
