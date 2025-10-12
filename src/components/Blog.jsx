import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import '../styles/blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Software Development",
      excerpt: "Explore how artificial intelligence is transforming the way we build software and what it means for developers and businesses.",
      author: "Muhammad Noman",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "AI & Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop"
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure",
      excerpt: "Learn best practices for designing and implementing cloud infrastructure that scales with your business needs.",
      author: "Talha Waseem",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop"
    },
    {
      id: 3,
      title: "Mobile App Development Trends 2025",
      excerpt: "Discover the latest trends in mobile app development and how they're shaping the future of mobile experiences.",
      author: "Ali Daud",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop"
    }
  ];

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1 className="blog-hero-title">
            Tech<span className="gradient-text">Trigger</span> Blog
          </h1>
          <p className="blog-hero-subtitle">
            Insights, tutorials, and stories from our team
          </p>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="blog-content">
        <div className="blog-container">
          <div className="blog-coming-soon">
            <div className="blog-coming-soon-icon">📝</div>
            <h2>Blog Coming Soon</h2>
            <p>
              We're working on creating valuable content for you. Our blog will feature
              technical tutorials, industry insights, and stories from our team.
            </p>
            <p>
              Stay tuned for articles on AI, cloud computing, web development, mobile apps,
              and more from our expert team.
            </p>
          </div>

          {/* Preview Posts */}
          <div className="blog-preview-section">
            <h2 className="section-title">What's Coming</h2>
            <div className="blog-posts-grid">
              {blogPosts.map((post) => (
                <div key={post.id} className="blog-post-card">
                  <div className="blog-post-image">
                    <img src={post.image} alt={post.title} />
                    <div className="blog-post-category">{post.category}</div>
                  </div>
                  <div className="blog-post-content">
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-post-meta">
                      <div className="blog-post-meta-item">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="blog-post-meta-item">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="blog-post-meta-item">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <button className="blog-post-button" disabled>
                      Read More <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="blog-newsletter">
            <h2>Get Notified When We Launch</h2>
            <p>Subscribe to our newsletter to be the first to read our articles</p>
            <a href="/#footer" className="blog-newsletter-button">
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
