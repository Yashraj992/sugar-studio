import { motion } from 'framer-motion';
import { useState } from 'react';
import project1 from "../assets/PROJECT IMAGES/img1.jpg";
import project2 from "../assets/PROJECT IMAGES/img2.jpg";
import project3 from "../assets/PROJECT IMAGES/img3.jpg";
import project4 from "../assets/PROJECT IMAGES/img4.jpg";
import project5 from "../assets/PROJECT IMAGES/img5.jpg";
import project6 from "../assets/PROJECT IMAGES/img6.jpg";
import project7 from "../assets/PROJECT IMAGES/img7.jpg";
import project8 from "../assets/PROJECT IMAGES/img8.jpg";
import project9 from "../assets/PROJECT IMAGES/img9.jpg";
import project10 from "../assets/PROJECT IMAGES/img10.jpg";
import project11 from "../assets/PROJECT IMAGES/img11.jpg";
import project12 from "../assets/PROJECT IMAGES/img12.jpg";
import project13 from "../assets/PROJECT IMAGES/img13.jpg";
import project14 from "../assets/PROJECT IMAGES/img14.jpg";
import project15 from "../assets/PROJECT IMAGES/img15.jpg";
import project16 from "../assets/PROJECT IMAGES/img16.jpg";
import project17 from "../assets/PROJECT IMAGES/img17.jpg";
import project18 from "../assets/PROJECT IMAGES/img18.jpg";
import project19 from "../assets/PROJECT IMAGES/img19.jpg";
import project20 from "../assets/PROJECT IMAGES/img20.jpg";
import project21 from "../assets/PROJECT IMAGES/img21.jpg";
import project22 from "../assets/PROJECT IMAGES/img22.jpg";
import project23 from "../assets/PROJECT IMAGES/img23.jpg";
import project24 from "../assets/PROJECT IMAGES/img24.jpg";
import project25 from "../assets/PROJECT IMAGES/img25.jpg";
import project26 from "../assets/PROJECT IMAGES/img26.jpg";
import project27 from "../assets/PROJECT IMAGES/img27.jpg";
import project28 from "../assets/PROJECT IMAGES/img28.jpg";
import project29 from "../assets/PROJECT IMAGES/img29.jpg";
import project30 from "../assets/PROJECT IMAGES/img30.jpg";
import project31 from "../assets/PROJECT IMAGES/img31.jpg";
import project32 from "../assets/PROJECT IMAGES/img32.jpg";
import project33 from "../assets/PROJECT IMAGES/img33.jpg";
import project34 from "../assets/PROJECT IMAGES/img34.jpg";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group cursor-pointer h-[400px]"
    >
      <div className="w-full h-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-black bg-opacity-50">
          <h3 className="text-2xl font-light text-white">{project.title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-light mb-6">Project Request</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border border-gray-300"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <div>
            <textarea
              placeholder="Project Details"
              rows="4"
              className="w-full p-2 border border-gray-300"
              value={formData.details}
              onChange={(e) => setFormData({...formData, details: e.target.value})}
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
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
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('residential');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectCategories = {
    residential: [
      {
        id: 1,
        title: 'Modern Villa',
        image: project34
      },
      {
        id: 2,
        title: 'Urban Apartment',
        image: project33
      },
      {
        id: 3,
        title: 'Luxury Home',
        image: project32
      },
      {
        id: 4,
        title: 'Beach House',
        image: project31
      },
      {
        id: 5,
        title: 'Mountain Retreat',
        image: project30
      },
      {
        id: 6,
        title: 'City Penthouse',
        image: project29
      },
      {
        id: 7,
        title: 'Suburban Estate',
        image: project28
      },
      {
        id: 8,
        title: 'Garden Villa',
        image: project27
      },
      {
        id: 9,
        title: 'Lake House',
        image: project26
      },
      {
        id: 10,
        title: 'Modern Townhouse',
        image: project25
      },
      {
        id: 11,
        title: 'Eco Home',
        image: project24
      },
      {
        id: 12,
        title: 'Desert Oasis',
        image: project23
      },
      {
        id: 24,
        title: 'Corporate Office',
        image: project11
      },
      {
        id: 25,
        title: 'Retail Store',
        image: project10
      },
      {
        id: 26,
        title: 'Restaurant',
        image: project9
      },
      {
        id: 27,
        title: 'Hotel',
        image: project8
      },
      {
        id: 28,
        title: 'Shopping Mall',
        image: project7
      },
      {
        id: 29,
        title: 'Fitness Center',
        image: project6
      },
      {
        id: 30,
        title: 'Medical Clinic',
        image: project5
      },
      {
        id: 31,
        title: 'Conference Center',
        image: project4
      },
      {
        id: 32,
        title: 'Cinema Complex',
        image: project3
      },
      {
        id: 33,
        title: 'Sports Facility',
        image: project2
      },
      {
        id: 34,
        title: 'Educational Center',
        image: project1
      },
      {
        id: 13,
        title: 'Modern Kitchen',
        image: project22
      },
      {
        id: 14,
        title: 'Luxury Bathroom',
        image: project21
      },
      {
        id: 15,
        title: 'Master Bedroom',
        image: project20
      },
      {
        id: 16,
        title: 'Living Room',
        image: project19
      },
      {
        id: 17,
        title: 'Home Office',
        image: project18
      },
      {
        id: 18,
        title: 'Dining Room',
        image: project17
      },
      {
        id: 19,
        title: 'Kids Room',
        image: project16
      },
      {
        id: 20,
        title: 'Entertainment Room',
        image: project15
      },
      {
        id: 21,
        title: 'Walk-in Closet',
        image: project14
      },
      {
        id: 22,
        title: 'Guest Room',
        image: project13
      },
      {
        id: 23,
        title: 'Study Room',
        image: project12
      }
    ],
    interior: [
      {
        id: 13,
        title: 'Modern Kitchen',
        image: project22
      },
      {
        id: 14,
        title: 'Luxury Bathroom',
        image: project21
      },
      {
        id: 15,
        title: 'Master Bedroom',
        image: project20
      },
      {
        id: 16,
        title: 'Living Room',
        image: project19
      },
      {
        id: 17,
        title: 'Home Office',
        image: project18
      },
      {
        id: 18,
        title: 'Dining Room',
        image: project17
      },
      {
        id: 19,
        title: 'Kids Room',
        image: project16
      },
      {
        id: 20,
        title: 'Entertainment Room',
        image: project15
      },
      {
        id: 21,
        title: 'Walk-in Closet',
        image: project14
      },
      {
        id: 22,
        title: 'Guest Room',
        image: project13
      },
      {
        id: 23,
        title: 'Study Room',
        image: project12
      },
      {
        id: 1,
        title: 'Modern Villa',
        image: project34
      },
      {
        id: 2,
        title: 'Urban Apartment',
        image: project33
      },
      {
        id: 3,
        title: 'Luxury Home',
        image: project32
      },
      {
        id: 4,
        title: 'Beach House',
        image: project31
      },
      {
        id: 5,
        title: 'Mountain Retreat',
        image: project30
      },
      {
        id: 6,
        title: 'City Penthouse',
        image: project29
      },
      {
        id: 7,
        title: 'Suburban Estate',
        image: project28
      },
      {
        id: 8,
        title: 'Garden Villa',
        image: project27
      },
      {
        id: 9,
        title: 'Lake House',
        image: project26
      },
      {
        id: 10,
        title: 'Modern Townhouse',
        image: project25
      },
      {
        id: 11,
        title: 'Eco Home',
        image: project24
      },
      {
        id: 12,
        title: 'Desert Oasis',
        image: project23
      },
      {
        id: 24,
        title: 'Corporate Office',
        image: project11
      },
      {
        id: 25,
        title: 'Retail Store',
        image: project10
      },
      {
        id: 26,
        title: 'Restaurant',
        image: project9
      },
      {
        id: 27,
        title: 'Hotel',
        image: project8
      },
      {
        id: 28,
        title: 'Shopping Mall',
        image: project7
      },
      {
        id: 29,
        title: 'Fitness Center',
        image: project6
      },
      {
        id: 30,
        title: 'Medical Clinic',
        image: project5
      },
      {
        id: 31,
        title: 'Conference Center',
        image: project4
      },
      {
        id: 32,
        title: 'Cinema Complex',
        image: project3
      },
      {
        id: 33,
        title: 'Sports Facility',
        image: project2
      },
      {
        id: 34,
        title: 'Educational Center',
        image: project1
      }
    ],
    commercial: [
      {
        id: 1,
        title: 'Modern Villa',
        image: project34
      },
      {
        id: 2,
        title: 'Urban Apartment',
        image: project33
      },
      {
        id: 3,
        title: 'Luxury Home',
        image: project32
      },
      {
        id: 4,
        title: 'Beach House',
        image: project31
      },
      {
        id: 5,
        title: 'Mountain Retreat',
        image: project30
      },
      {
        id: 6,
        title: 'City Penthouse',
        image: project29
      },
      {
        id: 7,
        title: 'Suburban Estate',
        image: project28
      },
      {
        id: 8,
        title: 'Garden Villa',
        image: project27
      },
      {
        id: 9,
        title: 'Lake House',
        image: project26
      },
      {
        id: 10,
        title: 'Modern Townhouse',
        image: project25
      },
      {
        id: 11,
        title: 'Eco Home',
        image: project24
      },
      {
        id: 12,
        title: 'Desert Oasis',
        image: project23
      },
      {
        id: 24,
        title: 'Corporate Office',
        image: project11
      },
      {
        id: 25,
        title: 'Retail Store',
        image: project10
      },
      {
        id: 26,
        title: 'Restaurant',
        image: project9
      },
      {
        id: 27,
        title: 'Hotel',
        image: project8
      },
      {
        id: 28,
        title: 'Shopping Mall',
        image: project7
      },
      {
        id: 29,
        title: 'Fitness Center',
        image: project6
      },
      {
        id: 30,
        title: 'Medical Clinic',
        image: project5
      },
      {
        id: 31,
        title: 'Conference Center',
        image: project4
      },
      {
        id: 32,
        title: 'Cinema Complex',
        image: project3
      },
      {
        id: 33,
        title: 'Sports Facility',
        image: project2
      },
      {
        id: 34,
        title: 'Educational Center',
        image: project1
      }
    ]
  };

  return (
    <main className="pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light mb-4">Our Projects</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of architectural and design projects.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-8 mb-12">
          <button 
            onClick={() => setActiveCategory('residential')}
            className={`text-lg font-light px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === 'residential' 
                ? 'bg-black text-white shadow-lg transform scale-105' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            Residential
          </button>
          <button 
            onClick={() => setActiveCategory('interior')}
            className={`text-lg font-light px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === 'interior'
                ? 'bg-black text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            Interior
          </button>
          <button 
            onClick={() => setActiveCategory('commercial')}
            className={`text-lg font-light px-6 py-2 rounded-full transition-all duration-300 ${
              activeCategory === 'commercial'
                ? 'bg-black text-white shadow-lg transform scale-105'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            Commercial
          </button>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {projectCategories[activeCategory].map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-16 py-16 bg-gray-50"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">Have a Project in Mind?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss your vision and create something extraordinary together. Our team is ready to bring your ideas to life.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
          >
            START YOUR PROJECT
          </button>
        </motion.div>

        <ProjectRequestModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </main>
  );
};

export default Projects;