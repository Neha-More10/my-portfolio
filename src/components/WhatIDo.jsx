function WhatIDo() {
  const services = [
    {
      number: '01',
      title: 'Data Engineering',
      description:
        'I design scalable data platforms, build ETL and ELT pipelines, and transform complex source data into reliable datasets for reporting and analytics.',
      tools: 'Microsoft Fabric · Azure · SQL · PySpark',
    },
    {
      number: '02',
      title: 'Data Science',
      description:
        'I explore data, identify patterns and build predictive models that help organisations make informed and measurable decisions.',
      tools: 'Python · Scikit-learn · Statistics · NLP',
    },
    {
      number: '03',
      title: 'Analytics & Insights',
      description:
        'I turn business requirements into clear dashboards, analytical products and meaningful insights that stakeholders can act on.',
      tools: 'Power BI · SQL · Data Modelling · DAX',
    },
  ]

  return (
    <section id="what-i-do" className="what-i-do-section">
      <div className="section-heading">
        <p className="section-eyebrow">How I create value</p>
        <h2>What I Do</h2>

        <p className="section-introduction">
          I work across the full data lifecycle—from building reliable data
          foundations to creating models and insights that support real
          decisions.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-number">{service.number}</span>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service-tools">{service.tools}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhatIDo