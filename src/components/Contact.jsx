import './Contact.css'

const contactLinks = [
  {
    label: 'Email',
    value: 'Let’s start a conversation',
    href: 'mailto:nwhamore@gmail.com',
    icon: '✉',
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://linkedin.com/in/neha-mmore',
    icon: 'in',
  },
  {
    label: 'GitHub',
    value: 'Explore my code',
    href: 'https://github.com/Neha-More10/',
    icon: '</>',
  },
]

function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-profile">
        <p className="section-eyebrow">Who’s Recruiting?</p>

        <div className="contact-layout">
          <div className="contact-avatar" aria-hidden="true">
            NM
          </div>

          <div className="contact-introduction">
            <p className="contact-status">
              <span />
              Open to data opportunities
            </p>

            <h2>Let’s build something useful from data.</h2>

            <p className="contact-summary">
              I’m interested in Data Scientist and applied machine learning
              roles, with the engineering experience to build reliable
              end-to-end data solutions.
            </p>

            <div className="contact-preferences">
              <span>Machine Learning</span>
              <span>Data Science</span>
              <span>Applied AI</span>
              <span>Data Engineering</span>
            </div>
          </div>
        </div>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              href={link.href}
              className="contact-link-card"
              key={link.label}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="contact-link-icon" aria-hidden="true">
                {link.icon}
              </span>

              <span>
                <strong>{link.label}</strong>
                <small>{link.value}</small>
              </span>

              <span className="contact-arrow" aria-hidden="true">
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="netflix-footer">
        <div className="footer-socials">
          <a
            href="https://linkedin.com/in/neha-mmore"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Neha-More10/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:nwhamore@gmail.com">Email</a>

          <a
            href="/CV_Neha_More_DS.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="footer-details">
          <p>Built with React, curiosity and a lot of data.</p>
          <p>© 2026 Neha More</p>
        </div>
      </div>
    </footer>
  )
}

export default Contact