import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaTimes } from 'react-icons/fa';
import ceoImage from '../assets/portfolio/ceo new.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Babah Saccoh',
      role: 'CEO & Founder',
      image: ceoImage,
      description: 'Data Architect and System Design Specialist with 13+ years of experience in the Telecom and ICT sectors. Expertise includes software engineering, network infrastructure, data engineering and analysis, as well as telecom billing and VAS systems.',
      social: {
        linkedin: 'https://www.linkedin.com/in/babah-saccoh-56a43b229/',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      description: 'Experienced CTO with a background in scalable architecture and cloud solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      description: 'Passionate lead developer focused on clean code and performance optimization.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'Creative UI/UX designer crafting intuitive and beautiful user experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];



  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'unset';
  };

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet Our <span className="text-gradient">Team</span></h2>
          <p className="section-subtitle">The talented people behind our success</p>
        </div>

        <div className="team-carousel">
          <Slider {...settings}>
            {teamMembers.map((member) => (
              <div key={member.id} className="team-slide">
                <div className="team-card">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                    <div className="team-social">
                      <a href={member.social.linkedin} className="social-icon" aria-label={`${member.name} LinkedIn`}>
                        <FaLinkedin />
                      </a>
                      <a href={member.social.twitter} className="social-icon" aria-label={`${member.name} Twitter`}>
                        <FaTwitter />
                      </a>
                      <a href={member.social.github} className="social-icon" aria-label={`${member.name} GitHub`}>
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <button className="read-more-btn" onClick={() => openModal(member)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>


      {
        selectedMember && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-body">
                <div className="modal-image">
                  <img src={selectedMember.image} alt={selectedMember.name} />
                </div>
                <div className="modal-info">
                  <h3>{selectedMember.name}</h3>
                  <span className="modal-role">{selectedMember.role}</span>
                  <p className="modal-description">{selectedMember.description}</p>
                  <div className="modal-social">
                    <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                      <FaLinkedin />
                    </a>
                    <a href={selectedMember.social.twitter} className="social-icon">
                      <FaTwitter />
                    </a>
                    <a href={selectedMember.social.github} className="social-icon">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </section >
  );
};

export default Team;
