import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollDirection, getAnimationVariants } from '../utils/animations';
import team1 from '../assets/PROJECT IMAGES/team1.png';
import team2 from '../assets/PROJECT IMAGES/team2.png';
import team3 from '../assets/PROJECT IMAGES/team3.png';
import team4 from '../assets/PROJECT IMAGES/team4.png';
import team5 from '../assets/PROJECT IMAGES/team5.png';
import team6 from '../assets/PROJECT IMAGES/team6.png';

const About = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isScrollingDown = useScrollDirection();

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={getAnimationVariants(isScrollingDown)}
          className="max-w-7xl mx-auto"
        >
          {/* Hero Section */}
          <div className="h-[80vh] relative mb-20">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </div>
            <div className="relative h-full flex items-center">
              <div className="text-white max-w-2xl px-4">
                <h1 className="text-5xl md:text-7xl font-light mb-6">Sugar Studio</h1>
                <p className="text-xl md:text-2xl font-light">
                  Creating exceptional spaces that inspire and innovate since 2013
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center space-x-8 mb-16">
            {['about', 'team', 'awards', 'philosophy'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-lg font-light px-6 py-2 border-b-2 transition-all duration-300 ${
                  activeTab === tab 
                    ? 'border-black text-black' 
                    : 'border-transparent text-gray-400 hover:text-black'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* About Content */}
          {activeTab === 'about' && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={getAnimationVariants(isScrollingDown)}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20"
            >
              <div>
                <h2 className="text-3xl font-light mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Based in Shillong, Meghalaya, Sugar Studio has grown from a small local design firm to an international powerhouse in architecture and interior design. Our journey began with a simple vision: to create spaces that transform lives.
                </p>
                <p className="text-gray-600">
                  Today, we work across continents, bringing our unique blend of contemporary design and cultural sensitivity to every project we undertake.
                </p>
              </div>
              <motion.div 
                className="space-y-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={getAnimationVariants(isScrollingDown, 0.2)}
              >
                <div>
                  <h3 className="text-xl font-light mb-3">Design Philosophy</h3>
                  <p className="text-gray-600">Blending modern aesthetics with traditional wisdom</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-3">Global Reach</h3>
                  <p className="text-gray-600">Projects across 15+ countries and growing</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-3">Sustainability</h3>
                  <p className="text-gray-600">Committed to eco-friendly design practices</p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Team Content */}
          {activeTab === 'team' && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={getAnimationVariants(isScrollingDown)}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { id: 1, img: team1, name: "John Doe", role: "Senior Architect" },
                { id: 2, img: team2, name: "Jane Smith", role: "Design Director" },
                { id: 3, img: team3, name: "Mike Johnson", role: "Project Manager" },
                { id: 4, img: team4, name: "Sarah Wilson", role: "Interior Designer" },
                { id: 5, img: team5, name: "David Brown", role: "Technical Lead" },
                { id: 6, img: team6, name: "Emily Davis", role: "Sustainability Expert" }
              ].map((member, index) => (
                <motion.div 
                  key={member.id} 
                  className="group relative h-[400px] overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={getAnimationVariants(isScrollingDown, index * 0.1)}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-light">{member.name}</h3>
                      <p className="text-sm">{member.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Awards Content */}
          {activeTab === 'awards' && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={getAnimationVariants(isScrollingDown)}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {[2023, 2022, 2021, 2020].map((year, index) => (
                <motion.div 
                  key={year} 
                  className="border-t border-gray-200 pt-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={getAnimationVariants(isScrollingDown, index * 0.1)}
                >
                  <h3 className="text-2xl font-light mb-4">{year}</h3>
                  <ul className="space-y-4">
                    <li className="text-gray-600">Best Architectural Design - Asia Pacific Awards</li>
                    <li className="text-gray-600">Sustainable Project of the Year - Green Building Council</li>
                    <li className="text-gray-600">Innovation in Design - International Design Awards</li>
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Philosophy Content */}
          {activeTab === 'philosophy' && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={getAnimationVariants(isScrollingDown)}
              className="grid grid-cols-1 md:grid-cols-2 gap-16"
            >
              <div>
                <h2 className="text-3xl font-light mb-6">Our Approach</h2>
                <p className="text-gray-600 mb-6">
                  We believe that great design should seamlessly blend functionality with aesthetics. Our approach is rooted in understanding the unique context of each project - the culture, the environment, and most importantly, the people who will inhabit these spaces.
                </p>
                <p className="text-gray-600">
                  Every project begins with extensive research and dialogue, ensuring that our designs not only meet but exceed our clients' expectations while contributing positively to the surrounding environment.
                </p>
              </div>
              <motion.div 
                className="grid grid-cols-2 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={getAnimationVariants(isScrollingDown, 0.2)}
              >
                <motion.div 
                  className="text-center p-6 bg-gray-50"
                  variants={getAnimationVariants(isScrollingDown, 0.3)}
                >
                  <h3 className="text-xl font-light mb-3">Innovation</h3>
                  <p className="text-gray-600">Pushing boundaries in design and technology</p>
                </motion.div>
                <motion.div 
                  className="text-center p-6 bg-gray-50"
                  variants={getAnimationVariants(isScrollingDown, 0.4)}
                >
                  <h3 className="text-xl font-light mb-3">Sustainability</h3>
                  <p className="text-gray-600">Eco-friendly solutions for tomorrow</p>
                </motion.div>
                <motion.div 
                  className="text-center p-6 bg-gray-50"
                  variants={getAnimationVariants(isScrollingDown, 0.5)}
                >
                  <h3 className="text-xl font-light mb-3">Collaboration</h3>
                  <p className="text-gray-600">Working together to achieve excellence</p>
                </motion.div>
                <motion.div 
                  className="text-center p-6 bg-gray-50"
                  variants={getAnimationVariants(isScrollingDown, 0.6)}
                >
                  <h3 className="text-xl font-light mb-3">Quality</h3>
                  <p className="text-gray-600">Uncompromising attention to detail</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={getAnimationVariants(isScrollingDown)}
            className="text-center mt-16 py-16 bg-gray-50"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-4">Have a Project in Mind?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Let's work together to bring your vision to life. Contact us to discuss your project.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300"
            >
              Start Your Project
            </button>
          </motion.div>

        </motion.div>
      </div>

      {/* Project Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-light mb-6">Project Request</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border border-gray-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 border border-gray-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-2 border border-gray-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Project Details"
                  rows="4"
                  className="w-full p-2 border border-gray-300"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white hover:bg-gray-800"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default About;