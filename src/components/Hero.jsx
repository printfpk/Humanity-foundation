import './Hero.css'
import logo from '../assets/logo.svg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-blur-area"></div>
      <div className="container">
        <div className="hero-content">
          <h1>Humanity Foundation is a Non-Profit Scaling a Revolutionary Volunteer-Led Mentoring Program Across India</h1>
          <div className="scroll-indicator">
            <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
