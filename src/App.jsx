import { useRef, useState } from 'react'
import './App.css'
import Intro from './components/Intro'
import Hero from './components/Hero'

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [showIntro, setShowIntro] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)

  const audioRef = useRef(null)

  const startPortfolio = () => {
    setHasStarted(true)
    setShowIntro(true)

    audioRef.current?.play().catch((error) => {
      console.log('Audio could not play:', error)
    })

    setTimeout(() => {
      setShowIntro(false)
      setShowPortfolio(true)
    }, 4500)
  }

  return (
    <main>
      <audio ref={audioRef} src="/intro.mp3" preload="auto" />

      {!hasStarted && (
        <section className="welcome-screen">
          <div className="welcome-content">
            <button
              className="welcome-button"
              onClick={startPortfolio}
            >
              ▶ Enter Portfolio
            </button>
          </div>
        </section>
      )}

      {showIntro && <Intro />}

      {showPortfolio && <Hero />}
    </main>
  )
}

export default App