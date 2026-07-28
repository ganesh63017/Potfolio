import React from 'react';
import './App.css';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        
        {/* Header / Hero Section */}
        <header>
          <h1>Sai Ganesh Chilakala</h1>
          <div className="title">Senior Full Stack Developer (MERN)</div>
          <div className="contacts">
            <span>📍 Hyderabad, India</span>
            <span>📧 <a href="mailto:ganeshchilakala11@gmail.com">ganeshchilakala11@gmail.com</a></span>
            <span>📞 +91 6301739686, +91 9948128644</span>
            <span>🔗 <a href="https://www.linkedin.com/in/chilakala-sai-ganesh-b7a539210/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
            <span>💻 <a href="https://github.com/ganesh63017/" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          </div>
          
          {/* Download PDF Button */}
          <a 
            href="/Sai_Ganesh_Chilakala_Resume.pdf" 
            className="btn-download" 
            download="Sai_Ganesh_Chilakala_Resume.pdf"
          >
            📄 Download Resume (PDF)
          </a>
        </header>

        {/* About Section */}
        <h2 className="section-title">About Me</h2>
        <div className="card">
          <p>
            Senior Full Stack MERN Developer with over 4.8 years of hands-on experience architecting, building, and scaling high-performance enterprise applications. Specializing in frontend architecture (React.js, Next.js, TypeScript), state management (Zustand, Redux Toolkit), and full-stack backend development (Node.js, Express.js, PostgreSQL, MongoDB). Proven expertise in integrating OpenAI APIs, optimizing Core Web Vitals and load times by up to 30%, and delivering robust micro-frontend architectures in Agile settings.
          </p>
        </div>

        {/* Key Impact Metrics */}
        <h2 className="section-title">Key Impact</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-num">30%</div>
            <div className="stat-desc">Page Load Time Reduction</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">35%</div>
            <div className="stat-desc">Lower API Latency (Redis/PostgreSQL)</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">10K+</div>
            <div className="stat-desc">Live Records Handled at 60fps</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">80%+</div>
            <div className="stat-desc">Automated Test Coverage (Jest/RTL)</div>
          </div>
        </div>

        {/* Technical Skills */}
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend Architecture</h3>
            <div className="skill-tags">
              <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="tag">React.js</a>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="tag">Next.js</a>
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="tag">TypeScript</a>
              <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer" className="tag">Redux Toolkit</a>
              <a href="https://github.com/pmndrs/zustand" target="_blank" rel="noopener noreferrer" className="tag">Zustand</a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="tag">Tailwind CSS</a>
              <a href="https://mui.com/" target="_blank" rel="noopener noreferrer" className="tag">Material UI</a>
              <a href="https://micro-frontends.org/" target="_blank" rel="noopener noreferrer" className="tag">Micro-frontends</a>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend & APIs</h3>
            <div className="skill-tags">
              <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="tag">Node.js</a>
              <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="tag">Express.js</a>
              <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer" className="tag">REST APIs</a>
              <a href="https://graphql.org/" target="_blank" rel="noopener noreferrer" className="tag">GraphQL</a>
              <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer" className="tag">JWT Auth</a>
              <a href="https://redis.io/" target="_blank" rel="noopener noreferrer" className="tag">Redis Caching</a>
              <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer" className="tag">OpenAI API</a>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases & DevOps</h3>
            <div className="skill-tags">
              <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="tag">PostgreSQL</a>
              <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="tag">MongoDB</a>
              <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer" className="tag">SQL</a>
              <a href="https://mongoosejs.com/" target="_blank" rel="noopener noreferrer" className="tag">Mongoose</a>
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="tag">Git</a>
              <a href="https://azure.microsoft.com/en-us/products/devops/" target="_blank" rel="noopener noreferrer" className="tag">Azure DevOps</a>
              <a href="https://www.redhat.com/en/topics/devops/what-is-ci-cd" target="_blank" rel="noopener noreferrer" className="tag">CI/CD</a>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-card">
          <h3>Universal Music Group — Royalty Management Platform</h3>
          <ul>
            <li>Engineered high-throughput enterprise dashboards for royalty distribution calculations, statement analytics, and multi-currency reporting.</li>
            <li>Built interactive data visualizations and financial charts using Recharts and Chart.js backed by optimized PostgreSQL queries.</li>
            <li>Architected global application state using Zustand, eliminating unnecessary re-renders across multi-step wizard forms.</li>
          </ul>
          <div className="skill-tags">
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="tag">React.js</a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="tag">TypeScript</a>
            <a href="https://github.com/pmndrs/zustand" target="_blank" rel="noopener noreferrer" className="tag">Zustand</a>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="tag">Node.js</a>
            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="tag">PostgreSQL</a>
            <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="tag">Express.js</a>
            <a href="https://recharts.org/" target="_blank" rel="noopener noreferrer" className="tag">Recharts</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Career.io / Resume.io — AI-Powered Resume Builder</h3>
          <ul>
            <li>Architected dynamic, real-time resume editor features with custom layout customization, drag-and-drop reordering, and instant PDF rendering.</li>
            <li>Integrated OpenAI APIs (GPT-4) to power intelligent resume content auto-generation, bullet point polish, and ATS keyword optimization suggestions.</li>
            <li>Streamlined client state management using Redux Toolkit to maintain seamless editor responsiveness across multi-section forms.</li>
          </ul>
          <div className="skill-tags">
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="tag">React.js</a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="tag">TypeScript</a>
            <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer" className="tag">Redux Toolkit</a>
            <a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer" className="tag">OpenAI API</a>
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="tag">Node.js</a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="tag">Tailwind CSS</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Parental Control Dashboard</h3>
          <ul>
            <li>Built a responsive administration platform in React.js and TypeScript for configuring device permissions, screen time policies, and web category filters.</li>
            <li>Implemented localization (i18n), accessible WCAG 2.1 UI standards, and real-time activity telemetry updates via RESTful API polling.</li>
          </ul>
          <div className="skill-tags">
            <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="tag">React.js</a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="tag">TypeScript</a>
            <a href="https://redux-toolkit.js.org/" target="_blank" rel="noopener noreferrer" className="tag">Redux Toolkit</a>
            <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer" className="tag">REST APIs</a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="tag">Tailwind CSS</a>
          </div>
        </div>

        {/* Experience */}
        <h2 className="section-title">Professional Experience</h2>
        <div className="card">
          <h3>Senior Software Developer — Angular Minds</h3>
          <p style={{ color: 'var(--primary)', fontWeight: 500, marginBottom: '10px' }}>
            Dec 2021 – Present | Pune / Remote
          </p>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)' }}>
            <li>Designed and developed 50+ reusable, accessible React components with TypeScript and Material UI, standardizing UI architecture and accelerating feature rollout by 25%.</li>
            <li>Engineered complex enterprise analytics dashboards handling 10K+ live records using React, TypeScript, Zustand, and virtualized tables to maintain smooth 60fps frame rates.</li>
            <li>Architected full-stack backend services in Node.js/Express, integrating Redis caching layers and PostgreSQL query indexing to lower API latency by 35%.</li>
            <li>Optimized frontend client rendering, payload sizes, and bundle splitting, achieving a ~30% improvement in page load speeds and overall Core Web Vitals.</li>
          </ul>
        </div>

        {/* Education */}
        <h2 className="section-title">Education</h2>
        <div className="card">
          <h3>Bachelor of Technology (B.Tech) — Electrical & Electronics Engineering</h3>
          <p style={{ color: 'var(--text-muted)' }}>
            QIS College of Engineering & Technology, JNTU Kakinada | Graduated: 2021
          </p>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;