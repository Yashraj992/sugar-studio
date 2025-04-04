import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import hero1 from "../assets/PROJECT IMAGES/home-img.jpg"
import hero2 from "../assets/PROJECT IMAGES/home-img2.jpg"
import hero3 from "../assets/PROJECT IMAGES/home-img3.jpg"
import project1 from "../assets/PROJECT IMAGES/project1.jpg"
import project2 from "../assets/PROJECT IMAGES/project2.jpg"
import aboutImage from "../assets/PROJECT IMAGES/about-img.jpg"

const HeroSection = () => {
  const containerRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [hero1, hero2, hero3];
  const heroContent = [
    {
      title: "Crafting Spaces",
      subtitle: "That Inspire",
      description: "International architecture and interior design studio specializing in furniture showrooms and exhibition booth design.",
      buttonColor: "text-white hover:text-white-700"
    },
    {
      title: "Designing Dreams",
      subtitle: "Into Reality", 
      description: "Creating innovative and sustainable architectural solutions for modern living and working spaces.",
      buttonColor: "text-white hover:text-white"
    },
    {
      title: "Transforming Spaces",
      subtitle: "With Vision",
      description: "Blending aesthetics with functionality to create memorable environments that leave lasting impressions.",
      buttonColor: "text-white hover:text-white"
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="h-screen relative overflow-hidden">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto h-full flex items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white">
                    {heroContent[currentImageIndex].title}
                    <br />
                    <span className="text-gray-300">{heroContent[currentImageIndex].subtitle}</span>
                  </h1>
                  <p className="text-lg text-gray-300 max-w-md">
                    {heroContent[currentImageIndex].description}
                  </p>
                  <Link to="/projects">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`btn ${heroContent[currentImageIndex].buttonColor}`}
                    >
                      Explore Projects
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const ProjectsPreview = () => {
  const projects = [
    {
      id: 1,
      title: 'Modern Furniture Showroom',
      image: project1,
    },
    {
      id: 2,
      title: 'Luxury Exhibition Booth',
      image: project2,
    },
    {
      id: 3,
      title: 'Urban Living Concept',
      image: hero3,
    }
  ];

  return (
    <section className="h-auto md:h-[99vh]">
      <div className="h-full">
        <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-0">
          {projects.map((project, index) => (
            <Link
              to="/projects"
              key={project.id}
              className="relative overflow-hidden group h-[33vh] md:h-full"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl text-white font-light text-center px-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="h-auto md:h-[99vh] bg-white text-black py-16 md:py-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-16">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 50
                }}
              >
                Sugar Studio
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  delay: 0.1
                }}
                className="text-gray-600"
              >
                in Meghalaya
              </motion.div>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Nestled in the breathtaking landscapes of Meghalaya, Sugar Studio draws inspiration from the living root bridges, cascading waterfalls, and rich cultural heritage of the region. Our architectural designs blend modern aesthetics with traditional wisdom.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              We specialize in creating sustainable architectural solutions that harmonize with Meghalaya's unique environment, incorporating local materials and indigenous design elements while meeting contemporary needs.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/about"
                className="inline-block border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
              >
                DISCOVER MORE
              </Link>
              <Link 
                to="/contact"
                className="inline-block border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT US
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 h-[300px] md:h-[500px] relative"
          >
            <img 
              src={aboutImage}
              alt="About Sugar Studio"
              className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};


const CareerSection = () => {
  return (
    <section className="h-auto md:h-[99vh] bg-gray-100 py-16 md:py-0 relative">
      <div className="absolute inset-0 bg-gray-100 bg-opacity-90" />
      <div className="container mx-auto px-4 h-full relative">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center h-full gap-8 md:gap-16">
          
          {/* Left Content - Sugar Studio Position */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-gray-900">
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 50
                }}
              >
                Join Our Team
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 1,
                  type: "spring",
                  stiffness: 50,
                  delay: 0.1
                }}
                className="text-gray-600"
              >
                at Sugar Studio
              </motion.div>
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              We're always looking for talented individuals who share our passion for innovative design and sustainable architecture. Join us in creating inspiring spaces that make a difference.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light mb-2 text-gray-900">Senior Architect</h3>
                <p className="text-gray-600">Full-time position • Shillong</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-light mb-2 text-gray-900">Interior Designer</h3>
                <p className="text-gray-600">Full-time position • Shillong</p>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                to="/career"
                className="inline-block border border-gray-900 text-gray-900 px-8 py-3 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                VIEW ALL POSITIONS
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h3 className="text-2xl font-light text-gray-900">Why Join Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-lg font-light mb-2 text-gray-900">Creative Freedom</h4>
                <p className="text-gray-600">Express your innovative ideas in a supportive environment</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-lg font-light mb-2 text-gray-900">Growth Opportunities</h4>
                <p className="text-gray-600">Continuous learning and professional development</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-lg font-light mb-2 text-gray-900">Work-Life Balance</h4>
                <p className="text-gray-600">Flexible schedules and remote work options</p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="text-lg font-light mb-2 text-gray-900">Collaborative Culture</h4>
                <p className="text-gray-600">Work with passionate professionals worldwide</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="h-auto md:h-[99vh] bg-black text-white py-16 md:py-0 relative">
      <div className="container mx-auto px-4 h-full">
        <div className="flex flex-col md:flex-row items-center justify-between h-full gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-light mb-2">Visit Us</h3>
                <p className="text-gray-300">
                  Sugar Studio<br />
                  Police Bazar, Shillong<br />
                  Meghalaya, India 793001
                </p>
              </div>
              <div>
                <h3 className="text-xl font-light mb-2">Contact</h3>
                <p className="text-gray-300">
                  Phone: +91 364 222 1234<br />
                  Email: hello@sugarstudio.com
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 h-[400px] relative rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57272.05864732713!2d91.8681114!3d25.5788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507e8f34bd207f%3A0xf5ef6117c271594!2sShillong%2C%20Meghalaya!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsPreview />
      <AboutSection />
      <CareerSection />
      <ContactSection />
    </main>
  );
};

export default Home;