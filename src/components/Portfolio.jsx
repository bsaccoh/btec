import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Portfolio.css';

const portfolioItems = [
    { 
      title: "E-Gov Portal", 
      category: "Government", 
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      fullImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    { 
      title: "FinTech App", 
      category: "Mobile Development", 
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      fullImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    { 
      title: "Cloud Migration", 
      category: "Cloud Services", 
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
      fullImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
    },
    { 
      title: "Smart Analytics", 
      category: "Big Data", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      fullImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    { 
      title: "Telecom Mediation", 
      category: "Telecommunications", 
      image: "/src/assets/portfolio/telecom-mediation.png",
      fullImage: "/src/assets/portfolio/telecom-mediation.png"
    },
    { 
      title: "Inventory & POS System", 
      category: "Retail Solutions", 
      image: "/src/assets/portfolio/pos-system.jpeg",
      fullImage: "/src/assets/portfolio/pos-system.jpeg"
    }
]

const partners = ["TechCorp", "GovSystems", "DataFlow", "CloudNine", "SecureNet"]

const Portfolio = () => {
    useScrollReveal();
    const [activePartner, setActivePartner] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (image, index) => {
        setCurrentImage(image);
        setCurrentIndex(index);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const navigateImage = (direction) => {
        let newIndex;
        if (direction === 'prev') {
            newIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
        } else {
            newIndex = (currentIndex + 1) % portfolioItems.length;
        }
        setCurrentIndex(newIndex);
        setCurrentImage(portfolioItems[newIndex].fullImage);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        beforeChange: (current, next) => setActivePartner(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Our <span className="text-gradient">Work</span></h2>
                    <div className="section-line"></div>
                </div>

                <div className="portfolio-grid">
                    {portfolioItems.map((item, index) => (
                        <div 
                            className="portfolio-item reveal" 
                            key={index} 
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => openModal(item.fullImage, index)}
                        >
                            <img src={item.image} alt={item.title} className="portfolio-img" />
                            <div className="portfolio-overlay">
                                <h3>{item.title}</h3>
                                <p>{item.category}</p>
                                <p className="view-fullscreen">Click to view fullscreen</p>
                            </div>
                        </div>
                    ))}
                </div>

                {modalOpen && (
                    <div className="image-modal">
                        <div className="modal-overlay" onClick={closeModal}></div>
                        <div className="modal-content">
                            <button className="close-modal" onClick={closeModal}>
                                <FaTimes />
                            </button>
                            <button className="nav-arrow prev" onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('prev');
                            }}>
                                <FaChevronLeft />
                            </button>
                            <img src={currentImage} alt="Full size" className="modal-image" />
                            <button className="nav-arrow next" onClick={(e) => {
                                e.stopPropagation();
                                navigateImage('next');
                            }}>
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>
                )}

                <div className="partners reveal delay-200">
                    <h3>Trusted By <span className="gradient-text">Industry Leaders</span></h3>
                    <div className="partners-carousel">
                        <Slider {...settings}>
                            {partners.map((partner, index) => (
                                <div key={index} className="partner-slide">
                                    <div 
                                        className={`partner-logo ${index === activePartner ? 'active' : ''}`}
                                        onClick={() => setActivePartner(index)}
                                    >
                                        {partner}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
