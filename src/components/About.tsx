import React from 'react'
import {
  Leaf,
  Award,
  Users,
  Truck,
  Heart,
  Globe,
  Zap,
  Shield,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimations'
import { cn } from '../lib/utils'

const About = () => {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.1 })
  const missionAnimation = useScrollAnimation({ threshold: 0.15 })
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })
  const teamAnimation = useScrollAnimation({ threshold: 0.15 })
  const timelineAnimation = useScrollAnimation({ threshold: 0.1 })
  const valuesAnimation = useScrollAnimation({ threshold: 0.15 })
  const contactAnimation = useScrollAnimation({ threshold: 0.1 })
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "We source only the finest sustainable materials, ensuring our products are both beautiful and environmentally responsible."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Every piece is carefully crafted with attention to detail and built to last, bringing timeless elegance to your home."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Our team of design experts carefully curates each item while building lasting relationships with our customers."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "We pour our love for beautiful design into everything we do, from product selection to customer service."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Bringing world-class design to homes everywhere, connecting cultures through beautiful aesthetics."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly evolving our collection with cutting-edge designs and new sustainable materials."
    }
  ]

  const teamMembers = [
    {
      name: "Elena Rodriguez",
      role: "Founder & CEO",
      bio: "With over 15 years in interior design, Elena founded Luxora to bring premium, sustainable home decor to modern families worldwide.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Marcus Thompson",
      role: "Head of Design",
      bio: "Marcus brings 12 years of experience from leading design houses, ensuring every product meets our exacting aesthetic standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sofia Chen",
      role: "Sustainability Director",
      bio: "Sofia leads our environmental initiatives, ensuring all products meet the highest standards for sustainability and ethical production.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "James Wilson",
      role: "Customer Experience Manager",
      bio: "James ensures every customer interaction exceeds expectations, building lasting relationships through exceptional service.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#"
    }
  ]

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Elena Rodriguez establishes Luxora with a vision to transform home living through sustainable luxury."
    },
    {
      year: "2019",
      title: "First Product Line",
      description: "Launch of our inaugural collection featuring handcrafted textiles and ceramic home accessories."
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description: "Became carbon-neutral and established partnerships with ethical manufacturers worldwide."
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "Expanded to serve customers across North America and Europe with localized collections."
    },
    {
      year: "2022",
      title: "Design Awards",
      description: "Won three prestigious design awards for innovation in sustainable home decor."
    },
    {
      year: "2023",
      title: "Technology Integration",
      description: "Launched our augmented reality app, allowing customers to visualize products in their space."
    }
  ]

  const stats = [
    { number: "500+", label: "Premium Products" },
    { number: "50K+", label: "Happy Customers" },
    { number: "25+", label: "Countries Served" },
    { number: "98%", label: "Customer Satisfaction" }
  ]

  return (
    <section id="about" className="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div
          ref={heroAnimation.elementRef}
          className={cn(
            "text-center space-y-6 mb-20 transition-all duration-700",
            heroAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h1 className="text-5xl font-bold text-secondary-900 dark:text-white">
            About Luxora
          </h1>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          <p className="text-xl text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto leading-relaxed">
            Transforming living spaces with sustainable luxury and timeless design since 2018
          </p>
        </div>

        {/* Mission & Vision */}
        <div
          ref={missionAnimation.elementRef}
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-700",
            missionAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
                Our Mission
              </h2>
              <div className="w-16 h-1 bg-primary-500"></div>
            </div>
            <div className="space-y-6 text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
              <p>
                At Luxora, we believe that your home should be a reflection of your unique personality
                and values. Our mission is to provide premium, sustainable home decor that not only
                enhances your living space but also contributes to a healthier planet.
              </p>
              <p>
                We're committed to ethical sourcing, fair trade practices, and environmental
                responsibility, ensuring that every purchase you make supports both beautiful design
                and positive global impact.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-secondary-900 p-8 rounded-2xl shadow-sm border border-secondary-200 dark:border-secondary-700">
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">Our Values</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-primary-500" />
                <span className="text-secondary-700 dark:text-secondary-300">Integrity in every transaction</span>
              </div>
              <div className="flex items-center space-x-3">
                <Leaf className="w-6 h-6 text-primary-500" />
                <span className="text-secondary-700 dark:text-secondary-300">Environmental responsibility</span>
              </div>
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-primary-500" />
                <span className="text-secondary-700 dark:text-secondary-300">Customer-centric approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-6 h-6 text-primary-500" />
                <span className="text-secondary-700 dark:text-secondary-300">Uncompromising quality</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsAnimation.elementRef}
          className={cn(
            "grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-700",
            statsAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary-500 mb-2">{stat.number}</div>
              <div className="text-sm text-secondary-600 dark:text-secondary-400 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div
            ref={teamAnimation.elementRef}
            className={cn(
              "text-center space-y-4 mb-16 transition-all duration-700",
              teamAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-white">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
            <p className="text-xl text-secondary-600 dark:text-secondary-300">
              The passionate people behind Luxora's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const memberAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
              return (
                <div
                  key={index}
                  ref={memberAnimation.elementRef}
                  className={cn(
                    "bg-white dark:bg-secondary-900 rounded-2xl shadow-sm border border-secondary-200 dark:border-secondary-700 overflow-hidden hover:shadow-lg transition-all duration-300",
                    memberAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <div className="flex space-x-3">
                      <a href={member.linkedin} className="text-secondary-400 hover:text-primary-500 transition-colors duration-200">
                        <Linkedin size={18} />
                      </a>
                      <a href={member.twitter} className="text-secondary-400 hover:text-primary-500 transition-colors duration-200">
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div
            ref={timelineAnimation.elementRef}
            className={cn(
              "text-center space-y-4 mb-16 transition-all duration-700",
              timelineAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-white">
              Our Journey
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
            <p className="text-xl text-secondary-600 dark:text-secondary-300">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200 dark:bg-primary-800"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const timelineItemAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
                return (
                  <div
                    key={index}
                    ref={timelineItemAnimation.elementRef}
                    className={cn(
                      `relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} transition-all duration-700`,
                      timelineItemAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    )}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-secondary-800 z-10"></div>
                    
                    {/* Content */}
                    <div className={`bg-white dark:bg-secondary-900 p-6 rounded-2xl shadow-sm border border-secondary-200 dark:border-secondary-700 max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                      <div className="text-2xl font-bold text-primary-500 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div
            ref={valuesAnimation.elementRef}
            className={cn(
              "text-center space-y-4 mb-16 transition-all duration-700",
              valuesAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-white">
              What We Stand For
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
            <p className="text-xl text-secondary-600 dark:text-secondary-300">
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const valueAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
              return (
                <div
                  key={index}
                  ref={valueAnimation.elementRef}
                  className={cn(
                    "bg-white dark:bg-secondary-900 p-8 rounded-2xl shadow-sm border border-secondary-200 dark:border-secondary-700 hover:shadow-lg transition-all duration-300",
                    valueAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  )}
                >
                  <div className="text-primary-500 mb-4">
        {/* Call to Action Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-lg overflow-hidden">
          <div className="px-8 py-16 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered the perfect blend of luxury and sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
              >
                Shop Collection
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Contact Information */}
        <div
          ref={contactAnimation.elementRef}
          className={cn(
            "bg-white dark:bg-secondary-900 rounded-2xl shadow-sm border border-secondary-200 dark:border-secondary-700 p-8 transition-all duration-700",
            contactAnimation.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 dark:text-white">
              Get In Touch
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto"></div>
            <p className="text-lg text-secondary-600 dark:text-secondary-300">
              We'd love to hear from you. Reach out with any questions or feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Email Us</h3>
              <p className="text-secondary-600 dark:text-secondary-300">hello@luxora.com</p>
              <p className="text-secondary-600 dark:text-secondary-300">support@luxora.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Call Us</h3>
              <p className="text-secondary-600 dark:text-secondary-300">+1 (555) 123-4567</p>
              <p className="text-secondary-600 dark:text-secondary-300">Mon-Fri, 9AM-6PM PST</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">Visit Us</h3>
              <p className="text-secondary-600 dark:text-secondary-300">
                123 Design Avenue<br />
                San Francisco, CA 94105
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-12 pt-8 border-t border-secondary-200 dark:border-secondary-700">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors duration-200">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors duration-200">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors duration-200">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors duration-200">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About