import './Project.css'

function Projects() {
  const projects = [
    {
      title: 'Credit Risk Modelling',
      category: 'Machine Learning',
      description:
        'Built a credit risk workflow covering data preparation, feature engineering, model training and performance evaluation.',
      tech: 'Python · Scikit-learn · Pandas · SQL',
       github: 'https://github.com/Neha-More10/credit-risk-pd-model',
    },
      {
      title: 'Banking Savings Reminder A/B Test',
      category: 'Experimentation & Data Science',
      description:
        'Analysed a controlled experiment to determine whether savings reminders increased customer deposit behaviour, comparing conversion rates and financial outcomes between control and treatment groups.',
      tech: 'Python · Pandas · A/B Testing · Statistics · Data Visualisation',
      github: 'https://github.com/Neha-More10/banking-savings-reminder-ab-test',
   },
    {
      title: 'Microsoft Fabric Migration',
      category: 'Data Engineering',
      description:
        'Modernised legacy data processes using Fabric lakehouses, warehouses, notebooks, pipelines and Power BI reporting.',
      tech: 'Microsoft Fabric · PySpark · SQL · Power BI',
    },
    {
    title: 'Sentiment Analysis with VADER',
    category: 'Natural Language Processing',
    description:
      'Analysed 10,000 labelled social media posts using VADER sentiment analysis, evaluating predictions and investigating difficult and misclassified examples.',
    tech: 'Python · NLTK · VADER · Pandas · Scikit-learn',
    github: 'https://github.com/Neha-More10/vader-sentiment-analysis',
    },
    {
    title: 'Customer Churn Prediction',
    category: 'Machine Learning',
    description:
      'Built machine learning models to identify customers at risk of churn, covering data exploration, preprocessing, feature analysis, model training and performance evaluation.',
    tech: 'Python · Pandas · Scikit-learn · Classification · EDA',
    github:
      'https://github.com/Neha-More10/machine-learning-models/tree/main/notebooks',
  },

  {
    title: 'Diabetic Retinopathy Detection',
    category: 'Deep Learning · Computer Vision',
    description:
      'Developed a deep learning system for detecting diabetic retinopathy from retinal images, applying computer vision and neural networks to a real-world healthcare problem.',
    tech: 'Python · TensorFlow · CNN · Deep Learning · Computer Vision',
    github:
      'https://github.com/Neha-More10/DR_Detection_system',
  },
    {
      title: 'Enterprise ETL Platform',
      category: 'Cloud Data Engineering',
      description:
        'Designed and maintained ETL pipelines integrating data from multiple enterprise systems into trusted analytical datasets.',
      tech: 'Azure Data Factory · SQL · DataStage · Boomi',
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="projects-heading">
        <p className="section-eyebrow">Selected work</p>
        <h2>Featured Projects</h2>
        <p>
          A selection of projects across machine learning, data engineering and
          analytics.
        </p>
      </div>

      <div className="projects-row">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-number">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="project-card-content">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">{project.tech}</p>

                <div className="project-actions">
                  {project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-button"
                    >
                      View on GitHub ↗
                    </a>
                  ) : (
                    <button type="button" className="project-button">
                      View Project
                    </button>
                  )}
                </div></div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects