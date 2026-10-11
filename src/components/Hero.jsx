import Navbar from './Navbar'
import WhatIDo from './WhatIDo'
import Projects from './Projects'
import CareerSeries from "./CareerSeries"
import Skills from './Skills'
import Contact from './Contact'

function Hero() {
  return (
    <>
      <Navbar />
    <section className="portfolio-screen">
      <h1 className="portfolio-name">NEHA MORE</h1>

      <h2 className="portfolio-role">
        Data Scientist
        <br />
        <span>& Engineer</span>
      </h2>

      <div className="portfolio-description">
        <p>
           With 4+ years of experience across machine learning and data engineering, I enjoy building end-to-end data solutions that turn complex data into meaningful insights. I've worked with Python, SQL, Microsoft Fabric, Azure, and Power BI to develop scalable data platforms, design ETL/ELT pipelines, and build predictive models that support better decision-making.
            I love to use my expertise gained from data engineering and data science experience, combining reliable data foundations with analytics and machine learning to solve real-world business problems across the public sector, healthcare, and financial services.          I enjoy combining reliable data foundations with analytics and
          machine learning to solve real-world business problems across the public sector, healthcare and financial services.
        </p>
      </div>
    </section>

    <WhatIDo />
    <Projects />
    <CareerSeries />
    <Skills />
    <Contact />
    </>
  )
}

export default Hero