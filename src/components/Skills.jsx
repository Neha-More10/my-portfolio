import './Skills.css'

const skillCategories = [
  {
    title: 'Machine Learning & Data Science',
    subtitle: 'Building models that turn data into useful predictions',
    className: 'machine-learning-skills',
    skills: [
      'Python',
      'Scikit-learn',
      'Regression',
      'Classification',
      'Gradient Boosting',
      'Tree-based Models',
      'Feature Engineering',
      'Cross Validation',
      'Model Evaluation',
      'Forecasting',
      'Customer Segmentation',
      'Behavioural Modelling',
    ],
  },
  {
    title: 'Statistics & Analytics',
    subtitle: 'Finding patterns, testing assumptions and explaining results',
    className: 'analytics-skills',
    skills: [
      'Exploratory Data Analysis',
      'Statistical Analysis',
      'Hypothesis Testing',
      'Bayesian Inference',
      'Data Visualisation',
      'Power BI',
      'Pandas',
      'NumPy',
      'SQL',
      'Data Storytelling',
      'Model Monitoring',
      'Business Insights',
    ],
  },
  {
    title: 'NLP, LLMs & Applied AI',
    subtitle: 'Developing intelligent systems over text and enterprise data',
    className: 'ai-skills',
    skills: [
      'Natural Language Processing',
      'Sentiment Analysis',
      'RAG',
      'LLM APIs',
      'Prompt Engineering',
      'Vector Embeddings',
      'Document Search',
      'Conversational AI',
      'FastAPI',
      'REST APIs',
      'Model Inference',
      'OpenTelemetry',
    ],
  },
  {
    title: 'Data Engineering & Cloud',
    subtitle: 'Creating reliable foundations for analytics and machine learning',
    className: 'engineering-skills',
    skills: [
      'Microsoft Fabric',
      'Azure',
      'PySpark',
      'Azure Data Factory',
      'ETL / ELT',
      'Data Warehousing',
      'Lakehouses',
      'SQL Server',
      'SSIS',
      'DataStage',
      'Dell Boomi',
      'CI/CD',
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-heading">
        <p className="section-eyebrow">Technical Library</p>

        <h2>Data Science at the Core</h2>

        <p>
          My main focus is using machine learning, statistics and analytics to
          solve real problems, supported by strong data engineering and cloud
          experience.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, categoryIndex) => (
          <article
            className={`skills-card ${category.className}`}
            key={category.title}
          >
            <div className="skills-card-number">
              {String(categoryIndex + 1).padStart(2, '0')}
            </div>

            <div className="skills-card-heading">
              <h3>{category.title}</h3>
              <p>{category.subtitle}</p>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  style={{ '--skill-index': skillIndex }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills