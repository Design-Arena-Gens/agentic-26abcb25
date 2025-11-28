'use client'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Navigation */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 50px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
          💧 AquaFlow Pro
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#features" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Features</a>
          <a href="#specs" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Specifications</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        padding: '100px 20px',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '56px',
          fontWeight: 'bold',
          marginBottom: '20px',
          lineHeight: '1.2'
        }}>
          Power Your Water Flow<br />With Precision Engineering
        </h1>
        <p style={{
          fontSize: '20px',
          marginBottom: '40px',
          opacity: '0.9',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          Industrial-grade water pumps designed for efficiency, reliability, and long-lasting performance in any application.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button style={{
            padding: '15px 40px',
            fontSize: '18px',
            fontWeight: 'bold',
            background: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Get a Quote
          </button>
          <button style={{
            padding: '15px 40px',
            fontSize: '18px',
            fontWeight: 'bold',
            background: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '50px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.background = 'white'
            e.target.style.color = '#667eea'
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'transparent'
            e.target.style.color = 'white'
          }}
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{
        padding: '80px 50px',
        background: 'white'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '60px',
          color: '#333'
        }}>
          Why Choose AquaFlow Pro?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { icon: '⚡', title: 'High Efficiency', desc: 'Save up to 40% on energy costs with our advanced motor technology' },
            { icon: '🛡️', title: 'Built to Last', desc: 'Corrosion-resistant materials and 10-year warranty included' },
            { icon: '🔧', title: 'Easy Maintenance', desc: 'Tool-free access to all serviceable components' },
            { icon: '📊', title: 'Smart Monitoring', desc: 'IoT-enabled sensors track performance in real-time' },
            { icon: '🌊', title: 'Variable Flow', desc: 'Adjustable output from 50 to 5000 gallons per hour' },
            { icon: '🤝', title: '24/7 Support', desc: 'Expert technical support available around the clock' }
          ].map((feature, idx) => (
            <div key={idx} style={{
              padding: '30px',
              borderRadius: '15px',
              background: '#f8f9fa',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '24px', marginBottom: '10px', color: '#333' }}>{feature.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" style={{
        padding: '80px 50px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          Technical Specifications
        </h2>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '40px'
        }}>
          {[
            { label: 'Power Output', value: '1.5 HP - 5 HP Models Available' },
            { label: 'Max Flow Rate', value: '5000 GPH' },
            { label: 'Max Head Height', value: '120 feet' },
            { label: 'Voltage', value: '110V / 220V / 440V' },
            { label: 'Motor Type', value: 'Brushless DC with Variable Speed' },
            { label: 'Material', value: 'Stainless Steel 316L' },
            { label: 'Temperature Range', value: '-20°C to 120°C' },
            { label: 'Certifications', value: 'UL, CE, NSF/ANSI 61' }
          ].map((spec, idx) => (
            <div key={idx} style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '20px 0',
              borderBottom: idx < 7 ? '1px solid rgba(255,255,255,0.2)' : 'none'
            }}>
              <span style={{ fontWeight: 'bold' }}>{spec.label}</span>
              <span>{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{
        padding: '80px 50px',
        background: 'white'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '60px',
          color: '#333'
        }}>
          Choose Your Model
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Residential', price: '$599', power: '1.5 HP', flow: '2000 GPH', features: ['5-year warranty', 'Smart monitoring', 'Free installation guide'] },
            { name: 'Commercial', price: '$1,299', power: '3 HP', flow: '3500 GPH', features: ['7-year warranty', 'IoT connectivity', 'Priority support', 'Professional installation'], popular: true },
            { name: 'Industrial', price: '$2,499', power: '5 HP', flow: '5000 GPH', features: ['10-year warranty', 'Advanced analytics', '24/7 dedicated support', 'On-site installation'] }
          ].map((plan, idx) => (
            <div key={idx} style={{
              padding: '40px 30px',
              borderRadius: '15px',
              background: plan.popular ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#f8f9fa',
              color: plan.popular ? 'white' : '#333',
              boxShadow: plan.popular ? '0 10px 30px rgba(102,126,234,0.4)' : '0 4px 6px rgba(0,0,0,0.1)',
              position: 'relative',
              transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
              border: plan.popular ? 'none' : '2px solid #e0e0e0'
            }}>
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#ffd700',
                  color: '#333',
                  padding: '5px 20px',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}>
                  MOST POPULAR
                </div>
              )}
              <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>{plan.name}</h3>
              <div style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>{plan.price}</div>
              <div style={{ marginBottom: '20px', opacity: '0.8' }}>{plan.power} • {plan.flow}</div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} style={{ padding: '10px 0', borderBottom: '1px solid ' + (plan.popular ? 'rgba(255,255,255,0.2)' : '#e0e0e0') }}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button style={{
                width: '100%',
                padding: '15px',
                fontSize: '16px',
                fontWeight: 'bold',
                background: plan.popular ? 'white' : '#667eea',
                color: plan.popular ? '#667eea' : 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '80px 50px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '20px' }}>
          Ready to Transform Your Water Systems?
        </h2>
        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: '0.9' }}>
          Contact our experts for a free consultation and custom quote
        </p>
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px'
        }}>
          <input type="text" placeholder="Your Name" style={{
            padding: '15px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '10px',
            outline: 'none'
          }} />
          <input type="email" placeholder="Email Address" style={{
            padding: '15px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '10px',
            outline: 'none'
          }} />
          <input type="tel" placeholder="Phone Number" style={{
            padding: '15px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '10px',
            outline: 'none'
          }} />
          <textarea placeholder="Tell us about your project" rows="4" style={{
            padding: '15px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '10px',
            outline: 'none',
            resize: 'vertical'
          }}></textarea>
          <button style={{
            padding: '15px',
            fontSize: '18px',
            fontWeight: 'bold',
            background: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px 50px',
        background: 'rgba(0, 0, 0, 0.3)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '20px', flexWrap: 'wrap' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About Us</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Documentation</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Support</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of Service</a>
        </div>
        <p style={{ opacity: '0.7' }}>© 2024 AquaFlow Pro. All rights reserved.</p>
      </footer>
    </div>
  )
}
