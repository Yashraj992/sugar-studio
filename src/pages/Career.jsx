import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    portfolio: null,
    coverLetter: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Architect',
      location: 'Shillong',
      type: 'Full-time',
      description: 'Lead architectural projects and mentor junior team members.',
      requirements: [
        '8+ years of experience in architectural design',
        'Strong portfolio of completed projects',
        'Proficiency in AutoCAD and Revit',
        'Experience with sustainable design principles'
      ]
    },
    {
      id: 2,
      title: 'Interior Designer',
      location: 'Shillong',
      type: 'Full-time',
      description: 'Create innovative interior spaces that blend aesthetics with functionality.',
      requirements: [
        '5+ years of experience in interior design',
        'Expertise in space planning and material selection',
        'Strong visualization skills',
        'Experience with residential and commercial projects'
      ]
    },
    {
      id: 3,
      title: 'Project Manager',
      location: 'Shillong',
      type: 'Full-time',
      description: 'Oversee project execution and client relationships.',
      requirements: [
        '6+ years of project management experience',
        'Strong communication and leadership skills',
        'Experience in architectural project management',
        'PMP certification preferred'
      ]
    }
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      portfolio: null,
      coverLetter: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="h-[60vh] relative bg-black text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a creative team that's shaping the future of architecture and design in Meghalaya.
            </p>
            <Link
              to="#openings"
              className="inline-block border border-white px-8 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              VIEW OPENINGS
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            Why Join Sugar Studio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <h3 className="text-xl font-light mb-4">Creative Freedom</h3>
              <p className="text-gray-600">
                Express your innovative ideas in a supportive environment that encourages creativity and experimentation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <h3 className="text-xl font-light mb-4">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning and professional development through mentorship and training programs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="p-6 bg-gray-50 rounded-lg"
            >
              <h3 className="text-xl font-light mb-4">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible schedules and remote work options to maintain a healthy work-life balance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
            Current Openings
          </h2>
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-light mb-2">{job.title}</h3>
                <div className="flex gap-4 text-gray-600 mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <p className="text-gray-700 mb-6">{job.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-light mb-3">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => handleApply(job)}
                  className="inline-block border border-black px-6 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
                >
                  APPLY NOW
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always interested in hearing from talented individuals. Send us your resume and portfolio, and we'll keep you in mind for future opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-black px-8 py-3 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-light mb-6">Apply for {selectedJob.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Resume</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  className="w-full"
                  accept=".pdf,.doc,.docx"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Portfolio (Optional)</label>
                <input
                  type="file"
                  name="portfolio"
                  onChange={handleInputChange}
                  className="w-full"
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 h-32"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white hover:bg-gray-800"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default Career;