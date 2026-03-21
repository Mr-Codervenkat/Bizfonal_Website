import { useEffect, useMemo, useRef, useState } from 'react';
import logo from './assets/bizfonal-logo.png';
// import RadialOrbitalTimeline from './components/RadialOrbitalTimeline';
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
import vercelIcon from './assets/tech/vercel.svg';
import renderIcon from './assets/tech/render.png';
import githubIcon from './assets/tech/github.svg';
import postmanIcon from './assets/tech/postman.png';
import vscodeIcon from './assets/tech/vscode.png';
import mongodbIcon from './assets/tech/mongodb.png';
import emailjsIcon from './assets/tech/emailjs-logo.svg';
import bootstrapIcon from './assets/tech/bootstrap.png';
import apiIcon from './assets/tech/api.svg';
import gitIcon from './assets/tech/git.png';
import netlifyIcon from './assets/tech/netlify.svg';
import fastapiIcon from './assets/tech/fastapi.png';
import flaskIcon from './assets/tech/flask.png';
import npmIcon from './assets/tech/npm.png';
import reduxIcon from './assets/tech/redux.png';
import socketioIcon from './assets/tech/socketio.png';
import pycharmIcon from './assets/tech/Pycharm.png';
import AWSIcon from './assets/tech/AWS.png';
import dockerIcon from './assets/tech/Docker.png';
import productSuite from './assets/showcase/product-suites.avif';
import mobileExperience from './assets/showcase/mobile-experiences.png';
import analyticsHub from './assets/showcase/analytics-hubs.avif';
import heroLaptop from './assets/hero/hero-laptop.png';
import aboutWhoWeAre from './assets/about/who-we-are.png';
import aboutMission from './assets/about/mission.png';
import aboutVision from './assets/about/vision.png';
import shoppingIcon from './assets/industries/shopping.png';
import healthcareIcon from './assets/industries/healthcare.png';
import fintechIcon from './assets/industries/fintech.png';
import distributionIcon from './assets/industries/distribution.png';
import applicationIcon from './assets/industries/application.png';
import techSupportIcon from './assets/industries/tech-support.png';
import discoverGif from './assets/Process/videoplasty-search-291_512.gif';
import designGif from './assets/Process/Designer.gif';
import developGif from './assets/Process/develop process.gif';
import deployGif from './assets/Process/web deployment - Isometric Concept Lottie Animations.gif';
import emailjs from '@emailjs/browser';

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
  { name: 'Figma', icon: figmaIcon },
  { name: 'Vercel', icon: vercelIcon },
  { name: 'Render', icon: renderIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Postman', icon: postmanIcon },
  { name: 'AWS', icon: AWSIcon },
  { name: 'Docker', icon: dockerIcon },
];
const baseTechStacks = [
  { name: 'VS Code', icon: vscodeIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'EmailJS', icon: emailjsIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'API', icon: apiIcon },
  { name: 'Git', icon: gitIcon },
  { name: 'Netlify', icon: netlifyIcon },
  { name: 'FastAPI', icon: fastapiIcon },
  { name: 'Flask', icon: flaskIcon },
  { name: 'npm', icon: npmIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'Socket.io', icon: socketioIcon },
  { name: 'Pycharm', icon: pycharmIcon }
];

const services = [
  {
    title: 'Website Development',
    description: '→ High-performance, responsive, and conversion-ready websites built with modern technologies ensuring scalability and seamless user experience.'
  },
  {
    title: 'Web Application Development',
    description: '→ Custom applications designed for speed, scale, and clarity with robust architecture and optimized performance for business growth.'
  },
  {
    title: 'Custom Software Development',
    description: '→ Secure software aligned to your unique business workflows with advanced security standards and reliable system integration capabilities.'
  },
  {
    title: 'Mini Projects',
    description: '→ Rapid delivery for MVPs, prototypes, and innovation sprints with agile development approach ensuring faster deployment and iteration cycles.'
  },
  {
    title: 'SaaS Development',
    description: '→ Scalable SaaS platforms built for modern businesses with cloud-native architecture ensuring flexibility, reliability, and long-term growth support.'
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
    description: 'We align on business goals, users, and product requirements.',
    gif: discoverGif
  },
  {
    step: '02',
    title: 'Design',
    description: 'We craft wireframes, UI systems, and rapid prototypes.',
    gif: designGif
  },
  {
    step: '03',
    title: 'Develop',
    description: 'We build performant, secure software with agile delivery.',
    gif: developGif
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'We launch, monitor, and scale your solution with confidence.',
    gif: deployGif
  }
];

const industries = [
  { name: 'Retail & Ecommerce', icon: shoppingIcon },
  { name: 'Education', icon: applicationIcon },
  { name: 'Healthcare', icon: healthcareIcon },
  { name: 'Fintech', icon: fintechIcon },
  { name: 'Logistics', icon: distributionIcon },
  { name: 'Professional Services', icon: techSupportIcon }
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
    name: 'Karthik',
    role: 'Founder, FinEdge Labs',
    initials: 'S'
  },
  {
    quote:
      'Their team kept us informed, moved quickly, and delivered a platform that scaled from day one.',
    name: 'Rahul',
    role: 'COO, LoopCart',
    initials: 'M'
  },
  {
    quote:
      'The UI is clean, the performance is strong, and the support is proactive. Exactly what we needed.',
    name: 'Mohana Priya',
    role: 'Product Lead, HealthTrack',
    initials: 'N'
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
  // { label: 'Our Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' }
];

const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const techStack = useMemo(() => baseTechStack.concat(baseTechStack), []);
  const techStacks = useMemo(() => baseTechStacks.concat(baseTechStacks), []);
  const [activeShowcaseCard, setActiveShowcaseCard] = useState(0);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const fullText = services[currentServiceIndex].title;
    let charIndex = 0;

    const typeTimer = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeTimer);
        setTimeout(() => {
          setDisplayedText('');
          setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typeTimer);
  }, [currentServiceIndex]);

  // Enhanced scroll-triggered animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add stagger effect to multiple reveals
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, index * 50);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Stagger animation for cards
  useEffect(() => {
    const staggerItems = document.querySelectorAll('.stagger-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    staggerItems.forEach((el, index) => {
      el.style.setProperty('--stagger-delay', `${index * 100}ms`);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus({ type: 'loading', message: 'Sending your message...' });

    emailjs.send(
      'service_4kyb5it',
      'template_6368cvf',
      {
        name: formState.name,
        phone: formState.phone,
        email: formState.email,
        message: formState.message
      },
      'iMzOaDq9sDzGnFyHL'
    )
      .then(() => {
        setStatus({ type: 'success', message: 'Thanks! We will contact you soon.' });
        setFormState({ name: '', phone: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus({
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
      });
  };

  return (
    <div className="page">
      {/* Animated grid background */}
      <div className="grid-bg" aria-hidden="true"></div>

      {/* Aurora Background Effect */}
      <div className="aurora-bg">
        <div className="aurora-orb-1"></div>
        <div className="aurora-orb-2"></div>
        <div className="aurora-orb-3"></div>
      </div>

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
          {/* Floating particles */}
          <div className="hero-particles" aria-hidden="true">
            {[...Array(8)].map((_, i) => <span key={i} className="hero-particle" />)}
          </div>
          {/* Second pulse ring for layered depth */}
          <div className="hero-ring-2" aria-hidden="true"></div>
          <div className="container hero-grid">
            <div className="hero-content reveal fade-left">

              <h1 id="hero-title">
                Empowering businesses with modern software and digital solutions.
              </h1>
              <div className="typewriter-container">
                <p className="typewriter-text">{displayedText}<span className="cursor"></span></p>
              </div>
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
            <div className="hero-visual reveal fade-right">
              <div className="hero-coder-wrap">
                {/* Floating code badges */}
                <span className="hero-badge badge-html">HTML</span>
                <span className="hero-badge badge-react">&lt;/&gt;</span>
                <span className="hero-badge badge-js">JS</span>
                <span className="hero-badge badge-css">CSS</span>
                <img
                  src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
                  alt="Developer coding animation"
                  className="hero-coder-gif"
                />
              </div>
            </div>
          </div>
          <div className="hero-glow"></div>
        </section>

        <section className="section showcase" id="showcase" aria-labelledby="showcase-title">
          <div className="container">
            <div className="section-title reveal fade-left">
              <p className="eyebrow">Product Showcase</p>
              <h2 id="showcase-title">Visual experiences that make an impact.</h2>
              <p>
                Explore a snapshot of the interfaces and digital experiences we craft for
                forward-thinking businesses.
              </p>
            </div>

            {/* Desktop grid — hidden on mobile */}
            <div className="showcase-grid showcase-grid--desktop">
              {showcaseItems.map((item) => (
                <article className="showcase-card reveal stagger-card hover-lift" key={item.title}>
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

            {/* Mobile vertical snap-scroll — hidden on desktop */}
            <div className="showcase-vsnap" ref={showcaseRef}>
              {/* Side progress dots */}
              <div className="showcase-vdots">
                {showcaseItems.map((_, i) => (
                  <span
                    key={i}
                    className={`showcase-vdot ${activeShowcaseCard === i ? 'active' : ''}`}
                  />
                ))}
              </div>

              <div
                className="showcase-vtrack"
                onScroll={(e) => {
                  const el = e.currentTarget;
                  const index = Math.round(el.scrollTop / el.clientHeight);
                  setActiveShowcaseCard(index);
                }}
              >
                {showcaseItems.map((item, index) => (
                  <div className="showcase-vslide" key={item.title}>
                    <article className="showcase-card showcase-card-v">
                      <div className="showcase-image">
                        <img src={item.image} alt={`${item.title} preview`} />
                      </div>
                      <div className="showcase-body">
                        <span className="showcase-card-count">{String(index + 1).padStart(2, '0')} / {String(showcaseItems.length).padStart(2, '0')}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="showcase-tags">
                          {item.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <section
          className="section alt"
          id="why-bizfonal"
          aria-labelledby="why-title"
        >
          <div className="container">
            <div className="section-title reveal fade-right">
              <p className="eyebrow">Why Bizfonal</p>
              <h2 id="why-title">A partner focused on outcomes.</h2>
              <p>
                We blend strategy, design, and engineering to deliver software
                that makes a measurable business impact.
              </p>
            </div>
            <div className="feature-grid ">
              {highlights.map((item, index) => (
                <article className="feature-card reveal stagger-card hover-lift" key={item.title} style={{ animationDelay: `${index * 100}ms` }}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <div className="industry-panel reveal">
              <h3>Industries We Support</h3>
              <div className="industry-container">
                {industries.map((industry, index) => (
                  <div key={industry.name} className="industry-item stagger-card" style={{ animationDelay: `${index * 80}ms` }}>
                    <img src={industry.icon} alt={industry.name} className="industry-icon" />
                    <span>{industry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="process" aria-labelledby="process-title">
          <div className="container">
            <div className="section-title reveal fade-left">
              <p className="eyebrow">Our Process</p>
              <h2 id="process-title">Structured delivery, flexible execution.</h2>
              <p>
                A repeatable, transparent workflow that keeps every engagement
                on track.
              </p>
            </div>


            {/* Process Grid - Always Visible */}
            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-step reveal stagger-card" key={step.step} style={{ animationDelay: `${index * 120}ms` }}>
                  <div className="process-gif">
                    <img src={step.gif} alt={step.title} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section showcase" id="about" aria-labelledby="about-title">
          <div className="container" style={{ marginTop: '-80px' }}>
            <div className="section-title reveal fade-right">
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
            <div className="section-title reveal fade-left">
              <p className="eyebrow">Services</p>
              <h2 id="services-title">Solutions tailored to your goals.</h2>
              <p>
                From idea to launch, we deliver end-to-end services that keep
                your business ahead.
              </p>
            </div>
            <div className="card-grid services-grid">
              {services.map((service, index) => (
                <article className="service-card reveal stagger-card hover-lift" key={service.title} style={{ animationDelay: `${index * 100}ms` }}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="tech" aria-labelledby="tech-title">
          <div className="container">
            <div className="section-title reveal fade-right">
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
          <div className="tech-ticker" aria-hidden="true">
            <div className="tech-track">
              {techStacks.map((item, index) => (
                <div className="tech-item" key={`${item.name}-${index}`}>
                  <img src={item.icon} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="section alt" id="works" aria-labelledby="works-title">
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
        </section> */}

        <section className="section testimonials" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="section-title reveal fade-left">
              <p className="eyebrow">Testimonials</p>
              <h2 id="testimonials-title">Partners who trust Bizfonal.</h2>
              <p>
                Real results delivered for teams that needed clarity, speed, and reliability.
              </p>
            </div>
            <div className="testimonial-carousel">
              <div className="carousel-container">
                <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
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
              <div className="carousel-controls">
                <button className="carousel-btn" onClick={handlePrevSlide} aria-label="Previous testimonial">
                  ←
                </button>
                <div className="carousel-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button className="carousel-btn" onClick={handleNextSlide} aria-label="Next testimonial">
                  →
                </button>
              </div>
            </div>
            {/* Desktop Grid View */}
            <div className="testimonial-grid">
              {testimonials.map((item, index) => (
                <article className="testimonial-card reveal stagger-card hover-lift" key={item.name} style={{ animationDelay: `${index * 100}ms` }}>
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
            <div className="section-title reveal fade-right">
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
                    placeholder="Your Email Address"
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
            <div className="section-title reveal fade-left">
              <p className="eyebrow">FAQ</p>
              <h2 id="faq-title">Answers to common questions.</h2>
              <p>Quick responses about our services and delivery approach.</p>
            </div>
            <div className="faq-grid">
              {faqs.map((item, index) => (
                <details className="faq-item reveal stagger-card" key={item.question} name="faq-accordion" style={{ animationDelay: `${index * 80}ms` }}>
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
            {navLinks.slice(0, 5).map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <a href="mailto:bizfonal.infotech@gmail.com">
              bizfonal.infotech@gmail.com
            </a>
            <a href="tel:6385357693">6385357693</a>
            <a href="http://www.bizfonal.info" target="_blank" rel="noreferrer">
              www.bizfonal.info
            </a>
          </div>
          <div className="footer-social">
            <h4>Social</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/bizfonal-infotech" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.75h3.96V21H3V8.75ZM9.5 8.75h3.8v1.66h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.05V21h-3.96v-5.65c0-1.35-.02-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99V21H9.5V8.75Z" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.94 4H21.12L13.92 10.62L22.5 20H15.63L10.81 14.96L5.17 20H2L9.58 12.99L1.5 4H8.63L12.86 8.88L18.2 4H17.94ZM16.6 18.25H18.36L7.56 5.74H5.65L16.6 18.25Z" fill="white" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.5 9.5H16V6.75c-.43-.06-1.3-.18-2.3-.18-2.28 0-3.84 1.39-3.84 3.95V12H7v3.25h2.86V21h3.35v-5.75h2.76l.44-3.25H13.2v-1.19c0-.94.26-1.31 1.3-1.31Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/bizfonal.infotech/" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="4.5" fill="none" stroke="white" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3.5" fill="none" stroke="white" strokeWidth="1.5" />
                  <circle cx="18" cy="6" r="0.8" fill="white" />
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