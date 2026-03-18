import { useEffect, useMemo, useState } from 'react';
import logo from './assets/bizfonal-logo.png';
import htmlIcon from './assets/tech/html5.png';
import cssIcon from './assets/tech/css3.png';
import jsIcon from './assets/tech/javascript.png';
import reactIcon from './assets/tech/react.png';
import nodeIcon from './assets/tech/nodejs.png';
import tailwindIcon from './assets/tech/tailwind.png';
import pythonIcon from './assets/tech/python.png';
import mysqlIcon from './assets/tech/mysql.png';
import canvaIcon from './assets/tech/canva.png';
import figmaIcon from './assets/tech/figma.png';
import productSuite from './assets/showcase/product-suites.avif';
import mobileExperience from './assets/showcase/mobile-experiences.png';
import analyticsHub from './assets/showcase/analytics-hubs.avif';
import heroLaptop from './assets/hero/hero-laptop.png';
import aboutWhoWeAre from './assets/about/who-we-are.png';
import aboutMission from './assets/about/mission.png';
import aboutVision from './assets/about/vision.png';

const baseTechStack = [
  { name: 'HTML5', icon: htmlIcon },
  { name: 'CSS3', icon: cssIcon },
  { name: 'JavaScript', icon: jsIcon },
  { name: 'React JS', icon: reactIcon },
  { name: 'Node JS', icon: nodeIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Python', icon: pythonIcon },
  { name: 'MySQL', icon: mysqlIcon },
  { name: 'Canva', icon: canvaIcon },
  { name: 'Figma', icon: figmaIcon }
];

const services = [
  {
    title: 'Website Development',
    description: 'High-performance, responsive, and conversion-ready websites.'
  },
  {
    title: 'Web Application Development',
    description: 'Custom applications designed for speed, scale, and clarity.'
  },
  {
    title: 'Custom Software Development',
    description: 'Secure software aligned to your unique business workflows.'
  },
  {
    title: 'Mini Projects',
    description: 'Rapid delivery for MVPs, prototypes, and innovation sprints.'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic guidance to optimize infrastructure and operations.'
  }
];

const works = [
  {
    title: 'Retail Analytics Dashboard',
    description:
      'A real-time dashboard that tracks inventory, sales, and customer trends.',
    tech: 'React, Node.js, REST API'
  },
  {
    title: 'Smart HR Portal',
    description:
      'Employee onboarding, attendance, and policy automation in one secure platform.',
    tech: 'Python, Flask, MySQL'
  },
  {
    title: 'Startup Launch Site',
    description:
      'A sleek, conversion-focused site designed for product launch campaigns.',
    tech: 'HTML, CSS, JavaScript'
  }
];

const trustBadges = [
  'Startup Founders',
  'Scale-up Teams',
  'Enterprise Operations',
  'Digital Agencies',
  'Product Leaders'
];

const highlights = [
  {
    title: 'Business-first strategy',
    description:
      'We translate your goals into practical digital roadmaps and measurable outcomes.'
  },
  {
    title: 'Modern UI and UX',
    description:
      'Clean, minimal interfaces that feel premium and keep users engaged.'
  },
  {
    title: 'Secure engineering',
    description:
      'Scalable, maintainable code with security best practices baked in.'
  },
  {
    title: 'Dedicated support',
    description:
      'A proactive team that stays with you post-launch to optimize and grow.'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discover',
    description: 'We align on business goals, users, and product requirements.'
  },
  {
    step: '02',
    title: 'Design',
    description: 'We craft wireframes, UI systems, and rapid prototypes.'
  },
  {
    step: '03',
    title: 'Develop',
    description: 'We build performant, secure software with agile delivery.'
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'We launch, monitor, and scale your solution with confidence.'
  }
];

const industries = [
  'Retail & Ecommerce',
  'Education',
  'Healthcare',
  'Fintech',
  'Logistics',
  'Professional Services'
];

const showcaseItems = [
  {
    title: 'Bizfonal Product Suite',
    description:
      'Unified dashboards, automation flows, and business intelligence in one seamless experience.',
    tags: ['Product Strategy', 'UI/UX', 'Engineering'],
    image: productSuite
  },
  {
    title: 'Mobile-First Experience',
    description:
      'Responsive interfaces that keep your teams productive across every device and screen.',
    tags: ['Responsive Design', 'Performance', 'Accessibility'],
    image: mobileExperience
  },
  {
    title: 'Analytics & Insights',
    description:
      'Actionable data views, real-time KPIs, and custom reports that drive smart decisions.',
    tags: ['Data Visualization', 'Automation', 'Reporting'],
    image: analyticsHub
  }
];

const testimonials = [
  {
    quote:
      'Bizfonal translated our vision into a product that is fast, reliable, and loved by our users.',
    name: 'Anita Sharma',
    role: 'Founder, FinEdge Labs',
    initials: 'AS'
  },
  {
    quote:
      'Their team kept us informed, moved quickly, and delivered a platform that scaled from day one.',
    name: 'Rahul Mehta',
    role: 'COO, LoopCart',
    initials: 'RM'
  },
  {
    quote:
      'The UI is clean, the performance is strong, and the support is proactive. Exactly what we needed.',
    name: 'Priya Nair',
    role: 'Product Lead, HealthTrack',
    initials: 'PN'
  }
];

const faqs = [
  {
    question: 'What services does Bizfonal Infotech provide?',
    answer:
      'We deliver website development, web application development, custom software, mini projects, and IT consulting.'
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope. Websites usually take 2-4 weeks, while web applications take 6-12 weeks.'
  },
  {
    question: 'Do you handle redesigns or upgrades?',
    answer:
      'Yes. We can modernize your UI, improve performance, and migrate to a new tech stack.'
  },
  {
    question: 'Do you provide support after launch?',
    answer:
      'Yes. We offer maintenance, monitoring, and feature enhancements as your product grows.'
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We work with HTML, CSS, JavaScript, React, Node.js, Python, MySQL, and modern UI tools like Figma and Canva.'
  },
  {
    question: 'Can you build custom features for my business?',
    answer:
      'Yes. We build tailored modules and workflows to match your unique business needs.'
  },
  {
    question: 'How do we start a project with Bizfonal?',
    answer:
      'Share your requirements through the contact form. We will schedule a discovery call and send a clear project plan.'
  }
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Technology Stack', href: '#tech' },
  { label: 'Our Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' }
];

const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const techStack = useMemo(() => baseTechStack.concat(baseTechStack), []);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });

      if (!response.ok) {
        throw new Error('Message failed');
      }

      setStatus({ type: 'success', message: 'Thanks! We will contact you soon.' });
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'Sorry, we could not send your message. Please email us directly.'
      });
    }
  };


  return (
    <div className="page">
      <header className="site-header" id="home">
        <div className="container nav-container">
          <a className="brand" href="#home" onClick={handleNavClick}>
            <img
              src={logo}
              alt="Bizfonal Infotech logo"
              className="brand-logo"
            />
            <span className="brand-name">Bizfonal Infotech</span>
          </a>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`} aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <p className="eyebrow">Technology Startup</p>
              <h1 id="hero-title">
                Empowering businesses with modern software and digital solutions.
              </h1>
              <p className="hero-subtitle">
                Bizfonal Infotech partners with ambitious teams to build
                intelligent web experiences, scalable platforms, and
                next-generation digital products.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#contact">
                  Get Started
                </a>
                <a className="btn ghost" href="#contact">
                  Contact Us
                </a>
              </div>
              <div className="hero-metrics">
                <div>
                  <h3>10+</h3>
                  <p>Solutions Delivered</p>
                </div>
                <div>
                  <h3>10x</h3>
                  <p>Growth Enablement</p>
                </div>
                <div>
                  <h3>24/7</h3>
                  <p>Support Mindset</p>
                </div>
              </div>
            </div>
            <div className="hero-visual reveal">
              <img
                src={heroLaptop}
                alt="Person working on a laptop illustration"
                style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              />
            </div>
          </div>
          <div className="hero-glow"></div>
        </section>

        <section className="section showcase" id="showcase" aria-labelledby="showcase-title">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Product Showcase</p>
              <h2 id="showcase-title">Visual experiences that make an impact.</h2>
              <p>
                Explore a snapshot of the interfaces and digital experiences we craft for
                forward-thinking businesses.
              </p>
            </div>
            <div className="showcase-grid">
              {showcaseItems.map((item) => (
                <article className="showcase-card reveal" key={item.title}>
                  <div className="showcase-image">
                    <img src={item.image} alt={`${item.title} preview`} />
                  </div>
                  <div className="showcase-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="showcase-tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section trust" aria-labelledby="trust-title">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Trusted Partnerships</p>
              <h2 id="trust-title">Teams that build with Bizfonal.</h2>
              <p>
                We collaborate with ambitious founders and organizations that
                value speed, clarity, and measurable growth.
              </p>
            </div>
            <div className="trust-grid reveal">
              {trustBadges.map((badge) => (
                <div className="trust-card" key={badge}>
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section alt"
          id="why-bizfonal"
          aria-labelledby="why-title"
        >
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Why Bizfonal</p>
              <h2 id="why-title">A partner focused on outcomes.</h2>
              <p>
                We blend strategy, design, and engineering to deliver software
                that makes a measurable business impact.
              </p>
            </div>
            <div className="feature-grid">
              {highlights.map((item) => (
                <article className="feature-card reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="industry-panel reveal">
              <h3>Industries We Support</h3>
              <div className="industry-tags">
                {industries.map((industry) => (
                  <span key={industry}>{industry}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="process" aria-labelledby="process-title">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Our Process</p>
              <h2 id="process-title">Structured delivery, flexible execution.</h2>
              <p>
                A repeatable, transparent workflow that keeps every engagement
                on track.
              </p>
            </div>
            <div className="process-grid">
              {processSteps.map((step) => (
                <article className="process-step reveal" key={step.step}>
                  <div className="process-index">{step.step}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">About Bizfonal</p>
              <h2 id="about-title">Building future-ready businesses.</h2>
              <p>
                Bizfonal Infotech is a growing technology startup focused on delivering modern web development and software solutions for businesses. We specialize in building scalable web applications, responsive websites, and custom digital products that help organizations improve efficiency and grow their online presence.
              </p> <br />
              <p>
                Our expertise includes frontend development using HTML, CSS, JavaScript, and React, along with backend development using Python and modern databases. We aim to provide reliable, user-friendly, and performance-driven software solutions tailored to client needs.
              </p> <br />
              <p>
                At Bizfonal Infotech, we believe in innovation, continuous learning, and building technology that solves real-world problems. Our mission is to support startups and businesses with high-quality digital solutions that drive growth and long-term success.
              </p> <br />
            </div>
            <div className="about-grid">
              <div className="about-card reveal">
                <img className="about-icon" src={aboutWhoWeAre} alt="Who we are" />
                <h3>Who We Are</h3>
                <p>
                  We are a focused team of engineers, designers, and strategists
                  dedicated to solving complex business challenges with elegant
                  software.
                </p>
              </div>
              <div className="about-card reveal">
                <img className="about-icon" src={aboutMission} alt="Mission" />
                <h3>Mission</h3>
                <p>
                  Empower businesses with reliable digital solutions that amplify
                  growth, efficiency, and customer trust.
                </p>
              </div>
              <div className="about-card reveal">
                <img className="about-icon" src={aboutVision} alt="Vision" />
                <h3>Vision</h3>
                <p>
                  To be the technology partner of choice for organizations
                  seeking smarter, more connected operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section alt"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Services</p>
              <h2 id="services-title">Solutions tailored to your goals.</h2>
              <p>
                From idea to launch, we deliver end-to-end services that keep
                your business ahead.
              </p>
            </div>
            <div className="card-grid services-grid">
              {services.map((service) => (
                <article className="service-card reveal" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="tech" aria-labelledby="tech-title">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Technology Stack</p>
              <h2 id="tech-title">Modern tools for modern solutions.</h2>
              <p>
                We build with reliable, scalable technologies that keep you agile
                and competitive.
              </p>
            </div>
          </div>
          <div className="tech-ticker" aria-hidden="true">
            <div className="tech-track">
              {techStack.map((item, index) => (
                <div className="tech-item" key={`${item.name}-${index}`}>
                  <img src={item.icon} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="works" aria-labelledby="works-title">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Our Works</p>
              <h2 id="works-title">Recent projects and collaborations.</h2>
              <p>
                A curated snapshot of products we have helped design, build, and
                scale.
              </p>
            </div>
            <div className="card-grid">
              {works.map((work) => (
                <article className="work-card reveal" key={work.title}>
                  <div className="work-meta">
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                    <span className="work-tech">{work.tech}</span>
                  </div>
                  <a className="btn text" href="#contact">
                    Preview
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Testimonials</p>
              <h2 id="testimonials-title">Partners who trust Bizfonal.</h2>
              <p>
                Real results delivered for teams that needed clarity, speed, and reliability.
              </p>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card reveal" key={item.name}>
                  <p className="testimonial-quote">"{item.quote}"</p>
                  <div className="testimonial-person">
                    <div className="testimonial-avatar">{item.initials}</div>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-band" aria-labelledby="cta-title">
          <div className="container cta-content reveal">
            <div>
              <p className="eyebrow">Ready to Build</p>
              <h2 id="cta-title">Accelerate your next digital milestone.</h2>
              <p>
                Share your goals and we will craft a delivery plan that keeps
                your team focused, fast, and future-ready.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn primary" href="#contact">
                Schedule a Call
              </a>
              <a className="btn ghost" href="#services">
                View Services
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">Contact</p>
              <h2 id="contact-title">Let us build something great together.</h2>
              <p>
                Tell us about your goals and we will get back within one business
                day.
              </p>
            </div>
            <div className="contact-grid">
              <form className="contact-form reveal" onSubmit={handleSubmit}>
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <span>Phone No</span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formState.phone}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>
                <button className="btn primary" type="submit" disabled={status.type === 'loading'}>
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {status.type !== 'idle' && (
                  <p className={`form-status ${status.type}`}>{status.message}</p>
                )}
              </form>
              <div className="contact-info reveal">
                {/* <h3>Bizfonal Infotech</h3> */}
                <div className='contact-logo'>
                  <img
                    src={logo}
                    alt="Bizfonal Infotech logo"
                    className="brand-logo"
                  />
                  <span className="brand-name">Bizfonal Infotech</span>
                </div>
                <div className='contact-info-detail'>
                  <p>
                    Email : <a href="mailto:bizfonal.infotech@gmail.com">
                      bizfonal.infotech@gmail.com
                    </a>

                  </p>
                  <p>
                    Phone : <a href="tel:6385357693">6385357693</a>
                  </p>
                  <p>
                    Website : <a href="http://www.bizfonal.info" target="_blank" rel="noreferrer">
                      www.bizfonal.info
                    </a>

                  </p>
                  <p>
                    Location : <a href="">Chennai, India</a>
                  </p>
                </div>
                <div className="contact-highlight">
                  <p>
                    We are ready to support your digital transformation with a
                    dedicated team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt faq" id="faq" aria-labelledby="faq-title">
          <div className="container">
            <div className="section-title reveal">
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title">Answers to common questions.</h2>
              <p>Quick responses about our services and delivery approach.</p>
            </div>
            <div className="faq-grid">
              {faqs.map((item) => (
                <details className="faq-item reveal" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={logo} alt="Bizfonal Infotech" />
            <p>
              Bizfonal Infotech delivers future-ready digital solutions
              for modern organizations.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>
              <a href="mailto:bizfonal.infotech@gmail.com">
                bizfonal.infotech@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:6385357693">6385357693</a>
            </p>
            <p>
              <a href="http://www.bizfonal.info" target="_blank" rel="noreferrer">
                www.bizfonal.info
              </a>
            </p>
          </div>
          <div className="footer-social">
            <h4>Social</h4>
            <div className="social-icons">
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.75h3.96V21H3V8.75ZM9.5 8.75h3.8v1.66h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.05V21h-3.96v-5.65c0-1.35-.02-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V21H9.5V8.75Z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.89 7.19c.01.18.01.37.01.56 0 5.7-4.34 12.28-12.28 12.28-2.44 0-4.7-.71-6.6-1.93.34.04.68.05 1.03.05 2.02 0 3.88-.69 5.35-1.86-1.88-.03-3.46-1.28-4.01-2.99.26.05.53.08.8.08.39 0 .78-.05 1.14-.15-1.97-.4-3.45-2.14-3.45-4.23v-.05c.58.32 1.25.51 1.96.53-1.16-.77-1.92-2.08-1.92-3.56 0-.78.21-1.52.58-2.15 2.12 2.6 5.28 4.3 8.84 4.48-.07-.31-.11-.63-.11-.96 0-2.3 1.86-4.16 4.16-4.16 1.2 0 2.29.51 3.05 1.32.95-.19 1.84-.53 2.65-1-.31.98-.98 1.81-1.85 2.33.85-.1 1.66-.33 2.41-.66-.57.85-1.29 1.6-2.12 2.2Z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 9.5H16V6.75c-.43-.06-1.3-.18-2.3-.18-2.28 0-3.84 1.39-3.84 3.95V12H7v3.25h2.86V21h3.35v-5.75h2.76l.44-3.25H13.2v-1.19c0-.94.26-1.31 1.3-1.31Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Bizfonal Infotech. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}








