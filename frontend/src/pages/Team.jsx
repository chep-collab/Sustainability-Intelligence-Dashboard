import { Link } from 'react-router-dom';
import '../styles/design-system.css';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Brian Wamubeyi',
      role: 'Lead Actor / Entrepreneur & Champion',
      avatar: '👨‍💼',
      bio: 'A dynamic and visionary sustainability professional with over 15 years of experience leading climate and nature-based initiatives across Sub-Saharan Africa.',
      skills: ['Strategy', 'Innovation', 'Sustainability Leadership', 'Geo-information Science', 'Carbon Markets', 'Environmental Policy'],
      focus: 'Vision, leadership, integration'
    },
    {
      name: 'Irine Toroina',
      role: 'Technical Lead – GIS/Data Systems',
      avatar: '👩‍💻',
      bio: 'Expert in dashboard design & geospatial systems with advanced skills in GIS, coding, and data visualization.',
      skills: ['Advanced GIS', 'Remote Sensing', 'Python', 'JavaScript', 'SQL', 'APIs', 'Data Visualization'],
      focus: 'Dashboard design & geospatial systems'
    },
    {
      name: 'Reagan Awino',
      role: 'Policy, Governance & Partnerships Specialist',
      avatar: '👨‍🏛️',
      bio: 'Expert in governance, alignment, and advocacy with strong skills in policy analysis and stakeholder engagement.',
      skills: ['Environmental Governance', 'Public Policy', 'Stakeholder Engagement', 'Advocacy', 'Negotiation'],
      focus: 'Governance, alignment, advocacy'
    },
    {
      name: 'Edith Ogallo',
      role: 'Community Engagement & Social Inclusion Officer',
      avatar: '👩‍🤝',
      bio: 'Specialist in inclusion, training, and feedback with expertise in participatory approaches and social safeguards.',
      skills: ['Community Mobilization', 'Participatory Methods', 'Social Safeguards', 'Gender Inclusion', 'Training'],
      focus: 'Inclusion, training, feedback'
    },
    {
      name: 'Stephen Owuor',
      role: 'MEL & Impact Analyst',
      avatar: '👨‍📊',
      bio: 'Expert in tracking, reporting, and learning with strong skills in M&E frameworks and data analytics.',
      skills: ['MEL Frameworks', 'Data Analytics', 'Impact Analysis', 'Statistical Analysis', 'Reporting'],
      focus: 'Tracking, reporting, learning'
    },
    {
      name: 'Mercy Chepng\'eno',
      role: 'ICT Systems Engineer',
      avatar: '👩‍🔧',
      bio: 'Specialist in integration and automation with expertise in software engineering, IoT, and cloud systems.',
      skills: ['Software Engineering', 'IoT', 'Cloud Computing', 'System Integration', 'UX/UI Design'],
      focus: 'Integration, automation'
    },
    {
      name: 'Clara Mwanthi',
      role: 'Communications Officer',
      avatar: '📢',
      bio: 'Expert in branding, visibility, and outreach with skills in strategic communication and storytelling.',
      skills: ['Strategic Communication', 'Storytelling', 'Branding', 'Public Relations', 'Web Management'],
      focus: 'Branding, visibility, outreach'
    },
    {
      name: 'John Mureithi',
      role: 'Financial & Admin Manager',
      avatar: '💼',
      bio: 'Expert in financial oversight and compliance with strong skills in accounting and donor reporting.',
      skills: ['Accounting', 'Donor Reporting', 'Financial Management', 'Compliance', 'Budget Monitoring'],
      focus: 'Financial oversight, compliance'
    }
  ];

  const advisoryBoard = [
    {
      name: 'Olive Branch',
      role: 'Advisory Board Member',
      avatar: '👩‍🏫',
      expertise: 'Governance, networks, mentorship'
    },
    {
      name: 'Paul Kariuki',
      role: 'Advisory Board Member',
      avatar: '👨‍🏫',
      expertise: 'Policy and investment linkages'
    },
    {
      name: 'Sijbrand Tieleman',
      role: 'Advisory Board Member',
      avatar: '👨‍🏫',
      expertise: 'Strategic foresight and governance'
    },
    {
      name: 'Meshack Opole',
      role: 'Advisory Board Member',
      avatar: '👨‍🏫',
      expertise: 'Oversight and ethical accountability'
    },
    {
      name: 'Edgar Furtado',
      role: 'Advisory Board Member',
      avatar: '👨‍🏫',
      expertise: 'Networking and advocacy'
    }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="container">
          <div className="hero-content">
            <h1>🌍 Meet the SID Team</h1>
            <p className="hero-subtitle">
              A dynamic, cross-disciplinary team of passionate professionals 
              co-developing Africa's next-generation sustainability intelligence tool
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">8</div>
                <div className="stat-label">Core Team Members</div>
              </div>
              <div className="stat">
                <div className="stat-number">5</div>
                <div className="stat-label">Advisory Board</div>
              </div>
              <div className="stat">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="core-team-section">
        <div className="container">
          <div className="section-header">
            <h2>Core Implementation Team</h2>
            <p>Climate experts and technology innovators united by a common purpose</p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card-premium">
                <div className="member-header">
                  <div className="member-avatar">{member.avatar}</div>
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                  </div>
                </div>
                
                <div className="member-bio">
                  <p>{member.bio}</p>
                </div>
                
                <div className="member-skills">
                  <h4>Core Skills</h4>
                  <div className="skills-grid">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="member-focus">
                  <h4>Focus Area</h4>
                  <p>{member.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="advisory-section">
        <div className="container">
          <div className="section-header">
            <h2>Advisory Board</h2>
            <p>Strategic guidance and high-level oversight</p>
          </div>
          
          <div className="advisory-grid">
            {advisoryBoard.map((member, index) => (
              <div key={index} className="advisory-card">
                <div className="advisory-avatar">{member.avatar}</div>
                <h3 className="advisory-name">{member.name}</h3>
                <p className="advisory-role">{member.role}</p>
                <p className="advisory-expertise">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="team-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Join Our Mission</h2>
            <p>
              We're looking for passionate professionals to help us build the future 
              of sustainability intelligence in Africa.
            </p>
            <div className="cta-buttons">
              <a href="mailto:info@geo-apnet.co.ke" className="cta-button-primary">
                📧 Apply Now
              </a>
              <Link to="/about" className="cta-button-secondary">
                🌍 Learn About SID
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .team-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafb 0%, #e8f5e8 100%);
        }

        .team-hero {
          background: var(--gradient-hero);
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #ffffff, #e8f5e8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 3rem;
          opacity: 0.9;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-top: 3rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--accent-green);
          display: block;
        }

        .stat-label {
          font-size: 1rem;
          opacity: 0.8;
          margin-top: 0.5rem;
        }

        .core-team-section, .advisory-section {
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-green);
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .team-card-premium {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(34, 139, 34, 0.1);
        }

        .team-card-premium:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .member-header {
          display: flex;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .member-avatar {
          font-size: 3rem;
          margin-right: 1rem;
        }

        .member-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--primary-green);
          margin-bottom: 0.25rem;
        }

        .member-role {
          color: var(--secondary-green);
          font-weight: 500;
          margin: 0;
        }

        .member-bio {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        .member-skills h4, .member-focus h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary-green);
          margin-bottom: 0.75rem;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .skill-tag {
          background: var(--light-green);
          color: var(--primary-green);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .member-focus p {
          color: var(--text-muted);
          font-style: italic;
          margin: 0;
        }

        .advisory-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .advisory-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .advisory-card:hover {
          transform: translateY(-3px);
        }

        .advisory-avatar {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .advisory-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary-green);
          margin-bottom: 0.5rem;
        }

        .advisory-role {
          color: var(--secondary-green);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .advisory-expertise {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin: 0;
        }

        .team-cta {
          background: var(--gradient-hero);
          color: white;
          padding: 80px 0;
          text-align: center;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-button-primary, .cta-button-secondary {
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-button-primary {
          background: var(--accent-green);
          color: white;
        }

        .cta-button-primary:hover {
          background: var(--primary-green);
          transform: translateY(-2px);
        }

        .cta-button-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .cta-button-secondary:hover {
          background: white;
          color: var(--primary-green);
        }

        @media (max-width: 768px) {
          .hero-stats {
            flex-direction: column;
            gap: 2rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .advisory-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
