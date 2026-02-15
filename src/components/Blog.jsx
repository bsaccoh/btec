import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

const blogPosts = [
    {
        id: 1,
        category: 'Enterprise Solutions',
        title: 'Building Enterprise Solutions for the Modern Business',
        excerpt: 'How custom enterprise applications and integrated platforms are helping organizations streamline operations and drive growth across Africa.',
        date: 'Feb 10, 2026',
        readTime: '5 min read',
    },
    {
        id: 2,
        category: 'Data Engineering',
        title: 'Building Scalable Data Pipelines for Enterprise Growth',
        excerpt: 'How modern ETL architectures and real-time analytics are transforming decision-making for businesses across Africa.',
        date: 'Jan 28, 2026',
        readTime: '4 min read',
    },
    {
        id: 3,
        category: 'Digital Transformation',
        title: 'Why Every SME Needs a Digital Strategy in 2026',
        excerpt: 'From workflow automation to cloud adoption, the key pillars of digital transformation that drive competitive advantage.',
        date: 'Jan 15, 2026',
        readTime: '6 min read',
    },
];

const Blog = () => {
    return (
        <section className="blog-section" id="blog">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        Latest <span className="text-gradient">Insights</span>
                    </h2>
                    <p className="section-subtitle">
                        Industry trends, expert analysis, and thought leadership
                    </p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <article className="blog-card" key={post.id}>
                            <div className="blog-card-header">
                                <span className="blog-category">{post.category}</span>
                                <div className="blog-meta">
                                    <FaCalendarAlt />
                                    <span>{post.date}</span>
                                    <span>·</span>
                                    <span>{post.readTime}</span>
                                </div>
                            </div>
                            <h3 className="blog-title">{post.title}</h3>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <button className="blog-link">
                                Read Article <FaArrowRight />
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
