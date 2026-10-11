import './CareerSeries.css'

const experiences = [
  {
    company: 'Leicester City Council',
    subtitle: 'Predictive Analytics & Data Transformation',
    role: 'Junior Data Scientist & Data Engineer',
    period: 'March 2025 — Present',
    className: 'leicester-series',
    featured: true,
    description:
      'Building predictive models, behavioural analysis and statistical insights while modernising enterprise data platforms across Microsoft Fabric and Azure.',
    tags: [
      'Python',
      'Machine Learning',
      'Statistics',
      'SQL',
      'Microsoft Fabric',
      'Power BI',
    ],
    episodes: [
      'Developing forecasting, segmentation and behavioural models',
      'Applying feature engineering and model validation techniques',
      'Performing exploratory analysis and hypothesis testing',
      'Modernising analytical data workflows with Fabric and PySpark',
    ],
  },
  {
    company: 'Sharva Foundation',
    subtitle: 'Applied AI & Intelligent Search',
    role: 'Data AI & Backend Engineer',
    period: 'January 2025 — March 2025',
    className: 'sharva-series',
    description:
      'Developed applied AI systems using LLMs, Retrieval-Augmented Generation and machine learning workflows over structured and unstructured data.',
    tags: [
      'Python',
      'RAG',
      'LLMs',
      'NLP',
      'Vector Embeddings',
      'FastAPI',
    ],
    episodes: [
      'Building Retrieval-Augmented Generation pipelines',
      'Developing intelligent document search workflows',
      'Improving response quality through prompt experimentation',
      'Deploying and monitoring AI inference services',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    subtitle: 'Predictive Analytics for Healthcare',
    role: 'Associate Data Scientist & Data Engineer',
    period: 'August 2020 — July 2023',
    className: 'tcs-series',
    description:
      'Built statistical, machine learning and analytical solutions across healthcare and pharmaceutical datasets, supported by scalable enterprise data pipelines.',
    tags: [
      'Python',
      'Predictive Modelling',
      'Bayesian Analysis',
      'SQL',
      'Forecasting',
      'Azure',
    ],
    episodes: [
      'Developing regression and predictive modelling workflows',
      'Applying Bayesian inference and forecasting techniques',
      'Performing data preprocessing and feature engineering',
      'Building scalable pipelines for modelling and reporting',
    ],
  },
]

function CareerSeries() {
  return (
    <section id="experience" className="career-section">
      <div className="career-heading">
        <p className="section-eyebrow">Career Series</p>

        <h2>Building Intelligence from Data</h2>

        <p>
          My experience centres on machine learning, statistical analysis and
          applied AI, supported by the engineering skills needed to take
          solutions from raw data to reliable delivery.
        </p>
      </div>

      <div className="career-library">
        {experiences.map((experience) => (
          <article
            className={`career-card ${experience.className} ${
              experience.featured ? 'featured-career-card' : ''
            }`}
            key={experience.company}
          >
            <div className="career-card-pattern" />

            <div className="career-card-overlay">
              <div className="career-card-top">
                <p className="series-label">
                  {experience.featured ? 'Featured Series' : 'Career Series'}
                </p>

                <p className="series-match">98% match</p>
              </div>

              <div className="career-card-content">
                <p className="career-period">{experience.period}</p>

                <h3>{experience.company}</h3>

                <h4>{experience.subtitle}</h4>

                <p className="career-role">{experience.role}</p>

                <p className="career-description">
                  {experience.description}
                </p>

                <div className="career-tags">
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <button className="explore-career-button" type="button">
                  <span aria-hidden="true">▶</span>
                  Explore Experience
                </button>
              </div>

              <div className="career-episodes">
                <p>Episodes</p>

                <ol>
                  {experience.episodes.map((episode) => (
                    <li key={episode}>{episode}</li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CareerSeries