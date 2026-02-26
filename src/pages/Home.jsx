import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { 
  FiLink, 
  FiUsers, 
  FiTrendingUp, 
  FiArrowRight, 
  FiGithub, 
  FiTwitter, 
  FiInstagram,
  FiYoutube,
  FiDribbble,
  FiStar,
  FiHeart,
  FiShare2
} from 'react-icons/fi';

const Home = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: <FiLink className="h-8 w-8" />,
      title: "Smart Link Management",
      description: "Drag-and-drop interface to organize your links exactly how you want them. Add, edit, or remove links in seconds.",
      color: "from-blue-500 to-cyan-500",
      stats: "3x faster organization"
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: "Customizable Profile",
      description: "Make it yours with custom themes, profile pictures, and bio. Stand out with a unique look that matches your brand.",
      color: "from-purple-500 to-pink-500",
      stats: "10+ themes available"
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: "Advanced Analytics",
      description: "Track clicks, see your audience, and optimize your links. Know exactly what content resonates with your followers.",
      color: "from-green-500 to-emerald-500",
      stats: "Real-time tracking"
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Content Creator",
      content: "LinkHub doubled my link engagement. The analytics helped me understand what my audience really wants.",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Digital Marketer",
      content: "The clean design and easy customization make it perfect for my brand. Best Linktree alternative out there!",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 5
    },
    {
      name: "Mike Roberts",
      role: "Artist",
      content: "My followers love how organized my links are now. The themes let me express my creative style.",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users", icon: <FiUsers /> },
    { number: "50K+", label: "Links Created", icon: <FiLink /> },
    { number: "1M+", label: "Clicks Tracked", icon: <FiTrendingUp /> },
    { number: "4.9★", label: "User Rating", icon: <FiStar /> }
  ];

  const socialIcons = [
    { icon: <FiGithub />, color: "hover:text-gray-900", link: "#" },
    { icon: <FiTwitter />, color: "hover:text-blue-400", link: "#" },
    { icon: <FiInstagram />, color: "hover:text-pink-600", link: "#" },
    { icon: <FiYoutube />, color: "hover:text-red-600", link: "#" },
    { icon: <FiDribbble />, color: "hover:text-pink-500", link: "#" }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Modern Gradient */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 opacity-10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-40 right-40 w-60 h-60 bg-green-300 opacity-10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
        </div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur-sm">
              <FiStar className="mr-2 h-4 w-4" />
              Introducing LinkHub 2.0
              <FiHeart className="ml-2 h-4 w-4" />
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            All Your Important
            <span className="block mt-2 bg-gradient-to-r from-yellow-300 to-pink-300 text-transparent bg-clip-text">
              Links in One Place
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-12"
          >
            Create your personalized page to share all your content. 
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              to="/register"
              className="group relative px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get Started For Free
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-300 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            
            <Link
              to="/demo"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              Watch Demo
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={ref} className="py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text block mt-2">
                Grow Your Online Presence
              </span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features that help you connect with your audience and track your success.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <div className="flex items-center text-sm font-semibold text-blue-600">
                    <span className="mr-2">{feature.stats}</span>
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              Loved by Creators
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300 mt-2">
                Worldwide
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-4">"{testimonial.content}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 opacity-10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Simplify Your Links?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-12">
              Join thousands of creators who are already using LinkHub.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                to="/register"
                className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Started Now
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <FiLink className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-2xl">LinkHub</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The modern way to share all your important links. Create your free page today.
              </p>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`text-gray-400 ${social.color} transition-colors`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Demo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LinkHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;