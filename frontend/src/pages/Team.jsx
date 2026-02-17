import { Link } from 'react-router-dom';
import '../styles/design-system.css';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Brian Wamubeyi',
      role: 'Lead Actor / Entrepreneur & Champion',
      avatar: '👨‍💼',
      bio: 'A dynamic and visionary sustainability professional with over 15 years of experience leading climate and nature-based initiatives across Sub-Saharan Africa. Demonstrated expertise in project design, strategic management, and digital integration for sustainability monitoring and reporting.',
      skills: ['Strategy', 'Innovation', 'Sustainability Leadership', 'Geo-information Science', 'Carbon Markets', 'Environmental Policy'],
      focus: 'Vision, leadership, integration'
    },
    {
      name: 'Irine Toroina',
      role: 'Technical Lead – GIS/Data Systems',
      avatar: '👩‍💻',
      bio: 'Expert in designing, developing, and maintaining dashboard digital architecture, data pipelines, visualization systems, and geospatial layers. Ensures system scalability, data integrity, and user-friendliness.',
      skills: ['Advanced GIS', 'Remote Sensing', 'Python', 'JavaScript', 'SQL', 'APIs', 'Data Visualization', 'IoT Integration'],
      focus: 'Dashboard design & geospatial systems'
    },
    {
      name: 'Reagan Awino',
      role: 'Environmental Economist / Conservation Finance Expert',
      avatar: '👨‍💰',
      bio: 'Leads financial modelling, valuation of ecosystem services, and structuring of conservation finance mechanisms linked to dashboard outcomes.',
      skills: ['Natural Capital Accounting', 'Ecosystem Valuation', 'Blended Finance', 'Carbon Markets', 'Impact Investment', 'Business Modelling'],
      focus: 'Financial modeling, valuation'
    },
    {
      name: 'Paul Kariuki',
      role: 'Policy, Governance & Partnerships Specialist',
      avatar: '👨‍🏛️',
      bio: 'Ensures SID concept aligns with national, regional, and global policy frameworks. Leads stakeholder engagement and institutional partnerships.',
      skills: ['Environmental Governance', 'Public Policy', 'Stakeholder Engagement', 'Advocacy', 'Negotiation', 'Policy Analysis'],
      focus: 'Governance, alignment, advocacy'
    },
    {
      name: 'Edith Ogallo',
      role: 'Community Engagement & Social Inclusion Officer',
      avatar: '👩‍🤝',
      bio: 'Bridges the gap between local communities, facility users, and the digital system. Ensures social inclusion, gender equity, and participation in sustainability monitoring.',
      skills: ['Community Mobilization', 'Participatory Methods', 'Social Safeguards', 'Gender Inclusion', 'Training', 'Cultural Sensitivity'],
      focus: 'Inclusion, training, feedback'
    },
    {
      name: 'Stephen Owuor',
      role: 'MEL & Impact Analyst',
      avatar: '👨‍📊',
      bio: 'Designs and applies the project\'s theory of change, defines KPIs, ensures measurable impacts, and supports adaptive management through evidence-based insights.',
      skills: ['MEL Framework Design', 'Impact Analysis', 'Statistical Analysis', 'Sustainability Performance', 'Reporting', 'Adaptive Management'],
      focus: 'Tracking, reporting, learning'
    },
    {
      name: 'Mercy Chepng\'eno',
      role: 'ICT Systems Engineer',
      avatar: '👩‍🔧',
      bio: 'Supports technical integration between hardware and software components of the dashboard for real-time reporting.',
      skills: ['Software Engineering', 'Backend Development', 'API Integration', 'Cloud Computing', 'UX/UI Design', 'Mobile App Development'],
      focus: 'Integration, automation'
    },
    {
      name: 'Clara Mwanthi',
      role: 'Communications Officer',
      avatar: '👩‍📢',
      bio: 'Develops the dashboard\'s visual identity, branding, and communication strategy. Manages dissemination of knowledge, lessons, and public awareness campaigns.',
      skills: ['Strategic Communication', 'Branding', 'Digital Storytelling', 'Public Relations', 'Web Management', 'Knowledge Products'],
      focus: 'Branding, visibility, outreach'
    },
    {
      name: 'John Mureithi',
      role: 'Financial & Admin Manager',
      avatar: '👨‍💼',
      bio: 'Manages project budgeting, procurement, and reporting. Ensures compliance with donor regulations and sustainability of financial operations.',
      skills: ['Financial Planning', 'Accounting', 'Budget Monitoring', 'Procurement', 'Donor Reporting', 'Grant Management'],
      focus: 'Financial oversight, compliance'
    }
  ];

  const advisoryBoard = [
    {
      name: 'Olive Branch',
      role: 'Advisory Board Member',
      avatar: '👩‍🏫',
      expertise: 'Senior government experience, strategic foresight, governance'
    },
    {
      name: 'Sijbrand Tieleman',
      role: 'Advisory Board Member',
      avatar: '👨‍🏫',
      expertise: 'Policy and investment linkages, networking, advocacy'
    },
    {
      name: 'Meshack Opole',
      role: 'Advisory Board Member',
      avatar: '👨‍🏫',
      expertise: 'Research institutions, academia, technical oversight'
    },
    {
      name: 'Edgar Furtado',
      role: 'Advisory Board Member',
      avatar: '👨‍🏫',
      expertise: 'Private sector sustainability, investment, climate finance'
    },
    {
      name: 'Jan-Kees',
      role: 'Advisory Board Member',
      avatar: '👨‍🏫',
      expertise: 'Development partners, donors, international cooperation'
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
                <div className="stat-number">9</div>
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
                  <div className="member-role-badge">
                    {member.role.includes('Lead') && '🌟 Lead'}
                    {member.role.includes('Specialist') && '🎯 Expert'}
                    {member.role.includes('Officer') && '👥 Manager'}
                    {member.role.includes('Engineer') && '🔧 Technical'}
                    {member.role.includes('Economist') && '💰 Finance'}
                  </div>
                </div>
                
                <div className="member-content">
                  <h3>{member.name}</h3>
                  <div className="member-role">{member.role}</div>
                  <p className="member-bio">{member.bio}</p>
                  
                  <div className="member-focus">
                    <h4>Core Focus:</h4>
                    <p>{member.focus}</p>
                  </div>
                  
                  <div className="member-skills">
                    <h4>Key Skills:</h4>
                    <div className="skills-grid">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
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
            <p>Strategic guidance, technical oversight, and high-level linkages to policy, funding, and research networks</p>
          </div>
          
          <div className="advisory-grid">
            {advisoryBoard.map((member, index) => (
              <div key={index} className="advisory-card">
                <div className="advisory-avatar">{member.avatar}</div>
                <h3>{member.name}</h3>
                <div className="advisory-role">{member.role}</div>
                <p className="advisory-expertise">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="join-team-section">
        <div className="container">
          <div className="join-content">
            <h2>🚀 Join the Team Shaping the Future of Sustainability Intelligence!</h2>
            <p>
              We're seeking passionate professionals to co-develop Africa's next-generation 
              sustainability intelligence tool. If you're ready to make an impact, we'd love to hear from you!
            </p>
            <div className="join-actions">
              <a href="mailto:info@geo-apnet.co.ke?subject=SID%20Team%20Application" className="btn-premium btn-premium-primary btn-premium-large">
                📧 Apply Now
              </a>
              <Link to="/about" className="btn-premium btn-premium-secondary btn-premium-large">
                🌍 Learn About SID
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .team-page {
          min-height: 100vh;
          background: var(--gray-50);
        }

        /* Hero Section */
        .team-hero {
          background: var(--gradient-hero);
          color: var(--white);
          padding: var(--space-24) 0;
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: var(--space-6);
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: var(--space-8);
          opacity: 0.9;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: var(--space-12);
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: var(--space-2);
        }

        .stat-label {
          font-size: 0.875rem;
          opacity: 0.8;
        }

        /* Core Team Section */
        .core-team-section {
          padding: var(--space-24) 0;
          background: var(--white);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-16);
        }

        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--gray-900);
          margin-bottom: var(--space-4);
        }

        .section-header p {
          font-size: 1.125rem;
          color: var(--gray-600);
          max-width: 600px;
          margin: 0 auto;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: var(--space-8);
        }

        .team-card-premium {
          background: var(--white);
          padding: var(--space-8);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--gray-200);
          transition: all var(--transition-base);
        }

        .team-card-premium:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-xl);
        }

        .member-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-6);
        }

        .member-avatar {
          font-size: 4rem;
          margin-bottom: var(--space-4);
        }

        .member-role-badge {
          background: var(--gradient-primary);
          color: var(--white);
          padding: var(--space-2) var(--space-4);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .team-card-premium h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .member-role {
          color: var(--primary-green);
          font-weight: 600;
          margin-bottom: var(--space-4);
          font-size: 1rem;
        }

        .member-bio {
          color: var(--gray-600);
          line-height: 1.6;
          margin-bottom: var(--space-6);
        }

        .member-focus h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--gray-700);
          margin-bottom: var(--space-2);
        }

        .member-focus p {
          color: var(--primary-green);
          font-weight: 500;
          margin-bottom: var(--space-4);
        }

        .member-skills h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--gray-700);
          margin-bottom: var(--space-3);
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .skill-tag {
          background: var(--gray-100);
          color: var(--gray-700);
          padding: var(--space-1) var(--space-3);
          border-radius: var(--radius-md);
          font-size: 0.75rem;
          font-weight: 500;
        }

        /* Advisory Board Section */
        .advisory-section {
          padding: var(--space-24) 0;
          background: var(--gray-50);
        }

        .advisory-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-6);
        }

        .advisory-card {
          background: var(--white);
          padding: var(--space-6);
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-md);
          text-align: center;
          transition: all var(--transition-base);
        }

        .advisory-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }

        .advisory-avatar {
          font-size: 3rem;
          margin-bottom: var(--space-4);
        }

        .advisory-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--gray-900);
          margin-bottom: var(--space-2);
        }

        .advisory-role {
          color: var(--primary-green);
          font-weight: 600;
          margin-bottom: var(--space-3);
          font-size: 0.875rem;
        }

        .advisory-expertise {
          color: var(--gray-600);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        /* Join Team Section */
        .join-team-section {
          padding: var(--space-24) 0;
          background: var(--gradient-primary);
          color: var(--white);
          text-align: center;
        }

        .join-content h2 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: var(--space-6);
        }

        .join-content p {
          font-size: 1.125rem;
          line-height: 1.6;
          margin-bottom: var(--space-8);
          opacity: 0.9;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .join-actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .hero-stats {
            gap: var(--space-6);
          }

          .team-grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }

          .advisory-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }

          .join-actions {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
