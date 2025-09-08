import React, { useState } from 'react';
import Logo from '../components/Logo';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      category: "Orders & Customization",
      questions: [
        {
          question: "How do I place a custom order?",
          answer: "To place a custom order, visit our contact page and select 'Custom Order' as your inquiry type. Provide details about your device model, preferred colors, patterns, and any special requirements. We'll respond within 24 hours with design options and pricing."
        },
        {
          question: "What devices do you make cases for?",
          answer: "We specialize in laptop cases (11\" to 17\") and iPad cases (all models including Mini, Air, and Pro). We can also create cases for other tablets and e-readers. If you have a specific device, just ask - we love a good challenge!"
        },
        {
          question: "How long does a custom order take?",
          answer: "Custom orders typically take 2-3 weeks from design approval to completion. This timeline may vary slightly during exam periods as I balance my studies with crafting. I'll keep you updated throughout the process and let you know of any delays in advance."
        },
        {
          question: "Can I see my design before you make it?",
          answer: "Absolutely! We provide digital mockups or sketches of your custom design before we begin crafting. We want to ensure you love your case before we create it."
        }
      ]
    },
    {
      category: "Materials & Quality",
      questions: [
        {
          question: "What materials do you use?",
          answer: "We use premium materials including organic cotton, genuine leather, eco-friendly padding, and water-resistant linings. All materials are carefully selected for durability, sustainability, and beauty."
        },
        {
          question: "Are your cases protective?",
          answer: "Yes! All our cases feature soft padding to protect against scratches and minor impacts. While they're not rugged cases for extreme conditions, they provide excellent protection for everyday use and transport."
        },
        {
          question: "How do I care for my handmade case?",
          answer: "Care instructions vary by material. Generally, spot clean with a damp cloth for fabric cases. Leather cases benefit from occasional conditioning. We include specific care instructions with every order."
        },
        {
          question: "Do you use sustainable materials?",
          answer: "Sustainability is important to us. We use organic cotton when possible, source leather from ethical suppliers, and choose eco-friendly padding materials. We're always working to improve our environmental impact."
        }
      ]
    },
    {
      category: "Shipping & Returns",
      questions: [
        {
          question: "Do you ship internationally?",
          answer: "Currently, I'm focusing on serving customers within Hungary to ensure the best service and faster delivery times. As I grow and manage my studies, I may expand to other countries in the future."
        },
        {
          question: "What are your shipping costs?",
          answer: "Shipping within Hungary starts at 2,000 HUF, with free shipping on orders over 15,000 HUF. Exact costs are calculated based on your location and package size."
        },
        {
          question: "What's your return policy?",
          answer: "We want you to love your case! Returns are accepted within 30 days of delivery for ready-made items in original condition. Custom orders are final unless there's a defect or error on our part."
        },
        {
          question: "How is my order packaged?",
          answer: "All orders are carefully packaged in eco-friendly materials to ensure safe delivery. Custom orders include a handwritten note and care instructions."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How much do your cases cost?",
          answer: "Ready-made laptop cases range from 10,000-18,000 HUF, iPad cases from 7,000-12,000 HUF. Custom orders start at 12,000 HUF for iPad cases and 20,000 HUF for laptop cases, depending on complexity and materials."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and Apple Pay. For custom orders, we require a 50% deposit to begin work, with the balance due before shipping."
        },
        {
          question: "Do you offer wholesale pricing?",
          answer: "Yes! We offer wholesale pricing for orders of 10 or more pieces. Contact us with your requirements for a custom quote."
        },
        {
          question: "Can I get a discount for multiple items?",
          answer: "I offer a 10% discount for orders of 3 or more ready-made items. Custom orders are priced individually, but I can discuss package deals for multiple pieces. Student discounts may also be available - just ask!"
        }
      ]
    },
    {
      category: "About Our Brand",
      questions: [
        {
          question: "Who makes your cases?",
          answer: "Every case is handmade by me - a passionate student from Szada, Hungary, who discovered the joy of creating beautiful, functional cases while pursuing my studies. Each piece receives personal attention and care."
        },
        {
          question: "Where are you located?",
          answer: "I'm based in Szada, Hungary. My small student studio is where all the magic happens! Studio visits are available by appointment, though please understand that my schedule revolves around my studies."
        },
        {
          question: "How did this business start?",
          answer: "My handmade case business began as my passion project while studying in Szada, Hungary. What started as a creative way to make unique cases for my own devices became something I loved sharing with others. It's grown from gifts for friends and classmates into a small business serving customers across Hungary."
        },
        {
          question: "Do you have a physical store?",
          answer: "I operate primarily online from my student studio in Szada, Hungary. Studio visits are possible by appointment when my schedule allows. I also hope to participate in local craft fairs and markets when time permits between studies."
        }
      ]
    }
  ];

  return (
    <div className="faq-page">
      <div className="container">
        {/* Header */}
        <section className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>
            Find answers to common questions about our handmade cases, custom orders, 
            shipping, and more. Can't find what you're looking for? 
            <a href="/contact"> Get in touch</a> and we'll be happy to help!
          </p>
        </section>

        {/* FAQ Content */}
        <section className="faq-content">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="faq-category">
              <h2 className="category-title">{category.category}</h2>
              <div className="faq-items">
                {category.questions.map((item, itemIndex) => {
                  const globalIndex = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems.has(globalIndex);
                  
                  return (
                    <div key={itemIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <button
                        className="faq-question"
                        onClick={() => toggleItem(globalIndex)}
                        aria-expanded={isOpen}
                      >
                        <span>{item.question}</span>
                        <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                      </button>
                      <div className="faq-answer">
                        <div className="faq-answer-content">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        {/* Still Have Questions */}
        <section className="faq-contact-cta">
          <div className="cta-content">
            <h2>Still Have Questions?</h2>
            <p>
              If you couldn't find the answer you were looking for, we're here to help! 
              Reach out to us and we'll respond within 24 hours.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">Contact Us</a>
              <a href="mailto:hello@patternia.com" className="btn btn-secondary">
                Email Directly
              </a>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="faq-quick-links">
          <h3>Quick Links</h3>
          <div className="quick-links-grid">
            <a href="/products" className="quick-link">
              <span className="link-icon">🛍️</span>
              <div>
                <h4>Browse Products</h4>
                <p>See our ready-made collection</p>
              </div>
            </a>
            <a href="/contact" className="quick-link">
              <span className="link-icon">✨</span>
              <div>
                <h4>Custom Order</h4>
                <p>Create something unique</p>
              </div>
            </a>
            <a href="/about" className="quick-link">
              <span className="link-icon">💝</span>
              <div>
                <h4>Our Story</h4>
                <p>Learn about our process</p>
              </div>
            </a>
            <a href="/contact" className="quick-link">
              <span className="link-icon">📞</span>
              <div>
                <h4>Get in Touch</h4>
                <p>Ask us anything</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
