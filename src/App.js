import React from 'react';
import './App.css';
// Make sure to import your PDF if you are using Option 2!
import resumePDF from './Sai_Ganesh_Chilakala_Resume.pdf'; 

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
            <span>📞 +91 6301739686</span>
            <span>🔗 <a href="https://www.linkedin.com/in/chilakala-sai-ganesh-b7a539210/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
            <span>💻 <a href="https://github.com/ganesh63017/" target="_blank" rel="noopener noreferrer">GitHub</a></span>
          </div>
          
          {/* Download PDF Button */}
          {/* Change href={resumePDF} if you imported the file at the top */}
          <a 
            href={resumePDF}
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
              <span className="tag">React.js</span>
              <span className="tag">Next.js</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Redux Toolkit</span>
              <span className="tag">Zustand</span>
              <span className="tag">Tailwind CSS</span>
              <span className="tag">Material UI</span>
              <span className="tag">Micro-frontends</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend & APIs</h3>
            <div className="skill-tags">
              <span className="tag">Node.js</span>
              <span className="tag">Express.js</span>
              <span className="tag">REST APIs</span>
              <span className="tag">GraphQL</span>
              <span className="tag">JWT Auth</span>
              <span className="tag">Redis Caching</span>
              <span className="tag">OpenAI API</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases & DevOps</h3>
            <div className="skill-tags">
              <span className="tag">PostgreSQL</span>
              <span className="tag">MongoDB</span>
              <span className="tag">SQL</span>
              <span className="tag">Mongoose</span>
              <span className="tag">Git</span>
              <span className="tag">Azure DevOps</span>
              <span className="tag">CI/CD</span>
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
            <span className="tag">React.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Zustand</span>
            <span className="tag">Node.js</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Express.js</span>
            <span className="tag">Recharts</span>
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
            <span className="tag">React.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Redux Toolkit</span>
            <span className="tag">OpenAI API</span>
            <span className="tag">Node.js</span>
            <span className="tag">Tailwind CSS</span>
          </div>
        </div>

        <div className="project-card">
          <h3>Parental Control Dashboard</h3>
          <ul>
            <li>Built a responsive administration platform in React.js and TypeScript for configuring device permissions, screen time policies, and web category filters.</li>
            <li>Implemented localization (i18n), accessible WCAG 2.1 UI standards, and real-time activity telemetry updates via RESTful API polling.</li>
          </ul>
          <div className="skill-tags">
            <span className="tag">React.js</span>
            <span className="tag">TypeScript</span>
            <span className="tag">Redux Toolkit</span>
            <span className="tag">REST APIs</span>
            <span className="tag">Tailwind CSS</span>
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